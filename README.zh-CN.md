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

- [Node.js][nodejs]，建议使用 v20 或更高版本。
- [pnpm][pnpm]。npm 或 yarn 可能足以构建，但未经测试。使用它们需自担风险。

## 推荐的 IDE 设置

- [Visual Studio Code][vs-code]
- [Vue - Official][vue]

## 项目配置脚本

### 安装依赖

```sh
pnpm install
```

### 编译并使用热重载进行开发

```sh
pnpm dev
```

### 用 [ESLint][eslint] 与 [Stylelint][stylelint] 进行代码检查

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
[vue]: https://marketplace.visualstudio.com/items?itemName=Vue.volar
[eslint]: https://eslint.org/
[stylelint]: https://stylelint.io/
