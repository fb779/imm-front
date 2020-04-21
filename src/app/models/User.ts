import { Client } from './Client';

export class User {
    _id: number;
    first_name: string;
    last_name: string;
    email: string;
    role: string;
    active: string;
    img?: string;
    client?: Client;
    createdAt?: string;
    updatedAt?: string;
}
