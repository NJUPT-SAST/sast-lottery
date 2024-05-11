# SAST Lottery — SAST 抽奖系统

[中文](README.zh-CN.md)

This project was build with Vue 3 in Vite.

## Usage

Navigate to the “Namelist import” page, and upload a CSV file with the following format, which can be directly exported from Jinshuju.

```csv
序号,学号,姓名
1,B20031001,张三
2,B20031002,李四
3,Q20031003,王五
```

The list can be any length, while empty lines, trailing commas, the first row and the first column will be ignored.

After importing, you can navigate to the “Lottery” page, and click the button in the middle of the page to start the lottery.

## Prerequisites

- [Node.js][nodejs], v20 or later recommended.
- [pnpm][pnpm]. npm or yarn may be sufficient for building, but they are not tested. Use them at your own risk.

## Recommended IDE Setup

- [Visual Studio Code][vs-code]
- [Vue - Official][vue]

## Project Setup Scripts

### Install Dependencies

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint][eslint] and [Stylelint][stylelint]

```sh
pnpm lint
```

[nodejs]: https://nodejs.org/
[pnpm]: https://pnpm.io/
[vs-code]: https://code.visualstudio.com/
[vue]: https://marketplace.visualstudio.com/items?itemName=Vue.volar
[eslint]: https://eslint.org/
[stylelint]: https://stylelint.io/
