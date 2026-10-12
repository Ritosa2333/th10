# TH10 风神录

[English](README.en.md) · [维护指南](docs/MAINTENANCE.md)

本仓库维护《风神录》的 C++/SDL Runtime 及作品适配，作为 eagler-touhou 根目录 Git 子模块保留独立提交历史。游戏状态和原版文件语义由本仓库拥有；Web 启动器和站点交付由主项目 `launcher/web/` 拥有。

## 构建

作为主项目子模块使用时，从 eagler-touhou 根目录执行：

```text
npm run dependencies -- init th10
npm run runtime -- th10 --emsdk "<SDK>" --font-root "<字体目录>"
```

主项目入口读取实际构建声明，不自动创建 worktree。具体输入及普通/多人选择见[Runtime 构建指南](https://github.com/YomotsuHisami/eagler-touhou/blob/main/docs/playbooks/runtime-build.md)。

## 当前证据

2026-10 工程整理：普通源码构建、目录 Runtime 打包与验证通过；本轮未重跑多人分支和全流程游玩。 这些结果不代表所有关卡、机体、设备和模式均已完成验收。后续修改需要在本次声明之外补充受影响的实际行为验证。

## 源码与资源

- `th10_web/cpp/game/`：作品规则、对象和生命周期。
- `portable/`：本作使用的平台与绘制适配。
- `third_party/eagler-common`：本作锁定的公共库版本。
- `portable/build.mjs`：实际构建入口。

不随源码提交原版 DATA、音乐、个人存档、Replay 或工具链。许可按各组件保留的 LICENSE/NOTICE 处理；不对原版游戏资源作统一授权声明。

原仓库的移植来源署名：[SteinsGateON](https://space.bilibili.com/34714121)。
