# 核心命令

核心命令包含 **项目/组件库初始化、发布、回滚生产版本、复用代码** 等一系列功能。

使用前你需要先安装脚手架，如果你还没有安装，请查看 [快速上手](./getting-started.md) 。

关于核心命令的架构，请查看 [命令模块架构](../framework/commands.md) 说明。

## 初始化 - init命令

初始化项目或组件库，通过npm安装项目或组件库模板。支持标准项目模板创建、自定义项目模板创建、组件库模板创建、模板自动安装和启动等配置。

::: tip
关于各种模板的说明以及如何创建，请查看 [模板](./template.md) 文档。
:::

::: tip
为了串联前后端整体学习，我使用了 `MongoDB` 来配置模板数据，请查看 [MongoDB配置模板](./configuration.md#mongodb配置模板) 说明。
:::

::: tip
为了方便使用，我新增了对本地配置的支持，需要在脚手架缓存目录中创建JSON文件配置，请查看 [本地JSON配置模板](./configuration.md#项目-组件库模板配置) 说明。
:::

::: tip
如果你还不熟悉脚手架的使用范式，请查看 [快速上手](./getting-started.md#命令使用范式) 说明。

如果你想查看当前命令支持什么参数，请查看 [命令使用帮助](./getting-started.md#命令使用帮助)。
:::

### 使用

你可以按照以下方式使用

```bash
cjp-cli-dev init [projectName]
# 或者你不输入项目名称也可以，直接执行命令，执行过程中会提示你输入项目名称，如：
cjp-cli-dev init
```

`init` 命令支持以下参数

| 参数名     | 参数说明                               | 默认值     |
| ---------- | -------------------------------------- | ---------- |
| --registry | 指定 `npm` 下载源                      | 系统当前源 |
| --force    | 强制初始化，清空当前目录并安装新的模板 | false      |

### 示例

你现在想创建一个项目 `test-project` ，需要先创建一个 `test-project` 文件夹 ，进入该文件夹，执行以下命令，选择你想要安装的项目模板，当然，这需要你先配置好模板数据，查看 [模板如何配置](./configuration.md)。

```bash
cjp-cli-dev init test-project
```

由于你太菜了，一不小心把代码搞坏了，于是你希望重新安装模板再来过，暗暗发誓这次一定要成功，但你又不想手动删除项目里的文件。

```bash
cjp-cli-dev init test-project --force
```

此时你发现安装速度非常慢，一气之下想换个速度快的下载源。

```bash
cjp-cli-dev init test-project --force --registry https://registry.npmmirror.com/
```

### 动画演示

做个动画给你看看，只要你闭上眼就很难发现作者只演示了一小部分。

![init命令演示动画](../../docs/.vuepress/public/images/init-command.gif)

### 关于

讲点正经的，职业生涯中总会接触一些优秀项目，一直没有一个好的方式来整合和管理，需要使用的时候只能去找历史备份，然后手动改，特别麻烦。

眼馋 [vue-cli](https://cli.vuejs.org/zh/guide/) 安装vue项目模板的能力，想借此机会实现一个自己的 `init` 命令，把自己在工作中经历和接触过的比较好的项目提炼出来发布到 npm，未来在任何地方都能通过脚手架命令实现快速复用。

模板怎么创建？请点击以下链接查看教程。

- [如何创建项目模板](./template.md#如何创建项目模板)
- [如何创建组件库模板](./template.md#如何创建组件库模板)

### 安装组件库说明

`init` 命令安装类型为 `组件` 时，会在源码根目录中额外生成一个 `.componentrc` 文件，该文件中记录了 [组件库模板](./configuration.md#项目-组件库模板字段说明) 来源的相关信息，该文件将作为 `publish` 命令发布 `项目` 还是 `组件` 的判断依据，不同类型会走不同的发布逻辑分支，文件内容示例如下：

```json
{
  "type": "component",
  "projectName": "@cjp-cli-dev/test-components",
  "projectVersion": "1.0.0",
  "projectTemplate": "cjp-cli-dev-template-vue3-component",
  "componentDescription": "组件库通用模板",
  "buildPath": "dist",
  "examplePath": "examples",
  "npmName": "cjp-cli-dev-template-vue3-component"
}
```

## 发布 - publish命令

发布项目或组件库，包括**测试发布和正式发布** 、支持自动在 `github` 、`gitee` 创建远程仓库和提交代码、`Git Flow` 自动化处理。 支持**项目云构建、云发布**，采用 `Redis` 管理云构建任务数据，发布完成自动清除 `Redis` 缓存，静态资源自动上传 `阿里OSS`、自动同步代码和创建版本tag，支持 `MySQL` 管理发布组件信息。

::: tip
为了串联前后端整体学习，我使用了 `Redis`、`MySQL` 以及 `OSS静态资源托管`，这些都需要依赖服务端应用，请查看 [启动服务端](./configuration.md#启动服务端) 说明。

如果你想体验 `云构建`、`云发布` 功能，请先安装并配置好 `Redis`、`OSS`、`MySQL` ，点击以下链接查看详细操作教程。

- [如何安装和配置 Redis](./configuration.md#redis配置)
- [如何安装和配置 MySQL](./configuration.md#mysql配置)
- [如何配置 OSS](./configuration.md#oss配置)
:::

::: tip
为了方便使用，我新增了 `--noCloudBuild` 参数，针对项目类型，指定该参数时会关闭云构建和云发布，你可以手动上传构建结果到OSS或自己的静态资源服务器。

针对组件库类型，也新增了 `--componentNoDb` 参数，指定该参数可以关闭将组件信息写入 `MySQL` 操作。

如果你还不怎么了解服务端知识，在执行发布命令时针对不同类型项目添加以上参数，能够让你快速体验脚手架功能。
:::

::: tip
由于目前我没有域名和服务器，`OSS` 上无法配置域名解析直接进行页面访问，你可以按照自己的需求修改服务端代码以适配自己的需求，当然，这需要你对服务端有一定了解。

我也会补充一些相关教程，敬请期待。
:::

::: tip
`publish` 命令执行时，将读取源码根目录中的 `.componentrc` 文件，如果存在该文件，则认为这是一个组件库，并执行组件库发布流程，反之则发布项目。查看 [安装组件库说明](#安装组件库说明) 。
:::

::: tip
如果你还不熟悉脚手架的使用范式，请查看 [快速上手](./getting-started.md#命令使用范式) 说明。

如果你想查看当前命令支持什么参数，请查看 [命令使用帮助](./getting-started.md#命令使用帮助)。
:::

### 使用

你可以按照以下方式使用

```bash
cjp-cli-dev publish
```

`publish` 命令支持以下参数

| 参数名             | 参数说明                   | 默认值          |
| ------------------ | -------------------------- | --------------- |
| --refreshGitServer | 更新Git托管平台            | false           |
| --refreshGitToken  | 更新Git托管平台token       | false           |
| --refreshGitOwner  | 更新Git仓库登录类型        | false           |
| --production       | 是否正式发布               | false           |
| --buildCmd         | 指定自定义构建命令         | "npm run build" |
| --registry         | 指定 `npm` 下载源          | 系统当前源      |
| --noCloudBuild     | 发布项目不开启云构建       | false           |
| --componentNoDb    | 发布组件库信息不写入数据库 | false           |
| --sshUser          | 指定模板服务器用户名       | 无              |
| --sshIp            | 指定模板服务器IP或域名     | 无              |
| --sshPath          | 指定模板服务器上传路径     | 无              |

### 示例

刚才你通过 `init` 命令创建了 `test-project` 项目，你很懒，不想手动打开浏览器输入全球最大的同性交友网站 `Github` 地址，还要再苦逼的创建仓库然后给 `test-project` 设置远程地址再推送代码巴拉巴拉，这时候你还发现登录状态过期了，还要你输入账密加验证进行登录，于是火大的你给自己创建了一个过期时间老久老久的 [access_token](https://github.com/settings/tokens)，以后再也不想体验手动这么麻烦的事情了，你突然想到了好像有个功能不完善的渣渣命令刚好能满足你当下想偷懒的想法，只需要输入一行命令，什么智能提醒、智能检查、自动提交、版本管理通通一网打尽，简直不要太爽。

```bash
cjp-cli-dev publish
```

你有点花心，不满足于创建个人仓库自己一个人单排，还想创建小组织拉点人深夜一起去小房间讨论技术。于是你在全球最大的同性交友网站上创建了一个交友组织，并切换身份发布了一个群聊。

```bash
cjp-cli-dev publish --refreshGitOwner
```

某天你心血来潮，想去祸害一下国区码云 `Gitee`，于是你又去码云给自己创建了一个过期时间老久老久的 [access_token](https://gitee.com/personal_access_tokens)，但却不知道要怎么切换托管平台，心里很不爽，没想到的是作者预判了你的预判。

```bash
cjp-cli-dev publish --refreshGitServer --refreshGitToken
```

由于你以前没有同性交友的经验，经过长期在小群里面锻炼，你现在胆子大了，想把交友信息正式发布到交友大群里。

```bash
cjp-cli-dev publish --production
```

在你发布交友信息时你发现提供模板那傻逼给的打包命令不对，于是你还得自己动手丰衣足食。

```bash
cjp-cli-dev publish --buildCmd "npm run build:prod"
```

在你好不容易解决了所有问题后，发送交友信息终于成功了，但你发现发送信息很慢，这你忍不了，于是给它打了点鸡血让它加速发送。

```bash
cjp-cli-dev publish --registry https://registry.npmmirror.com/
```

你发布了一条交友信息，并把标题伪装成【项目发布】，结果发现作者那傻逼搞了什么云构建啥啥的导致发布失败了，你也搞不懂但你知道搞起来贼麻烦，于是你花了点小钱强迫作者开了后门。

```bash
cjp-cli-dev publish --noCloudBuild
```

你上次交友非常成功，感叹有钱真好的同时又发布了一条交友信息，并把标题伪装成【组件发布】，又发现作者那傻逼搞了什么 `MySQL` 管理组件发布信息，导致发布再次失败了，于是你再次感叹了有钱真好。

```bash
cjp-cli-dev publish --componentNoDb
```

由于最近频繁交友导致开销有点大，手头紧，这次你不想和作者玩了，你想把发布的交友信息备份到自己的电脑里，下次交新朋友可以直接拿来撒网。

```bash
cjp-cli-dev publish --sshUser root --sshIp 1xx.xx.xx.xx:8888 --sshPath /data/apps
```

### 动画演示

做个动画给你看看，只要你闭上眼就很难发现作者只演示了一小部分。

![publish命令演示动画](../../docs/.vuepress/public/images/publish-command.gif)

### 关于

讲点正经的，`publish` 命令目前还在开发阶段，这里面涉及到很多复杂的实现，每个公司的规范和流程都有所区别，该命令还有很多不完善的地方，但这是一个很好的实现思路，按照这个思路你可以复刻出属于自己公司的标准自动化发布工具。

## 回滚 - rollback命令

回滚生产版本，支持回滚master分支到指定release tag，自动本地构建回滚版本。

::: tip
如果你还不熟悉脚手架的使用范式，请查看 [快速上手](./getting-started.md#命令使用范式) 说明。

如果你想查看当前命令支持什么参数，请查看 [命令使用帮助](./getting-started.md#命令使用帮助)。
:::

### 使用

你可以按照以下方式使用

```bash
cjp-cli-dev rollback
```

`rollback` 命令支持以下参数

| 参数名     | 参数说明           | 默认值          |
| ---------- | ------------------ | --------------- |
| --buildCmd | 指定自定义构建命令 | "npm run build" |

### 示例

前面你通过 `publish` 命令发布了项目 `test-project` 到生产环境，出了bug被老板屌了，老板说限你十分钟内把问题处理好，但这个bug你评估下来十个小时也不一定能修好，于是只好先回滚。你回滚到上一个版本后发现还有问题，于是又继续执行命令选择回滚上上个版本。

```bash
cjp-cli-dev rollback
```

你发现项目的构建命令不是 `npm run build`，于是你重新指定构建命令

```bash
cjp-cli-dev rollback --buildCmd "npm run build:prod"
```

### 动画演示

做个动画给你看看，这次基本演示完整了。

![rollback命令演示动画](../../docs/.vuepress/public/images/rollback-command.gif)

### 关于

`rollback` 命令目前也还在开发阶段并不完善，但它实现了快速回滚 `master` 分支代码，并将回滚前的 `master` 分支代码自动备份到如 `backup/master/rollback-release/1.0.0` 分支的能力，同时自动构建回滚后的版本，你可以自行决定部署方式。

你可能注意到 `release/1.0.0` 这个标签，这意味着版本需要严格按照范式来进行发布管理，回滚命令的能力也强依赖于标准的 `Git Tag` 管理，推荐统一使用 `publish` 命令进行发布，因为它内部集成了自动版本管理功能。

为什么回滚后不自动发布和部署？

一是因为作者懒，二是因为还有一些通用能力的东西没想清楚。你可以借鉴它来复刻自己的自动回滚流程。

手动发布的考虑因素：

- 安全性：考虑回滚操作可能带来的安全风险。例如，如果回滚到包含已知安全漏洞的版本，则不应自动发布。
- 谨慎性：手动发布允许你在发布前进行更多的检查和确认，从而确保发布的代码是稳定和安全的。
- 灵活性：手动发布提供了更大的灵活性，可以根据需要选择是否发布、何时发布以及发布到哪个环境。
- 团队协作：手动发布可以确保团队成员之间的沟通和协作，从而避免意外的发布或覆盖其他人的工作。

## 复用代码 - add命令

添加组件代码片段模板、标准页面模板、自定义页面模板到本地项目。支持自动写入组件到指定代码位置，自动导入并注册局部组件，自动合并项目依赖。

::: tip
关于各种模板的说明以及如何创建，请查看 [模板](./template.md) 文档。

**请注意：目前仅支持vue项目**
:::

::: tip
为了串联前后端整体学习，我使用了 `MongoDB` 来配置模板数据，请查看 [MongoDB配置模板](./configuration.md#mongodb配置模板) 说明。
:::

::: tip
为了方便使用，我新增了对本地配置的支持，需要在脚手架缓存目录中创建JSON文件配置。

页面模板类型请查看 [页面模板配置](./configuration.md#页面模板配置) 说明。

组件模板类型请查看 [代码片段模板配置](./configuration.md#代码片段模板配置) 说明。
:::

::: tip
如果你还不熟悉脚手架的使用范式，请查看 [快速上手](./getting-started.md#命令使用范式) 说明。

如果你想查看当前命令支持什么参数，请查看 [命令使用帮助](./getting-started.md#命令使用帮助)。
:::

### 使用

你可以按照以下方式使用

```bash
cjp-cli-dev add [templateName]
# 或者你不输入项目名称也可以，直接执行命令，执行过程中会提示你输入项目名称，如：
cjp-cli-dev add
```

`init` 命令支持以下参数

| 参数名     | 参数说明          | 默认值     |
| ---------- | ----------------- | ---------- |
| --registry | 指定 `npm` 下载源 | 系统当前源 |

### 示例

前面你通过 `init` 命令创建了一个项目 `test-project` ，假设你是个大牛，在 `npm` 上发布了很多个组件或页面模板，你可以执行以下命令，选择你想要复用的页面或组件模板，脚手架会自动将模板依赖和 `test-project` 项目依赖进行合并处理。当然，这需要你先配置好模板数据，查看 [模板如何配置](./configuration.md#页面模板配置)。

- 复用组件

你需要先进入对应的 .vue 入口文件目录中，比如你想把 `TestComponent` 安装写入到 `src/views/HomeView.vue` 的第7行，执行以下命令，并按照指引进行选择或输入即可。目前自动局部注册组件功能支持 `vue2 标准选项式风格`、`vue3 标准组合式风格`、`vue3  <script setup>风格`。

```bash
cd src/views/
cjp-cli-dev add TestComponent
```

::: tip
使用 `add` 命令复用 `页面模板` 和 `组件代码片段` 行为有所区别，复用 `页面模板` 时直接就在命令当前运行目录下安装 `页面模板`，而 `组件代码片段` 则会先在命令当前运行目录下检查 `components` 文件夹，没有则创建该文件夹，并在 `components` 文件夹中安装 `组件代码片段模板` 。
:::

- 复用页面

你需要先进入对应的页面管理目录中，比如你想把 `test-page` 安装写入到 `src/views` 目录下，执行以下命令，并按照指引进行选择或输入即可。与复用组件不同的是，页面需要你动下手自己配置路由，因为每个项目的路由配置方式可能存在很大差异，想实现通用是非常难的。

```bash
cd src/views/
cjp-cli-dev add test-page
```

你发现安装速度非常慢，一气之下想换个速度快的下载源。

```bash
cjp-cli-dev add test-page --registry https://registry.npmmirror.com/
```

### 动画演示

做个动画给你看看，只要你闭上眼就很难发现作者只演示了一小部分。

![add命令演示动画](../../docs/.vuepress/public/images/add-command.gif)

### 关于

在做项目的时候当你发现有一些页面或者组件大量使用到时，常规做法是手动把它们拷过来，会比较麻烦而且效率不高，经常容易漏拷贝导致浪费很多时间，不妨把他们单独抽离成模板发布到 `npm` 进行管理，通过脚手架命令来实现快速复用。

模板怎么创建？请点击以下链接查看教程。

- [如何创建页面模板](./template.md#如何创建页面模板)
- [如何创建代码片段模板](./template.md#如何创建代码片段模板)

> PS：感谢Bug探测器-我敏姐测出不少Bug，给了我好好改造重新做人的机会，使得脚手架更加完美。
