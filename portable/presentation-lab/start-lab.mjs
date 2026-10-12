import { spawn } from 'node:child_process';
import { resolve } from 'node:path';
const root = resolve(import.meta.dirname, '../..');
const options = {};
for (const arg of process.argv.slice(2)) {
  const match = /^--(port|snapshot)=(.+)$/.exec(arg);
  if (arg === '--build' && !options.build) options.build = true;
  else if (match && !Object.hasOwn(options, match[1])) options[match[1]] = match[2];
  else throw new Error('未知、重复或空参数：' + arg);
}
if (options.snapshot) throw new Error('TH10 实验服务器不支持 --snapshot');
const port = Number(options.port ?? 8133);
if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('端口必须在 1–65535 之间');
if (options.snapshot && !/^[a-z0-9-]{1,40}$/.test(options.snapshot)) throw new Error('无效的快照名称');
async function run(script, args, env = process.env) {
  await new Promise((done, fail) => {
    const child = spawn(process.execPath, [resolve(root, script), ...args], { cwd: root, env, stdio: 'inherit', shell: false });
    child.once('error', fail);
    child.once('exit', code => code === 0 ? done() : fail(new Error(script + ' 退出：' + code)));
  });
}
if (options.build) {
  if (!process.env.EMSDK || !process.env.EAGLER_FONT_ROOT) throw new Error('构建需要 EMSDK 和 EAGLER_FONT_ROOT');
  await run('portable/build.mjs', ['--presentation-lab']);
  await run('portable/package-eagler.mjs', ['--presentation-lab']);
}
console.log('本地实验页面：http://127.0.0.1:' + port + '/；Ctrl+C 停止。');
await run('portable/presentation-lab/serve.mjs', [], {
  ...process.env, PORT: String(port), TH10_LAB_SNAPSHOT: options.snapshot ?? '',
});
