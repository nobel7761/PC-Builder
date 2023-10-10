export interface IProduct {
  _id?: string;
  image: string;
  name: string;
  category: string;
  subCategory?: string;
  status: string;
  price: number;
  description: string;
  features: string[];
  individual_rating: number;
  average_rating: number;
  reviews: {
    username: string;
    review: string;
  }[];
}
