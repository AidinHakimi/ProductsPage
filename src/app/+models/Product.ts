//This interface is used as the underlying structure for representing products

export interface Product {
    pic: string;
    title: string;
    stock: number;
    price: number;
    details: string;
}