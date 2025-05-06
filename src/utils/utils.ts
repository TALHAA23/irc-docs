import {
  AIButtonProps,
  AIFormProps,
  AIInputProps,
} from "intelligent-react-components";

export const packageRegistriesOptions = ["npm", "pnpm", "yarn"];
export const aiComponentNames = ["AIButton", "AIInput", "AIFrom"];
export const keywords = {
  pkgname: "Intelligent React Components",
  pkgnameAbbr: "IRC",
};
export type UnionType = AIInputProps | AIFormProps | AIButtonProps | null;
