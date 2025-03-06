import type { Config } from "tailwindcss";

import baseConfig from "@next-kit/tailwind-config/tailwind.config";

const config: Config = {
  presets: [baseConfig],
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
};

export default config;
