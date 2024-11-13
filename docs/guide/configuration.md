# 配置

::: tip
脚手架命令使用npm来安装模板，因此你需要将模板发布到npm上，修改配置后进行安装。

本地配置和MongoDB只需选择一项就行，优先读取本地配置。
:::

作为一款通用脚手架，你可以按团队要求定制自己的模板来快速复用。

模板如何创建？请查看 [模板创建](./template.md) 说明。

## 本地JSON配置

以Windows示例，本地JSON配置目录在 `C:/用户主目录/.cjp-cli-dev/data` 中，如：

![脚手架配置目录截图](../../docs/.vuepress/public/images/local-config.png)

### 项目/组件库模板配置

下面是我创建好的测试配置，你可以使用它来进行测试，请在本地配置目录中创建 `project.json` ，并将以下代码粘贴到项目模板配置文件中。

```json
[
  {
    "name": "vue3-vite标准模板",
    "npmName": "cjp-cli-dev-template-vue3",
    "description": "",
    "version": "1.0.0",
    "type": "normal",
    "tag": [
      "project"
    ],
    "ignore": [
      "**/public/**"
    ],
    "installCommand": "npm install",
    "startCommand": "npm run dev"
  },
  {
    "name": "vue3-webpack自定义模板",
    "npmName": "cjp-cli-dev-template-vue3-admin",
    "description": "",
    "version": "1.0.0",
    "type": "custom",
    "tag": [
      "project"
    ],
    "ignore": [
      "**/public/**"
    ]
  },
  {
    "name": "通用vue3组件库模板",
    "npmName": "cjp-cli-dev-template-vue3-component",
    "description": "",
    "version": "1.0.6",
    "type": "normal",
    "tag": [
      "component"
    ],
    "ignore": [
      "**/public/**",
      "**/**.png"
    ],
    "installCommand": "npm install --registry=https://registry.npmmirror.com",
    "startCommand": "npm run serve",
    "buildPath": "dist",
    "examplePath": "examples"
  },
  {
    "name": "vue3-vite自定义模板",
    "npmName": "cjp-cli-dev-template-vue3-custom",
    "description": "",
    "version": "1.0.0",
    "type": "custom",
    "tag": [
      "project"
    ],
    "ignore": [
      "**/public/**"
    ],
    "installCommand": "npm install",
    "startCommand": "npm run dev"
  },
  {
    "name": "vue3-webpack移动端标准模板",
    "npmName": "cjp-cli-dev-template-vue3-webpack-mobile",
    "description": "移动端项目，来源于水利门户粤政易端",
    "version": "1.0.0",
    "type": "normal",
    "tag": [
      "project"
    ],
    "ignore": [
      "**/public/**"
    ],
    "installCommand": "npm install",
    "startCommand": "npm run dev"
  }
]
```

### 页面模板配置

下面是我创建好的测试配置，你可以使用它来进行测试，请在本地配置目录中创建 `page.json` ，并将以下代码粘贴到项目模板配置文件中。

```json
[
  {
    "name": "vue3首页模板",
    "description": "用于演示标准ejs渲染的页面模板",
    "npmName": "cjp-cli-dev-template-vue3-template-page",
    "version": "latest",
    "targetPath": "src/views/home",
    "ignore": [
      "**/**.png"
    ],
    "type": "normal"
  },
  {
    "name": "vue3自定义页面模板",
    "npmName": "cjp-cli-dev-template-vue3-page-custom",
    "description": "用于演示自定义ejs渲染的页面模板，采用vue3+vite搭建",
    "version": "latest",
    "targetPath": "src/views",
    "ignore": [
      "**/**.png"
    ],
    "type": "custom"
  }
]
```

### 代码片段模板配置

下面是我创建好的测试配置，你可以使用它来进行测试，请在本地配置目录中创建 `section.json` ，并将以下代码粘贴到项目模板配置文件中。

```json
[
  {
    "name": "vue3代码片段模板1",
    "npmName": "cjp-cli-dev-template-vue3-section",
    "description": "",
    "version": "latest",
    "targetPath": "./"
  },
  {
    "name": "vue3代码片段模板2",
    "npmName": "cjp-cli-dev-template-vue3-section-template",
    "description": "",
    "version": "latest",
    "targetPath": "src/"
  }
]
```

## MongoDB配置

> 没有必要需求使用本地JSON配置即可，毕竟配置服务端比较麻烦，也不是每个前端都想学习服务端，随意吧。

### 前置工作

1.你需要先安装MongoDB和UI界面管理工具（Windows推荐MongoDBCompass，MacOS随意）。

- [MongoDB 下载](https://www.mongodb.com/try/download/community)
- [MongoDBCompass 下载](https://www.mongodb.com/try/download/compass)
- [MongoDB 参考教程](https://www.runoob.com/mongodb/mongodb-tutorial.html)
- [MongoDBCompass 参考教程](https://developer.aliyun.com/article/1618937)

2.打开MongoDBCompass，连接默认（localhost:27017）后创建数据库和数据表，如下图所示：

如果你不知道怎么操作，请点击上面的MongoDBCompass 参考教程链接。

![MongoDB数据库截图](../../docs/.vuepress/public/images/mongodb-db.jpg)

操作完成后我们拥有了以下内容，接着只需要插入相应的配置到数据表中即可

- `cjp-cli-dev数据库`
- `project数据表`：参考前面文章内容 `本地JSON配置 > 项目/组件库模板配置`
- `page数据表`：参考前面文章内容 `本地JSON配置 > 页面模板配置`
- `section数据表`：参考前面文章内容 `本地JSON配置 > 代码片段模板配置`

3.启动服务端，通过服务端提供接口连接 `MongoDB > cjp-cli-dev数据库` 来获取数据（穷鬼买不起服务器和域名，需要拉服务端代码来启动）

- 配置host域名映射，好处是未来更换任何服务器都可以通过域名映射过去而不用修改源码，推荐安装 [SwitchHost](https://github.com/oldj/SwitchHosts/releases) 管理host配置：

```yaml
127.0.0.1 cjp.clidev.xyz
```

- 克隆服务端仓库代码（使用eggjs搭建）

```bash
# 克隆仓库
git clone https://gitee.com/Mr_Mikey/cjp-cli-server.git
# 进入项目目录
cd cjp-cli-server
# 安装依赖
npm install
# 启动项目
npm run dev
```

## 配置模板字段说明

### 项目/组件库模板字段说明

项目和组件库模板的配置大部分字段都是一样的，不同的字段会做说明

| 字段名称       | 描述                                                       | 数据类型       | 是否必填 | 默认值 |
| -------------- | ---------------------------------------------------------- | -------------- | -------- | ------ |
| name           | 项目模板中文名字                                           | String         | 是       | 无     |
| description    | 这个项目模板的描述                                         | String         | 否       | 无     |
| npmName        | 要安装的npm包名                                            | String         | 是       | 无     |
| version        | 要安装的npm包版本（填写版本号或latest）                    | String         | 是       | 无     |
| type           | 项目类型（支持normal、custom）                             | String         | 是       | 无     |
| tag            | 项目类型标记（支持project、component）                     | Array\<String> | 是       | 无     |
| ignore         | ejs忽略配置（某个目录或者文件不需要ejs渲染）               | Array\<String> | 否       | 无     |
| installCommand | 项目安装命令（脚手架命令会读取该参数决定是否自动安装依赖） | String         | 否       | 无     |
| startCommand   | 项目启动命令（脚手架命令会读取该参数决定是否自动启动项目） | String         | 否       | 无     |

::: tip
`type` 字段目前支持项目配置 `normal` 和 `custom` ，组件库暂时仅支持 `normal` 。

`normal` 代表标准项目模板，`custom` 代表自定义项目模板。

请查看 [如何创建项目模板](./template.md#如何创建项目模板)
:::

组件库模板比项目模板多了两个字段配置，如下：

| 字段名称    | 描述             | 数据类型 | 是否必填 | 默认值   |
| ----------- | ---------------- | -------- | -------- | -------- |
| buildPath   | 构建结果输出路径 | String   | 是       | dist     |
| examplePath | 组件预览页面路径 | String   | 是       | examples |

::: tip
`buildPath` 不需要怎么解释，就是组件库的build输出结果目录 。

`examplePath` 表示组件示例页面的路径，例如开发一个element-ui，则每个组件对应有一个预览页面可供查看。

请查看 [如何创建组件库模板](./template.md#如何创建组件库模板)
:::

### 页面模板字段说明

| 字段名称    | 描述                                                     | 数据类型       | 是否必填 | 默认值 |
| ----------- | -------------------------------------------------------- | -------------- | -------- | ------ |
| name        | 页面模板的中文名字                                       | String         | 是       | 无     |
| description | 这个页面模板的描述                                       | String         | 否       | 无     |
| npmName     | 要安装的npm包名                                          | String         | 是       | 无     |
| version     | 要安装的npm包版本（填写版本号或latest）                  | String         | 是       | 无     |
| targetPath  | 页面模板的路径（当前模板中有多个页面时指定要安装哪一个） | String         | 是       | 无     |
| type        | 页面模板类型（支持normal、custom）                       | String         | 是       | 无     |
| ignore      | ejs忽略配置（某个目录或者文件不需要ejs渲染）             | Array\<String> | 否       | 无     |

::: tip
`targetPath` 的作用是指定要安装哪一个页面模板，比如当前提供的模板库中有n个页面模板，我只需要安装 `src/views/home`，则指定该字段即可。
:::

### 代码片段模板字段说明

| 字段名称    | 描述                                    | 数据类型 | 是否必填 | 默认值 |
| ----------- | --------------------------------------- | -------- | -------- | ------ |
| name        | 代码片段模板的中文名字                  | String   | 是       | 无     |
| description | 这个代码片段模板的描述                  | String   | 否       | 无     |
| npmName     | 要安装的npm包名                         | String   | 是       | 无     |
| version     | 要安装的npm包版本（填写版本号或latest） | String   | 是       | 无     |
| targetPath  | 代码片段模板的路径                      | String   | 是       | 无     |
