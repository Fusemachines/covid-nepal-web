import { IOptions } from "src/components/CustomSelectInput/CustomSelectInput";

export const ProvinceOptions: IOptions[] = [
  { label: "Province-01", value: "1" },
  { label: "Province-02", value: "2" },
  { label: "Province-03", value: "3" },
  { label: "Province-04", value: "4" },
  { label: "Province-05", value: "5" },
  { label: "Province-06", value: "6" },
  { label: "Province-07", value: "7" }
];

export const DistrictOptions: IOptions[] = [
  { label: "District-01", value: "District-01" },
  { label: "District-02", value: "District-02" },
  { label: "District-03", value: "District-03" },
  { label: "District-04", value: "District-04" },
  { label: "District-05", value: "District-05" },
  { label: "District-06", value: "District-06" },
  { label: "District-07", value: "District-07" }
];

export const CovidTestOptions: Array<IOptions> = [
  { label: "All", value: "" },
  { label: "Available", value: "available" },
  { label: "Unavailable", value: "unavailable" }
];

export const SupportItemsOptions: Array<IOptions> = [
  { label: "All", value: "" },
  { label: "PPE(Personal Protective Equipment)", value: "PPE" },
  { label: "N95 Masks", value: "N95 Masks" },
  { label: "Regular Masks", value: "Regular Masks" },
  { label: "Gloves", value: "Gloves" },
  { label: "Gown", value: "Gown" },
  { label: "Eye protection glasses", value: "Eye Protection Glasses" },
  { label: "Face shield", value: "Face Shield" },
  { label: "Hair cap", value: "Hair cap" },
  { label: "Boots", value: "Boots" },
  { label: "Shoe coverups", value: "Shoe coverups" },
  { label: "Sanitizer", value: "Sanitizer" },
  { label: "Training on how to use PPE", value: "Training" }
];
