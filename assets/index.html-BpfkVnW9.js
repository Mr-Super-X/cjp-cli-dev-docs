import{_ as s,c as p,a as e,b as t,d as i,e as o,f as r,r as a,o as u}from"./app-DtC4yUNM.js";const d={},g={class:"hint-container tip"},m={class:"hint-container tip"};function h(f,l){const n=a("RouteLink");return u(),p("div",null,[l[9]||(l[9]=e('<h1 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h1><p>苦于一直当业务牛马，在前端已死的2024年，趁还能学想写点自己的东西。早期写过一点比较简单且功能单一的cli工具，如 <a href="https://www.npmjs.com/package/@mr.mikey/create-husky" target="_blank" rel="noopener noreferrer">@mr.mikey/create-husky</a> ，某天机缘巧合之下在 Github 上刷到Sam老师的 <a href="https://github.com/sam9831/imooc-cli" target="_blank" rel="noopener noreferrer">imooc-cli</a> 脚手架，觉得非常符合我当下需要，于是找了一些零零散散的教程和视频尝试复刻一个属于自己的前端脚手架，在这个背景下 <code>cjp-cli-dev</code> 诞生了。</p><p>以下内容由AI生成，人工微调，随便看看就好。</p><blockquote><p>AI：？</p></blockquote>',4)),t("p",null,[l[1]||(l[1]=i("直接查看 ")),o(n,{to:"/guide/getting-started.html"},{default:r(()=>l[0]||(l[0]=[i("快速上手")])),_:1}),l[2]||(l[2]=i(" 。"))]),l[10]||(l[10]=e('<h2 id="脚手架介绍" tabindex="-1"><a class="header-anchor" href="#脚手架介绍"><span>脚手架介绍</span></a></h2><p>为前端开发设计的多功能开发工具，旨在简化日常开发工作流程，提高开发效率和代码质量。脚手架集成了从项目初始化、发布、回滚、版本管理、代码质量校验、git提交规范校验等一系列功能，让开发者能够专注于编写高质量代码，而不是花费大量时间在繁琐的项目配置上。</p><p><strong>痛点分析</strong></p><ul><li>创建项目/组件库时，存在大量重复代码拷贝</li><li>协同开发时，由于git操作不规范导致分支混乱，操作耗时</li><li>发布上线流程复杂又耗时，且人工操作容易出现各种错误</li><li>人工回滚版本操作复杂耗时</li></ul><p><strong>痛点解决：实现通用的研发脚手架</strong></p><ul><li><p>通用的项目、组件库创建能力，快速复用已有沉淀</p><ul><li>模板支持快速接入，极低的接入成本</li><li>模板支持定制，定制后能够快速接入</li></ul></li><li><p>通用的项目、组件库发布能力，制定标准的上线流程和规范并集成到脚手架</p><ul><li>发布过程自动完成标准的git操作</li><li>发布成功后自动删除开发分支并创建发布版本tag</li><li>发布后自动完成云构建、OSS上传、CDN上传、域名绑定</li><li>发布过程支持测试、正式发布</li></ul></li><li><p>通用的项目、组件库回滚能力，快速回滚版本</p><ul><li>快速回滚生产版本，备份master分支代码</li></ul></li></ul><h2 id="核心命令介绍" tabindex="-1"><a class="header-anchor" href="#核心命令介绍"><span>核心命令介绍</span></a></h2><ul><li><strong>init</strong>：</li></ul><p>快速创建模板：支持默认项目模板、自定义项目模板和组件库模板的快速创建。</p><p>自动安装与启动：模板创建后，自动安装依赖并启动项目，让开发者立即进入开发状态。</p><ul><li><strong>publish</strong>：</li></ul><p>一键发布：支持测试发布和正式发布，简化发布流程。</p><p>云构建与发布：支持云端构建项目，采用Redis管理构建任务，发布完成后自动清除缓存，提升发布效率。</p><p>Git Flow自动化：自动管理Git Flow分支，包括创建仓库、构建、发布等。</p><ul><li><strong>add</strong>：</li></ul><p>快速添加模板：支持组件代码片段、标准页面和自定义页面模板的快速添加。</p><p>自动代码写入：组件代码自动写入指定位置，并自动导入注册局部组件。</p><ul><li><strong>rollback</strong>：</li></ul><p>快速回滚：支持生产版本快速回滚，确保项目稳定性。</p><p>本地构建回滚版本：自动构建并回滚到指定版本。</p>',20)),t("div",g,[l[5]||(l[5]=t("p",{class:"hint-container-title"},"提示",-1)),t("p",null,[l[4]||(l[4]=i("查看 ")),t("strong",null,[o(n,{to:"/guide/core-command.html"},{default:r(()=>l[3]||(l[3]=[i("核心命令使用说明")])),_:1})])])]),l[11]||(l[11]=e('<h2 id="更多命令介绍" tabindex="-1"><a class="header-anchor" href="#更多命令介绍"><span>更多命令介绍</span></a></h2><ul><li><strong>husky</strong>：</li></ul><p>Git Hooks配置：快速为项目安装Git Hooks配置工具，确保代码提交前进行必要的检查。</p><ul><li><strong>codelint</strong>：</li></ul><p>代码规范校验：支持eslint、prettier、lint-staged等工具，确保代码风格统一。</p><p>仅校验暂存文件：提高校验效率，仅针对暂存文件进行校验。</p><ul><li><strong>commitlint</strong>：</li></ul><p>提交信息规范：采用Angular提交规范，确保提交信息清晰明了。</p><p>汉化版终端交互：提供汉化版终端交互工具，方便中文用户操作。</p><ul><li><strong>release</strong>：</li></ul><p>自动升级版本：快速自动升级项目版本，减少手动操作。</p><p>生成变更记录：自动生成git变更记录文档，方便版本管理。</p><ul><li><strong>gitflow</strong>：</li></ul><p>创建Git Flow模型：快速为项目创建Git Flow分支模型，提升团队协作效率。</p><p>工具检查与帮助：自动检查系统是否安装对应工具，并提供帮助文档。</p><ul><li><strong>delete-branch</strong>：</li></ul><p>快速删除分支：支持多选删除本地和远端分支，简化分支管理。</p><ul><li><strong>clean</strong>：</li></ul><p>清除缓存：支持清除脚手架依赖缓存或全部缓存文件，保持开发环境整洁。</p><ul><li><strong>resume</strong>：</li></ul><p>创建简历：提供前端markdown简历模板，支持导出one-light主题样式PDF，方便快速制作专业简历。</p><ul><li><strong>server</strong>：</li></ul><p>本地页面预览服务：启动本地页面预览服务，支持http请求代理，支持代理多个服务器。</p>',23)),t("div",m,[l[8]||(l[8]=t("p",{class:"hint-container-title"},"提示",-1)),t("p",null,[l[7]||(l[7]=i("查看 ")),t("strong",null,[o(n,{to:"/guide/more-command.html"},{default:r(()=>l[6]||(l[6]=[i("其他命令使用说明")])),_:1})])])]),l[12]||(l[12]=t("h2",{id:"愿景",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#愿景"},[t("span",null,"愿景")])],-1)),l[13]||(l[13]=t("p",null,"打造一个功能全面、高效便捷、易于上手的前端脚手架工具，成为前端开发者不可或缺的开发助手。未来将持续优化现有功能，提升用户体验，并不断探索和引入新的开发技术和工具，以满足日益增长的前端开发需求。同时也欢迎广大开发者提出宝贵的意见和建议，共同推动脚手架工具不断向前发展，为前端开发领域贡献更多的力量。",-1))])}const c=s(d,[["render",h],["__file","index.html.vue"]]),b=JSON.parse('{"path":"/guide/","title":"介绍","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"脚手架介绍","slug":"脚手架介绍","link":"#脚手架介绍","children":[]},{"level":2,"title":"核心命令介绍","slug":"核心命令介绍","link":"#核心命令介绍","children":[]},{"level":2,"title":"更多命令介绍","slug":"更多命令介绍","link":"#更多命令介绍","children":[]},{"level":2,"title":"愿景","slug":"愿景","link":"#愿景","children":[]}],"git":{"updatedTime":1732620882000,"contributors":[{"name":"v_jpch","email":"v_jpch.digitalgd.com","commits":7,"url":"https://github.com/v_jpch"}]},"filePathRelative":"guide/README.md"}');export{c as comp,b as data};