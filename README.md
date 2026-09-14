# 灵狮 LingShi 产品官网

基于 VitePress 的产品官网,发布到 GitHub Pages。

## 本地开发

环境要求:Node.js ≥ 24(自带 npm)。

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # 构建产物在 docs/.vitepress/dist
npm run preview
```

## 发布

推送到 `main` 分支后,GitHub Actions 自动构建并发布到 GitHub Pages。

首次使用需在仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。

## 结构

```
docs/
├── .vitepress/config.mts   # 站点配置(导航/侧栏/页脚)
├── public/                 # 品牌资产(lion.svg / favicon)
├── index.md                # 首页
├── guide/
│   ├── intro.md            # 产品介绍
│   ├── install-web.md      # 网页版安装
│   ├── install-desktop.md  # 桌面端安装
│   └── console.md          # 管理端部署
└── roadmap.md              # 产品路线图
```
