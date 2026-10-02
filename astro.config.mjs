// @ts-check
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      CONTISL_CARS_PROJECT_TOKEN: envField.string({
        context: "server",
        optional: false,
        access: "secret",
      }),
      CONTISL_DEMO_PROJECT_TOKEN: envField.string({
        context: "server",
        optional: false,
        access: "secret",
      }),
    },
  },
});
