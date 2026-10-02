import { carsClient } from "../../lib/client";
import type { Car } from "./cars.model";

export const getCars = async (): Promise<Car[]> =>
  await carsClient.getContentList<Car>({
    contentType: "Car",
    includeRelatedContent: true,
  });
