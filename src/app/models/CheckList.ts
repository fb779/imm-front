import { Category } from './Category';

export class CheckList{
    _id: string;
    name: string;
    group?: string;
    required?: boolean;
    visa_categories?: Category[];
    description?: string;
}