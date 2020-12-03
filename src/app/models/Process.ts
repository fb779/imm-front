import { User } from "./User";
import { Client } from "./Client";
import { Category } from "./Category";
import { CheckList } from "./CheckList";
import { ProcessStep } from "./ProcessStep.model";

export class Process {
  _id: string;
  status: string;
  active: boolean;
  client: Client;
  visa_category: Category;
  code: string;
  companion?: string;
  consultant?: User;
  clien_process?: Client[];
  check_list?: CheckList[];
  steps?: ProcessStep[];
}
