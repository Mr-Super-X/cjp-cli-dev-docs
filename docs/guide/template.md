# 模板

模板也是脚手架的核心环节，你可以按照自己的需求开发模板来实现快速复用。

::: tip
试用脚手架安装模板 [安装项目模板](./core-command.md#初始化-init命令)
:::

::: tip
演示模板参考代码 [演示模板仓库地址](https://gitee.com/Mr_Mikey/cjp-cli-dev-template)
:::

## 概念解释

- **标准模板**：仅依赖脚手架命令提供的变量参数自动进行 `ejs` 渲染，不额外依赖其它参数和操作。
- **自定义模板**：提供自定义脚本让脚手架命令运行，可自行决定渲染方式和 `ejs变量` 属性等。

## 如何创建项目模板

项目模板分为 `标准模板` 和 `自定义模板` ，在 [概念解释](#概念解释) 中强调了定义，注意，`自定义模板` 和`标准模板` 的区别是 `自定义模板` 需要额外提供一个 `index.js` 作为入口文件来自定义渲染模板内容，这在脚手架命令源码中是规定好的。

### 创建标准项目模板

1、创建模板目录如 `cjp-cli-dev-template-vue3` ，并执行npm初始化。

::: tip
文件夹名就是你的npm包名，按你自己喜欢的来命名，写什么都行，只要npm上没这个包就可以，否则发不上去。
:::

```bash
cd cjp-cli-dev-template-vue3
npm init -y
```

2、在 `cjp-cli-dev-template-vue3` 目录中创建 `template` 文件夹，找个你认为优秀的项目作为模板，这里我用 `vue-cli` 下载的 `vue3-vite` 项目作为演示，把模板内的所有文件都复制到 `template` 文件夹中。

此时你的目录结构应该长这样，其中 `template` 文件夹中的文件内容则作为脚手架命令最终下载的项目源文件。

```
cjp-cli-dev-template-vue3     # 模板包名
├─ template                   # 模板拷贝目录
│  ├─ src                     # 项目源码
│  ├─ package.json            # 项目package.json
│  └─ ...                     # 项目其他文件
└─ package.json               # 模板package.json
```

3、用过 `vue-cli` 下载模板你应该清楚，你输入的项目名称和版本号最终会写入到下载好的模板 `package.json` 中，它的实现方式就是通过 `ejs` 来解析和渲染最终的模板。

::: tip
`ejs变量` 的语法为 `<%= 变量名 %>` 。

对 `ejs` 有疑问？查看官方文档 [ejs](https://www.npmjs.com/package/ejs) 。
:::

这一点脚手架 `init` 命令的实现方式和 `vue-cli` 是一致的，所以我们也需要修改项目 `package.json` ，将对应的位置替换成 `ejs变量` 。

```json
{
  "name": "<%= projectName %>",
  "version": "<%= projectVersion %>",
  "...省略其他"
}
```

当然，你提供的项目模板代码中其它位置如果有需要也可以通过修改为 `ejs变量` 的形式来进行替换，最终 `init` 命令执行时会扫描所有文件，并将用到ejs变量的地方替换成真实内容。

`init` 命令安装项目模板时传递给 `ejs` 的变量有以下几个，你可以按需使用。

| 参数名          | 参数说明                                                       |
| --------------- | -------------------------------------------------------------- |
| type            | 安装类型是项目还是组件库，项目返回project，组件库返回component |
| projectName     | 执行安装命令时你输入的项目名称                                 |
| projectVersion  | 执行安装命令时你输入的项目版本                                 |
| projectTemplate | 执行安装命令时你选择安装的项目npm包名                          |

4、模板创建好后，你需要将模板发布到npm上，并配置 [本地JSON](./configuration.md#本地json配置模板) 或者 [MongoDB](./configuration.md#mongodb配置模板) 后即可执行 `init` 命令安装使用。

::: tip
发布npm前，请先访问 [npm官网](https://www.npmjs.com/)，确保网络连接正常，然后执行 `npm login` 进行登录，否则会发布失败。

发布新的版本前，请先提交代码，并更新版本号。
:::

```bash
# 进入目录
cd cjp-cli-dev-template-vue3
# 发布npm包
npm publish
```

### 创建自定义项目模板

在 [概念解释](#概念解释) 中提到过 `自定义模板` 和`标准模板` 的区别是 `自定义模板` 需要额外提供一个 `index.js` 作为入口文件来自定义渲染模板内容，这在脚手架命令源码中是规定好的。

1、与创建 `标准项目模板` 一样，创建 `自定义项目模板` 目录如 `cjp-cli-dev-template-vue3-custom` ，并执行npm初始化。

::: tip
文件夹名就是你的npm包名，按你自己喜欢的来命名，写什么都行，只要npm上没这个包就可以，否则发不上去。
:::

```bash
cd cjp-cli-dev-template-vue3-custom
npm init -y
```

2、在 `cjp-cli-dev-template-vue3-custom` 目录中创建 `template` 文件夹，找个你认为优秀的项目作为模板，这里我用 `vue-cli` 下载的 `vue3-vite` 项目作为演示，把模板内的所有文件都复制到 `template` 文件夹中。

与创建 `标准项目模板` 不同的是，你还需要在 `cjp-cli-dev-template-vue3-custom` 目录中创建 `index.js` 文件，它将作为自定义渲染的入口文件。

此时你的目录结构应该长这样，其中 `template` 文件夹中的文件内容则作为脚手架命令最终下载的项目源文件。

```
cjp-cli-dev-template-vue3-custom     # 模板包名
├─ template                          # 模板拷贝目录
│  ├─ src                            # 项目源码
│  ├─ package.json                   # 项目package.json
│  └─ ...                            # 项目其他文件
├─ index.js                          # 模板自定义渲染入口文件
└─ package.json                      # 模板package.json
```

3、你需要编写自定义渲染逻辑，约定为在 `index.js` 中使用 `commonjs` 规范导出 `install` 方法，最终执行 `init` 命令在你选择安装 `自定义项目模板` 时，将会读取这个 `index.js` 文件，并执行 `install` 方法进行安装。

`install` 方法接收 `options` 参数，`init` 命令安装 `自定义项目模板` 时会将以下参数传递给`install` 方法，你可以按需使用。

| 参数名       | 参数说明                                                                      |
| ------------ | ----------------------------------------------------------------------------- |
| templateInfo | 模板配置信息对象，查看 [模板字段说明](./configuration.md#项目-组件库模板配置) |
| projectInfo  | 项目信息对象，包含 [标准项目模板](#创建标准项目模板) 接收的全部属性           |
| sourcePath   | 模板源路径                                                                    |
| targetPath   | 安装目标路径                                                                  |

举个例子，假设我想在安装 `自定义项目模板` 时，增加输入项目描述的选项，请参考以下代码实现，你可以尝试加入更多渲染逻辑，最终需要 `commonjs` 规范导出的 `install` 方法即可。

```js
const {
  prompt, // 终端询问交互
  fse, // 文件操作
  ejs, // ejs渲染
  glob, // 文件匹配
  spawnAsync, // 执行进程
} = require("@cjp-cli-dev/utils"); // 工具方法 - 你需要先安装@cjp-cli-dev/utils，也可以自己去npm找对应包安装

// 白名单命令，不在此白名单中的命令都需要确认是否执行，防止用户插入风险操作，如：rm -rf等
const COMMAND_WHITELIST = [
  "npm", // Node.js的包管理工具
  "cnpm", // npm的中国镜像加速版
  "yarn", // 另一个流行的JavaScript包管理工具
  "pnpm", // 性能更优的npm替代品
  "node", // Node.js运行环境
]

// 代码来源于 cjp-cli-dev/commands/init/lib/index.js 下载和渲染逻辑
async function install(options) {
  const projectPrompts = [];
  // 假设自定义项目模板需要额外增加描述信息填写
  const descriptionPrompt = {
    type: "input",
    name: "description",
    default: "",
    message: "请输入项目描述：",
    validate: function (v) {
      const done = this.async();

      setTimeout(() => {
        if (!v) {
          done(`请输入项目描述信息`);
          return;
        }

        done(null, true);
      }, 0);
    },
  };
  projectPrompts.push(descriptionPrompt);
  // 获取用户输入结果
  const projectInfoInput = await prompt(projectPrompts);

  const { sourcePath, targetPath, projectInfo, templateInfo } = options;

  // 存入projectInfo中，提供给ejs使用
  projectInfo.description = projectInfoInput.description;

  try {
    // 确保这两个目录都存在，如果不存在会自动创建
    fse.ensureDirSync(sourcePath);
    fse.ensureDirSync(targetPath);
    // 拷贝模板代码到当前目录
    fse.copySync(sourcePath, targetPath);

    // ejs忽略文件夹，默认node_modules，可在数据库中配置ignore属性（数组）
    const templateIgnore = templateInfo.ignore || [];
    const ignore = ["**/node_modules/**", ...templateIgnore];
    // 模板安装完成后进行ejs渲染，替换掉ejs变量
    await ejsRender({ ignore, targetPath, projectInfo, templateInfo });

    // 模板安装完成后执行安装和启动模板
    const { installCommand, startCommand } = templateInfo;

    // 执行安装命令
    const installResult = await parsingCommandExec(
      installCommand,
      "installCommand",
      `检测到installCommand存在，执行：${installCommand}`
    );

    if (installResult === 0) {
      console.log("依赖安装成功");
    } else {
      // 抛出错误，阻断后面执行
      throw new Error("依赖安装失败");
    }

    // 执行启动命令
    await parsingCommandExec(
      startCommand,
      "startCommand",
      `检测到startCommand存在，执行：${startCommand}`
    );
  } catch (err) {
    // 如果报错，抛出错误
    throw err;
  }
}

// 使用ejs渲染模板
async function ejsRender(options = {}) {
  const { targetPath: cwd, projectInfo } = options;

  try {
    // 获取匹配的文件
    const files = await glob("**", {
      cwd,
      ignore: options.ignore || "node_modules/**", // 忽略内容
      nodir: true, // 不要文件夹
      dot: true, // 包含隐藏文件
    });

    if (!files || files.length === 0) {
      throw new Error("glob没有匹配到文件");
    }

    // 遍历文件并渲染 EJS 模板
    await Promise.all(
      files.map(async (file) => {
        const filePath = path.join(cwd, file);
        try {
          const result = await ejs.renderFile(filePath, projectInfo, {});
          // 写入渲染后的结果
          fse.writeFileSync(filePath, result);
        } catch (err) {
          throw new Error(`EJS 渲染文件 ${filePath} 出错: ${err.message}`);
        }
      })
    );
  } catch (err) {
    // 捕获并处理所有错误
    console.error("ejsRender 执行出错：", err.message);
    throw err; // 抛出错误，以便外部调用处理
  }
}

/**
 * 解析并执行命令
 * @param {*} command 命令内容，如npm install、npm run dev
 * @param {*} field 接口数据中配置命令的字段名，如installCommand、startCommand
 * @param {*} logInfo 提示信息
 * @returns
 */
async function parsingCommandExec(command, field, logInfo) {
  // 命令不存在直接return
  if (!command) {
    console.log(`${field} 不存在，请查看数据是否存在该配置`);
    return;
  }
  // 打印提示信息
  console.log(logInfo);
  // 解析命令并执行
  const cmds = command.split(" ");
  const cmd = checkCommandInWhitelist(cmds[0]);
  const args = cmds.slice(1); // 从索引1开始到数组结束的所有元素
  const result = await spawnAsync(cmd, args, {
    stdio: "inherit",
    cwd: process.cwd(),
  });

  return result;
}

// 检查命令是否在白名单
function checkCommandInWhitelist(command) {
  if (!COMMAND_WHITELIST.includes(command)) {
    // 如果命令不在白名单
    throw new Error(
      `命令 ${command} 不在白名单中，可能存在风险，已阻止程序运行`
    );
  }

  return command;
}

// 使用commmonjs导出install方法
module.exports = install;
```

4、编写完自定义渲染逻辑后，你依然需要通过 `ejs变量` 来替换并渲染最终结果，比如修改 `package.json` 中的项目名称和版本号，还有刚才示例代码中新加入的项目描述选项。

::: tip
`ejs变量` 的语法为 `<%= 变量名 %>` 。

对 `ejs` 有疑问？查看官方文档 [ejs](https://www.npmjs.com/package/ejs) 。
:::

```json
{
  "name": "<%= projectName %>",
  "version": "<%= projectVersion %>",
  "description": "<%= description %>",
  "...省略其他"
}
```

当然，你提供的项目模板代码中其它位置如果有需要也可以通过修改为 `ejs变量` 的形式来进行替换，最终 `init` 命令执行时会扫描所有文件，并将用到ejs变量的地方替换成真实内容。

5、模板创建好后，你需要将模板发布到npm上，并配置 [本地JSON](./configuration.md#本地json配置模板) 或者 [MongoDB](./configuration.md#mongodb配置模板) 后即可执行 `init` 命令安装使用。

::: tip
发布npm前，请先访问 [npm官网](https://www.npmjs.com/)，确保网络连接正常，然后执行 `npm login` 进行登录，否则会发布失败。

发布新的版本前，请先提交代码，并更新版本号。
:::

```bash
# 进入目录
cd cjp-cli-dev-template-vue3-custom
# 发布npm包
npm publish
```

## 如何创建组件库模板

## 如何创建页面模板

### 创建标准页面模板

### 创建自定义页面模板

## 如何创建代码片段模板
