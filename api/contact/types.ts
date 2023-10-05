export interface ContactUsPayload {
  email: string;
  message: string;
  ticketType: string;
  image?: File;
}

export interface PriceOfferPayload {
  price: string;
  email: string;
  product_sku: string;
}
