import { CheckList } from './CheckList';
import { Client } from './Client';

// checklist: CheckList;
// client: Client;

export class Document {
    _id: string;
    checklist: string;
    client: string;
    name: string;
    status: string;
    description?: string;
    extension?: string;
    directory?: string;
}
