# 桌面端安装

桌面端为 macOS / Windows 提供独立安装包,安装后像普通应用一样使用。

::: tip 下载页建设规划中
当前版本需从源码构建安装包,按下方步骤操作即可;图形化下载页即将上线(见[路线图](/roadmap))。
:::

## 环境要求

- Node.js ≥ 24、pnpm
- macOS 构建需 Xcode Command Line Tools(`xcode-select --install`)
- Windows 构建建议在 Windows 机器上进行

## 构建安装包

```bash
git clone https://github.com/yangzk2/lingshi.git
cd lingshi/lsh-engine/apps/desktop
pnpm install

# macOS(Apple Silicon)
pnpm package:mac:arm64

# macOS(Intel)
pnpm package:mac:x64

# Windows
pnpm package:win:x64
```

构建完成后,安装包输出在 `apps/desktop/.desktop-build/` 目录(以命令行输出为准)。

## 安装

### macOS

1. 双击打开 `.dmg`
2. 把「灵狮引擎」拖入「应用程序」文件夹
3. 首次打开若提示"无法验证开发者":在「应用程序」中**右键点击图标 → 打开**,再点一次「打开」即可

### Windows

1. 双击 `.exe`,按安装向导提示完成安装
2. 从开始菜单或桌面快捷方式启动

## 使用提示

- 桌面端与网页版共用数据目录 `~/.lsh`,同一时间只运行一个
- 首次使用在「设置 → 模型配置」中填写企业模型服务地址与 API Key
