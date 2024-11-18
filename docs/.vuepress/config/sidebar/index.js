export const sidebarConfig = {
  "/guide/": [
    {
      text: "指南",
      collapsible: true, // 是否可折叠
      children: [
        "", // 空字符默认会寻找当前目录/guide下的README.md文件
        "/guide/getting-started.md",
        "/guide/core-command.md",
        "/guide/more-command.md",
        "/guide/template.md",
        "/guide/configuration.md",
      ],
    },
  ],
  "/sponsor/": [
    {
      text: "赞助",
      collapsible: true, // 是否可折叠
      children: [
        "", // 空字符默认会寻找当前目录下的README.md文件
      ],
    },
  ],
};
