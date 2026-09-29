# Переход на FSD-архитектуру

**Дата:** 2026-09-30
**Коммит(ы):** ещё не закоммичено (working tree)

## Зачем

Лендинг MELNIK° существовал как один статический файл
`src/MELNIK° — свет и тень.html` — вёрстка, инлайн-стили и ванильный JS
(CCT-слайдер, переключатель угла луча, scroll-хедер, reveal-анимация стены)
в одном файле. Нужно было перенести это в компоненты на React, организованные
по слоям Feature-Sliced Design, с CSS Modules вместо глобального CSS.

## Что сделано

- Разобрали исходный HTML на слои: `app` → `pages/home` → `widgets` (12 секций:
  header, hero, light-demo, services, designers, process, pricing, portfolio,
  founder, statement, contact, footer) → `features/light-preview` → `entities`
  (`service`, `process-step`, `pricing-tier`, `project`) → `shared`.
- `shared/ui`: `Button`, `Container`, `PhotoPlaceholder`, `SectionHeading`,
  `SegmentedControl` — переиспользуемые атомы, вынесенные из повторяющихся
  CSS-паттернов оригинала (например, `.head` буквально повторялся в 5 секциях →
  стал `SectionHeading`).
- `features/light-preview`: стейт CCT/угла луча (`useLightPreview`), разовая
  reveal-анимация по `IntersectionObserver` (`useWallReveal`), чистые функции
  `kelvinToRgb`/`moodDescription` без DOM.
- Настроен алиас `@/*` → `src/*` (`vite.config.ts` + `tsconfig.app.json`),
  все кросс-слойные импорты идут через публичный `index.ts` слайса.
- Ассеты/boilerplate create-vite (`App.tsx`, `App.css`, `index.css`,
  `hero.png`, `react.svg`, `vite.svg`, `public/icons.svg`) и исходный HTML
  удалены — контент полностью перенесён в компоненты.

## Почему так, а не иначе

- **CSS Modules, не global CSS** — осознанный выбор пользователя: больше
  инкапсуляции ценой необходимости переименовать почти все классы.
- **`pages/home` как отдельный слой**, хотя сайт — один лендинг: стандартно
  для FSD, не мешает добавить вторую страницу без переезда структуры.
- **Не каждый список — entity.** 3 карточки "promises" в `designers`
  остались локальным массивом в виджете: используются один раз, не являются
  переиспользуемым доменным типом — создавать под них entity means лишняя
  абстракция (YAGNI).
- **CSS-переменные луча (`--light`, `--bw`, `--bh`, `--core`, `--i`)** в
  оригинале мутировали `document.documentElement`; при портировании их
  повесили на инлайн-стиль конкретного `<div>` стены — компонент не должен
  трогать глобальный `:root`.

## На что обратить внимание

- **`.lead` — общий класс**, не Hero-специфичный: в оригинале одно и то же
  правило `.lead{...}` используется и в Hero, и в Contact (просто с разным
  margin через контекстный селектор `.contact .lead`). Базовый стиль лежит
  в `shared/styles/globals.css`, контекстные переопределения — через
  `:global(.lead)` в `ContactSection.module.css`. Если добавляете третье
  место с "lead"-параграфом — используйте тот же паттерн, не дублируйте стиль.
- **`aspect-ratio` фото-плейсхолдеров задаётся через `className`, не через
  проп/инлайн-стиль** — это осознанно: в оригинале у Hero и первого элемента
  Portfolio `aspect-ratio` меняется по media-запросу
  (`.hero .ph{aspect-ratio:16/8}` → `4/3` на мобильном). Инлайн-стиль такой
  media-override перебить не может (выше specificity), поэтому
  `PhotoPlaceholder` принимает только `focusX`/`focusY`/`focusX2` как стиль,
  а `ratio` — исключительно через класс родителя.
- **`section`, `h2`, `h3` — глобальные теговые селекторы** в
  `shared/styles/globals.css`, а не CSS-модули: в оригинале это было осознанно
  общее правило для 6+ секций. Компонентные модули переопределяют их через
  более специфичные селекторы (например, `.rows h3{margin:0}`), а не
  дублируют базовые значения.
- **`useWallReveal`** — начальный `useState` вычисляется лениво
  (`() => !('IntersectionObserver' in window)`), а не `setState` внутри
  `useEffect` — иначе `eslint-plugin-react-hooks` (React Compiler) ругается
  на `set-state-in-effect`.
