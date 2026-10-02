import {
  CONTISL_CARS_PROJECT_TOKEN,
  CONTISL_DEMO_PROJECT_TOKEN,
} from "astro:env/server";
import { createClient } from "@content-island/api-client";

export const carsClient = createClient({
  accessToken: CONTISL_CARS_PROJECT_TOKEN,
  mode: "snapshot",
  snapshotPath: ".snapshots/cars-project-snapshot.json",
});

export const demoClient = createClient({
  accessToken: CONTISL_DEMO_PROJECT_TOKEN,
  snapshotPath: ".snapshots/demo-project-snapshot.json",
  mode: "snapshot",
});
