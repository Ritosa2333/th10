# TH10 维护指南

## 职责与依赖

`th10_web/cpp/game/` 拥有本作游戏对象、固定逻辑步、菜单、Replay 和资源语义。平台适配提供渲染、输入、音频与文件访问。公共算法来自本作 `third_party/eagler-common` 的 Git 锁定；主项目根 common 更新不会自动改变这里的依赖。

游戏仓库只交付 Runtime。Web 页面、资源安装、房间界面和站点组装统一由主项目维护，不恢复旧 `launcher/` 副本。

## 构建输入与输出

实际入口是 `portable/build.mjs`。建议从主项目使用 `npm run runtime -- th10`，显式提供 Emscripten、Python、字体和资源；本地路径不提交到源码。普通构建及目录 Runtime 通过主项目登记的 build/package 链生成，打包核对实际文件清单。

项目默认 Runtime 输出位于 dist/runtime/th10/<variant>/。编译中间产物仍由本作脚本管理，最终受管目录以暂存、验证、切换的方式更新。

## 本轮验证

普通源码构建、目录 Runtime 打包与验证通过；本轮未重跑多人分支和全流程游玩。

## 多人与诊断

多人实现来自单独的已准备源码，主项目构建必须显式传 `--variant multiplayer --source "<SOURCE>"`。不会自动选择旁边的 worktree，也不会把普通分支标成多人已验收。

## Presentation Lab 与 Replay

[Presentation Lab](../portable/presentation-lab/README.md) 提供独立诊断构建，[Replay Verifier](../tools/replay-verifier/README.md) 比较已声明的逐步状态。覆盖不完整时保留 unknown；正常构建不代表 Lab 或原版对照已经执行。

## 维护顺序

先复现问题并确定状态所有者，修改最小职责边界，再执行对应原生、Runtime 和浏览器验证。升级 common 时记录实际 gitlink 和影响的接口。跨作品抽取需核对实现、ABI 和消费者，不因文件同名就共用。

项目[能力进度](https://github.com/YomotsuHisami/eagler-touhou/blob/main/docs/TOUHOU_PROGRESS.md)区分实现、构建和实测。[输入与 Replay](https://github.com/YomotsuHisami/eagler-touhou/blob/main/docs/playbooks/input-replay.md)、[多人联机](https://github.com/YomotsuHisami/eagler-touhou/blob/main/docs/playbooks/multiplayer.md)说明进一步验证。
