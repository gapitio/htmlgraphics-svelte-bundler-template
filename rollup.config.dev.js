import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import livereload from "rollup-plugin-livereload";
import json from "@rollup/plugin-json";
import svelte from "rollup-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";
import css from "rollup-plugin-css-only";

const OUT_DIR = "public/build";

// eslint-disable-next-line import/no-default-export
export default [
  {
    input: "src/devSite/index.ts",
    output: {
      dir: OUT_DIR,
      format: "iife",
      sourcemap: true,
    },
    watch: {
      clearScreen: false,
    },
    plugins: [
      json({
        preferConst: true,
      }),
      typescript(),
      nodeResolve({
        browser: true,
      }),
      livereload(OUT_DIR),
    ],
  },
  {
    input: "src/onInit.ts",
    output: {
      dir: OUT_DIR,
      format: "iife",
      sourcemap: true,
      name: "app",
    },
    plugins: [
      svelte({
        compilerOptions: {
          dev: true,
        },
        preprocess: sveltePreprocess(),
      }),
      css({ output: "bundle.css" }),
      typescript(),
      nodeResolve({
        browser: true,
        dedupe: ["svelte"],
      }),
      commonjs(),
    ],
  },
  {
    input: "src/onRender.ts",
    output: {
      dir: OUT_DIR,
      format: "iife",
      sourcemap: true,
    },
    plugins: [
      typescript(),
      nodeResolve({
        browser: true,
      }),
      commonjs(),
    ],
  },
];
