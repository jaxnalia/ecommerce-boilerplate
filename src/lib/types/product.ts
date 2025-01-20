export interface Product {
  id: number;
  title: string;
  header: string;
  price: number;
  reducedPrice?: number;
  image: string;
  description: string;
  stripe_product_id: string;
  stripe_price_id: string;
  metadata: {
    category?: string;
    weight?: string;
    dimensions?: string;
  };
  currency: string;
  inventory: number;
  deliveryFee: string;
}

export interface CartItem extends Product {
  quantity: number;
}