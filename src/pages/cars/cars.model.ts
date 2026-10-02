import type { Media } from "@content-island/api-client";

export type FuelType =
  "gasoline" | "diesel" | "hybrid" | "plug-in-hybrid" | "electric";

export type TransmissionType = "manual" | "automatic";

export interface CarImage {
  id: string;
  language: "en";
  lastUpdate: string; // Stores the date in ISO 8601 format. For example: 2021-09-10T19:30:00.000Z
  url: Media;
  author: string;
  license: string;
  attributionUrl: string;
}

export interface Car {
  id: string;
  language: "en";
  lastUpdate: string; // Stores the date in ISO 8601 format. For example: 2021-09-10T19:30:00.000Z
  slug: string;
  brand: string;
  model: string;
  version: string;
  description: string;
  image: CarImage;
  year: number;
  fuelType: FuelType;
  transmission: TransmissionType;
  powerHp: number;
  topSpeedKmh: number;
  consumptionL100Km?: number;
  electricConsumptionKwh100Km?: number;
  electricRangeKm?: number;
  batteryCapacityKwh?: number;
  seats: number;
  doors: number;
}
