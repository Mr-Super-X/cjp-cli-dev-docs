<!-- 这个一级标题会作为sidebar配置的标题 -->
# 快速上手

## 依赖环境

- [Node.js v16+](https://nodejs.org/zh-cn)
- [Node.js 历史版本下载](https://nodejs.org/dist/)

## 安装

- 全局安装脚手架核心包

```bash
npm i -g @cjp-cli-dev/core
```

## 使用

### 操作系统说明

Windows系统推荐使用 [cmder](https://cmder.app/) 来运行脚手架，可以减少很多奇怪的报错现象。MacOS请随意。

这里有一份[cmder配置参考教程](https://blog.csdn.net/weixin_44205779/article/details/114657837)

### 命令使用范式

所有命令都通过 `脚手架 + 命令 + 可选参数` 调用，查看 [commander](https://github.com/tj/commander.js/blob/HEAD/Readme_zh-CN.md) 文档。

```bash
cjp-cli-dev <command> [options]
```

::: tip
在 `commander` 制定的范式中 `<>` 表示必传，`[]` 表示可选，其它类似的库大多也是这个标准。
:::

### 命令使用帮助

你可以通过以下方式查看命令使用帮助，脚手架所有命令查看使用帮助的方式都是一致的。

```bash
cjp-cli-dev <command> --help
# or
cjp-cli-dev <command> -h
# 示例
cjp-cli-dev codelint --help
```

### 命令debug调试

脚手架所有命令都支持debug调试，只需要在命令后指定 `--debug` 参数即可，调试模式下拥有更加详细的调试输出内容以及报错时的执行栈打印。

```bash
cjp-cli-dev <command> --debug
```

### 脚手架缓存清除

脚手架所有缓存都放在 `你的用户主目录/.cjp-cli-dev` 目录中，并支持 `clean` 命令清空缓存。

```bash
# 清空依赖缓存
cjp-cli-dev clean --dep
# 清空所有缓存
cjp-cli-dev clean --all
```

### 命令使用示例

::: tip
脚手架在架构上对命令类型进行了区分，可分为：

- **[核心命令](./core-command.md)**：包含项目初始化、发布、回滚等核心功能。
- **[其他命令](./more-command.md)**：包含各种锦上添花的前端工程化配置工具或其他好用的工具（我目前想到的）。

核心命令目前需要做一些配置才可以使用，请查阅 [核心命令](./core-command.md) 说明文档，下面仅演示不依赖配置的命令如何使用。
:::

- **安装统一代码规范：codelint**

假设你当前项目为 `vue-project` ，进入项目目录，执行安装命令。

```bash
cd vue-project
cjp-cli-dev codelint --install
```

接着只需要按照提示进行选择或输入即可将统一代码规范功能安装到项目中。

命令参数支持简化，如：

```bash
cjp-cli-dev codelint -i
```

### 更多命令使用

- 查看 **[核心命令](./core-command.md)** 使用
- 查看 **[其他命令](./more-command.md)** 使用
