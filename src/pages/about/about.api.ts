import { demoClient } from "../../lib/client";
import type { About } from "./about.model";

export const getAbout = async () =>
  demoClient.getContent<About>({
    contentType: "About",
    id: "685eb36e45767b0f312fce64",
  });
