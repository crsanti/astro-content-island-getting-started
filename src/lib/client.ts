import {
  CONTISL_CARS_PROJECT_TOKEN,
  CONTISL_DEMO_PROJECT_TOKEN,
} from "astro:env/server";
import { createClient } from "@content-island/api-client";

export const carsClient = createClient({
  accessToken: CONTISL_CARS_PROJECT_TOKEN,
});

export const demoClient = createClient({
  accessToken: CONTISL_DEMO_PROJECT_TOKEN,
});
