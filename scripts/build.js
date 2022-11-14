import { stdout } from 'process';
const startTime = Date.now();
import("esbuild")
.then((esbuild) => {
  esbuild.build({
    entryPoints: ["src/index.ts", "src/tests/index.ts"],
    minify: true,
    platform: "node",
    outdir: "dist"
  })
})
.then(() => {
  stdout.write(`Compiled in ${Date.now() - startTime} ms\n`);
})
