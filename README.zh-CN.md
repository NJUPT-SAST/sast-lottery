# SAST Lottery — SAST 抽奖系统

[English](README.md)

该项目使用 Vue 3 和 Vite 构建。

## 使用方法

前往“名单导入”页面，上传符合以下格式的 CSV 文件，该格式可以直接从金数据导出。

```csv
序号,学号,姓名
1,B20031001,张三
2,B20031002,李四
3,Q20031003,王五
```

列表长度不限，空行、尾随逗号、第一行和第一列将被忽略。

导入完成后，前往“抽奖”页面，点击页面中间的按钮即可开始抽奖。

## 先决条件

- [Node.js][nodejs]，建议使用 v18 或更高版本。
- [pnpm][pnpm]。npm 或 yarn 可能足以构建，但未经测试。使用它们需自担风险。

## 推荐的 IDE 设置

- [Visual Studio Code][vs-code]
- [Vue Language Features (Volar)][volar]
- [TypeScript Vue Plugin (Volar)][volar-ts]

## 在 TS 中支持 `.vue` 导入的类型

TypeScript 默认无法处理 `.vue` 导入的类型信息，因此我们使用 `vue-tsc` 替换 `tsc` CLI 进行类型检查。在编辑器中，我们需要 [TypeScript Vue Plugin (Volar)][volar-ts] 使 TypeScript 语言服务认识 `.vue` 类型，或使用 [Take Over Mode][volar-takeover-mode]。

## 项目配置脚本

### 安装依赖

```sh
pnpm install
```

### 编译并使用热重载进行开发

```sh
pnpm dev
```

### 用 [ESLint][eslint] 进行代码检查

```sh
pnpm lint
```

### 编译并压缩用于生产

```sh
pnpm build
```

[nodejs]: https://nodejs.org/
[pnpm]: https://pnpm.io/
[vs-code]: https://code.visualstudio.com/
[volar]: https://marketplace.visualstudio.com/items?itemName=Vue.volar
[volar-ts]: https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin
[volar-takeover-mode]: https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669
[eslint]: https://eslint.org/
