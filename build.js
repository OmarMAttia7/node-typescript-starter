import("esbuild")
.then((esbuild) => {
  esbuild.build({
    entryPoints: ["src/index.ts"],
    minify: true,
    platform: "node",
    outdir: "dist"
  })
})