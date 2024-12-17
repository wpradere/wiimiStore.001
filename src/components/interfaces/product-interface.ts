export interface Product {
    id: string;
    title:string;
    decriptionProduct: string;
    images: string[];
    inStock: number;
    price: number;
    slug: string;
    categoryId:string;
}