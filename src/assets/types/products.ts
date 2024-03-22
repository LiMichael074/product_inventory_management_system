export interface ProductType {
    id?: number;
    title: string;
    
estimated_value_cad
: number;
    description: string;
    category: string;
    image: string;
    rating: RatingType;
}

export interface RatingType {
    rate: number;
    count: number;
}