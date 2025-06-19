import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  plugins: [
    require("@catppuccin/tailwindcss")({
      prefix: "ctp",
      defaultFlavour: "mocha",
    }),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "text-shadow": (value: string) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
    }),
  ],
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textShadow: {
        hero: "0 0 90px oklch(78.71% 0.119 304.77 / 40%)",
      },
      colors: {
        "c-text": "oklch(87.87% 0.0426 272.28)",
        "c-background": "oklch(20.29% 0.0304 244.45)",
        "c-background-light": "oklch(30.29% .0304 244.45)",
        "c-selection": "oklch(99.71% 0.119 204.77 / 15%)",
        "c-primary": "oklch(78.71% 0.119 304.77)",
        "c-primary-light": "oklch(95% 0.119 304.77 / 60%)",
        "c-primary-semi": "oklch(78.71% 0.119 304.77 / 25%)",
        "c-primary-shade": "oklch(78.71% 0.119 304.77 / 10%)",
        "c-primary-ghost": "oklch(78.71% 0.119 304.77 / 5%)",
        "c-primary-soul": "oklch(78.71% 0.119 304.77 / 2%)",
        "c-ghost-red": "oklch(78.71% 0.119 21.66 / 10%)",
        "c-ghost-yellow": "oklch(78.71% 0.119 118.97 / 10%)",
        "c-ghost-green": "oklch(78.71% 0.119 164.21 / 10%)",
      },
      backgroundImage: {
        "c-gradient-title":
          "linear-gradient(180deg, oklch(81.66% 0.091 304 / 30%) 0%, oklch(92% 0.0833 286 / 100%) 20%, oklch(81.66% 0.091 304 / 30%) 100%)",
        "c-gradient-button":
          "linear-gradient(180deg, oklch(85% 0.15 305 / 20%) 0%, oklch(87% 0.25 286 / 20%) 50%, oklch(83% 0.10 304.77 / 10%) 100%)",
        "c-gradient-bleed-red":
          "linear-gradient(to bottom, oklch(78.71% 0.25 15 / 15%) 0%, oklch(78.71% 0.119 21.66 / 0%) 100%)",
        "c-gradient-bleed-yellow":
          "linear-gradient(to bottom, oklch(80.82% 0.1289 90 / 15%) 0%, oklch(78.71% 0.119 118.97 / 0%) 100%)",
        "c-gradient-bleed-green":
          "linear-gradient(to bottom, oklch(78.71% 0.3 180 / 15%) 0%, oklch(78.71% 0.119 164.21 / 0%) 100%)",
        "c-gradient-hero":
          "linear-gradient(180deg, oklch(79% 0.12 305 / 5%) 0%, oklch(80% 0.30 286 / 15%) 20%, oklch(78.71% 0.119 304.77 / 0%) 80%)",
        "c-gradient-primary":
          "linear-gradient(180deg, oklch(79% 0.12 305 / 10%) 0%, oklch(80% 0.30 286 / 8%) 50%, oklch(78.71% 0.119 304.77 / 10%) 100%)",
        "c-gradient-primary-light":
          "linear-gradient(180deg, oklch(79% 0.12 305 / 20%) 0%, oklch(80% 0.30 286 / 20%) 50%, oklch(78.71% 0.119 304.77 / 20%) 100%)",
        "c-gradient-primary-light-lighter":
          "linear-gradient(180deg, oklch(85% 0.15 305 / 30%) 0%, oklch(87% 0.25 286 / 30%) 50%, oklch(83% 0.10 304.77 / 30%) 100%)",
      },
    },
  },
};
export default config;
