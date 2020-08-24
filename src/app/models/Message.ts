import { User } from "./User";

export interface IMessage {
  _id: string;
  process: string;
  user: User;
  message: string;
  date: string;
  status?: string;
}
