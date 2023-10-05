export interface Product {
  id: number;
  sku: string;
  name: string;
  slug: string;
  price: number;
  web_price: number;
  retail_price: number;
  dealer_price: number;
  authenticated_price: number;
  discount?: ProductDiscount;
  main_image?: ProductMainImage;
  main_category_slug: string;
  order: number;
}

export interface ProductDiscount {
  id: number;
  type: null;
  price: number;
  from: string;
  to: string;
  sticker: null;
}

export interface ProductMainImage {
  id: number;
  main: boolean;
  tiny: string;
  small: string;
  medium: string;
  large: string;
}
