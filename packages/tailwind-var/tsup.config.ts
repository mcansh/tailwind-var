import { defineConfig } from "tsup";
import glob from "glob";

export default defineConfig((options) => {
  let entry = glob.sync("src/**/*.ts");
  let target = "es2019";

  return [
    {
      entry,
      format: "cjs",
      sourcemap: true,
      target,
      bundle: true,
      noExternal: ["ts-extras"],
    },

    {
      entry,
      format: "esm",
      sourcemap: true,
      target,
      dts: true,
    },
  ];
});
