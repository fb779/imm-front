import { Category } from "./Category";

export interface CheckList {
  _id: string;
  name: string;
  state?: boolean;
  group?: string;
  required?: boolean;
  visa_categories?: Category[];
  description?: string;
}
