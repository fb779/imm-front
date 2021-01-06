import { Client } from "./Client";

export class User {
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  active: boolean;
  _id?: string;
  img?: string;
  client?: Client;
  bio?: string;
  isActive?: Boolean;
  account_expiration?: Date;
  createdAt?: string;
  updatedAt?: string;
}
