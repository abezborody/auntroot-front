export interface ProductTag {
  name: string;
}
export interface ProductCardProps {
  id: number;
  name: string;
  description?: string | null;
  old_price: number | null;
  price: number;
  image_url: string;
  available_count: number;
  category: {
    id: number;
    name: string;
  };
  tags: ProductTag[];
}
