export type ProductType = {
    id: string;
    title: string;
    decriptionProduct: string;
    inStock: number;
    price: number;
    slug: string;
    categoryId: string; // Cambiar de category a categoryId
    ProductImage?: { url: string }[]; // Soporte para ProductImage opcional
    images: string[];
};

export type ProductImageType = {
    url: string;
};

export type ProductFeatureType = {
    id: string;
    title: string;
    decriptionProduct: string;
    inStock: number;
    price: number;
    slug: string;
    image: string;
}
