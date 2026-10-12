# TH10 Replay Verifier

本适配器使用锁定 common 的逐步状态比较和原版基准文件。普通检查运行当前候选，不自动替换 `golden/` 中的独立原版 trace。

从本游戏根目录执行：

```text
node tools/replay-verifier/verify-golden.mjs
node tools/replay-verifier/fetch-fixtures.mjs
python tools/replay-verifier/capture-current-demos.py
node tools/replay-verifier/run-demo-gate.mjs --candidate artifacts/replay-verifier/current-demo/suite.json --report artifacts/replay-verifier/quick-result.json
```

日常长 Replay 使用 `capture-current-replay.py` 生成当前候选，再执行 `run-daily-gate.mjs --capture-root DIRECTORY --report FILE`。所需 Runtime、原版资源及语料以入口检查为准；语料哈希只证明取得相同输入，不证明游戏逻辑。

原版 JIT 捕获为独立维护操作，需要匹配原版环境。本轮没有重跑或更新 golden。阶段、tick、缺失记录和终止必须严格对齐，不能裁剪结果让比较通过。

比较范围是适配器声明的状态，不代表全内存、呈现、音频和浏览器文件系统。差异报告保留原始输入和版本；候选输出不能复制为原版基准。
