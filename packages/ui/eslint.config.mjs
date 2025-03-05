import baseConfig from "@next-kit/eslint-config/base";
import reactConfig from "@next-kit/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ["dist/**"],
  },
  ...baseConfig,
  ...reactConfig,
];
