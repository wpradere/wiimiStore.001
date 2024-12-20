import {CategoryType} from "@/components/types/category";

export type CategoryWithProductsType = CategoryType & {
    Product: { title: string }[];
};
