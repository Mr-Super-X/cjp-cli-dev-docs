import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";
import { navbarConfig } from './config/navbar/index'
import { sidebarConfig } from './config/sidebar/index'

export default defineUserConfig({
  lang: "zh-CN",
  title: "你好， 欢迎使用 cjp-cli-dev 脚手架 ！",
  description: "这是我的第一个 VuePress 站点",
  base: "/cjp-cli-dev/", // 部署后的路径前缀
  home: "/", // 首页的路径，用于导航栏中 Logo 的链接、404 页面的 返回首页 链接
  head: [],
  theme: defaultTheme({
    logo: "https://vuejs.press/images/hero.png",
    repo: "Mr-Super-X/cjp-cli-dev-docs", // 仓库
    docsBranch: "master", // 分支
    // 顶部导航配置
    navbar: navbarConfig,
    // 侧边导航
    sidebar: sidebarConfig,
  }),

  bundler: viteBundler(),
});
