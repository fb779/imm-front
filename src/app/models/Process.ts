import { User } from './User';
import { Client } from './Client';
import { Category } from './Category';
import { CheckList } from './CheckList';

export class Process {
    _id: string;
    status: String;
    active: Boolean;
    client: Client;
    visa_category: Category;
    code?: string;
    consultant?: User;
    clien_process?: Client[];
    check_list?: CheckList[];
}