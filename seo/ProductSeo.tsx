import { useProductPrice } from 'hooks/useProductPrice';
import { ProductJsonLd } from 'next-seo';
import { SingleProduct } from 'types/singleProduct.types';

interface Props {
  product: SingleProduct;
}

const ProductSeo = ({ product }: Props) => {
  const { getProductPrice } = useProductPrice();
  const { name, discount, authenticated_price, web_price, slug } = product;
  const images = product.images?.map((image) => image.medium || '');
  let description = '';
  const brand = product.brand?.name || '';
  const aggregateRating = {
    ratingValue: 'N/A',
    reviewCount: product.ratings_count?.toString(),
  };
  const price = getProductPrice({ discount, authenticated_price, web_price });
  const offers = [
    {
      price: price,
      priceCurrency: 'RSD',
      itemCondition: 'https://schema.org/NewCondition',
      availability: 'https://schema.org/InStock',
      url: `https://digitown.rs/proizvod/${slug}`,
      seller: {
        name: 'digitown.rs',
      },
    },
  ];

  if (product.description) {
    description = product.description;
  } else if (product.supplier_description) {
    description = product.supplier_description;
  }

  return (
    <ProductJsonLd
      productName={name}
      images={images}
      description={description}
      brand={brand}
      //aggregateRating={aggregateRating}
      offers={offers}
    />
  );
};

export default ProductSeo;
