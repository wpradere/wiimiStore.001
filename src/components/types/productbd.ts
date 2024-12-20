export type ProductTypebd = {
    id: string;
    title: string;
    decriptionProduct: string;
    inStock: number;
    price: number;
    slug: string;
    categoryId: string; // Cambiar de category a categoryId
    ProductImage?: { url: string }[]; // Soporte para ProductImage opcional

};
