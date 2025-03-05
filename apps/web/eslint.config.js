import baseConfig from "@next-kit/eslint-config/base";
import nextjsConfig from "@next-kit/eslint-config/next";
import reactConfig from "@next-kit/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
];
