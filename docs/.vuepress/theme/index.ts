import type { Theme } from "@vuepress/core";
import { defaultTheme } from "@vuepress/theme-default";
import type { DefaultThemeOptions } from "@vuepress/theme-default";
import { path } from "@vuepress/utils";

export const localTheme = (options: DefaultThemeOptions): Theme => {
  return {
    name: "vuepress-theme-local",
    extends: defaultTheme(options),
    layouts: {
      Layout: path.resolve(__dirname, "layouts/Layout.vue"),
      404: path.resolve(__dirname, "layouts/404.vue"),
    },
  };
};

export const myTheme = (options: DefaultThemeOptions): Theme => {
  return {
    name: "vuepress-theme-my",
    extends: defaultTheme(options),
    layouts: {
      Layout: path.resolve(__dirname, "layouts/MyLayout.vue"),
      404: path.resolve(__dirname, "layouts/404.vue"),
    },
  };
};
