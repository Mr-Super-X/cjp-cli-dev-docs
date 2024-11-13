# 配置

::: tip
脚手架命令使用npm来安装模板，因此你需要将模板发布到npm上，修改配置后进行安装。
:::

作为一款通用脚手架，你可以按团队要求定制自己的模板来快速复用。

模板如何创建？请查看 [模板](./template.md) 说明。

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

### 项目/组件库模板配置

### 页面模板配置

### 代码片段模板配置

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
