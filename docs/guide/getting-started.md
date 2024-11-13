<!-- 这个一级标题会作为sidebar配置的标题 -->
# 快速上手

## 依赖环境

- [Node.js v16+](https://nodejs.org/zh-cn)
- [Node.js 历史版本](https://nodejs.org/dist/)

## 安装

- 全局安装脚手架核心包

```bash
npm i -g @cjp-cli-dev/core
```

## 使用

Windows系统推荐使用 [cmder](https://cmder.app/) 来运行脚手架，可以减少很多奇怪的报错现象。MacOS请随意。

[一份cmder配置参考教程](https://blog.csdn.net/weixin_44205779/article/details/114657837)

### 注意事项

**核心命令目前需要做一些配置才可以使用，请查阅 [核心命令](./core-command.md) 文档，下面演示一些简单命令**

- **以codelint命令作为示例**:

安装统一代码规范，假设你当前项目为vue-project

```bash
cd vue-project
cjp-cli-dev codelint --install
```

接着只需要按照提示进行选择或输入即可将统一代码规范功能安装到项目中。

命令参数支持简化，如：

```bash
cjp-cli-dev codelint -i
```

你可以通过以下方式查看命令使用帮助

```bash
cjp-cli-dev codelint --help
# or
cjp-cli-dev codelint -h
```
