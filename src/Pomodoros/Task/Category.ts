export class Category {
    id: number;
    name: string;
    color: string;
    subcategory: Category;
    supercategory: Category;
}