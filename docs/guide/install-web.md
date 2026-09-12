# 网页版安装

网页版适合快速上手与日常使用,一台机器启动,局域网内电脑、手机、平板都可访问。

## 环境要求

- Node.js ≥ 24([nodejs.org](https://nodejs.org/) 下载,或使用 nvm)
- pnpm(`npm install -g pnpm` 或 `corepack enable`)

## 安装与启动

```bash
git clone https://github.com/yangzk2/lingshi.git
cd lingshi/lsh-engine
pnpm install
bash lsh-start.sh          # 启动后自动打开 http://127.0.0.1:15800
```

首次使用在「设置 → 模型配置」中填写企业模型服务地址与 API Key(或通过环境变量 `LINGSHI_API_KEY` 提供)。

## 手机 / 平板访问

与电脑连同一 Wi-Fi 后:

```bash
bash lsh-start-lan.sh      # 按提示的局域网地址在手机浏览器打开
```

华为浏览器等支持「添加到桌面」,即可像 App 一样点开使用。

## 常见问题

**端口被占用?** 使用其他端口启动:`LSH_PORT=15801 bash lsh-start.sh`

**与桌面端的关系?** 两端共用同一份数据目录(`~/.lsh`),同一时间只运行一个;启动器会自动检测并提示。
