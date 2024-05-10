import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "url";
import js from "@eslint/js";
import path from "path";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  {
    ignores: ["dist/"],
  },
  js.configs.recommended,
  ...compat.extends("plugin:vue/vue3-recommended"),
  ...compat.extends("@vue/eslint-config-typescript"),
  ...compat.extends("@vue/eslint-config-prettier/skip-formatting"),
];
