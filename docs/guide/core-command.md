# 核心命令

核心命令包含 **项目/组件库初始化、发布、回滚生产版本**等一系列功能。

## 初始化项目 - init命令

初始化项目或组件库，通过npm安装项目或组件库模板。支持标准项目模板创建、自定义项目模板创建、组件库模板创建、模板自动安装和启动等配置。

::: tip
关于各种模板的说明，请查看 [模板](./template.md) 文档。
:::

::: tip
为了串联前后端整体学习，我使用了MongoDB来配置模板数据，请查看 [MongoDB配置](./configuration.md#MongoDB配置) 说明。
:::

::: tip
为了方便使用，我新增了对本地配置的支持，需要在脚手架缓存目录中创建JSON文件配置，请查看 [本地JSON配置](./configuration.md#本地JSON配置) 说明。
:::

### 使用

项目/组件初始化

```bash
cjp-cli-dev init [name]
```

强制清空当前文件夹并初始化

```bash
cjp-cli-dev init --force
```

指定安装源

```bash
cjp-cli-dev init --registry https://registry.npmmirror.com/
```
