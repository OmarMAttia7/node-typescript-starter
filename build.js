import fs from 'fs';
const testFiles = fs.readdirSync("./src/tests")
.filter(file => file.endsWith("Spec.ts"))
.map(file => "./src/tests/" + file);

import("esbuild")
.then((esbuild) => {
  esbuild.build({
    entryPoints: ["src/index.ts"].concat(testFiles),
    minify: true,
    platform: "node",
    outdir: "dist"
  })
})