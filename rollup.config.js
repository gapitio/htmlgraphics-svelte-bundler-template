import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import svelte from "rollup-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";
import css from "rollup-plugin-css-only";
import { terser } from "rollup-plugin-terser";

const OUT_DIR = "dist";

export default [
  {
    input: "src/onInit.ts",
    output: {
      dir: OUT_DIR,
      format: "iife",
      sourcemap: false,
      name: "app",
    },
    plugins: [
      svelte({
        preprocess: sveltePreprocess(),
      }),
      css({ output: "style.css" }),
      typescript({
        sourceMap: false,
      }),
      terser(),
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
      sourcemap: false,
    },
    plugins: [
      typescript({
        sourceMap: false,
      }),
      terser(),
      nodeResolve({
        browser: true,
      }),
      commonjs(),
    ],
  },
];
