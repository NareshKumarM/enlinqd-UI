export interface Product {
    category: string;
    countries: CountryAbbreviation[];
    currency: string[];
    description: string;
    disclosure: string;
    images: ProductImage[];
    id: string;
    name: string;
    skus: SKU[];
}

export interface CountryAbbreviation {
    abbr: string;
}

export interface ProductImage {
    src: string;
    type: string;
}

export interface SKU {
    min: number;
    max: number;
}

export interface Products {
    products: Product[];
}