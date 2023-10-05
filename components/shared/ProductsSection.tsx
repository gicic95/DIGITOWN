import Link from 'next/link';

import {
  ProductItem,
  RecommendedProduct,
  SimilarProduct,
} from 'types/global.types';

import { ProductsListsBlock } from './ProductsListsBlock';

interface Props {
  title: string;
  seeAllHref?: string;
  products: ProductItem[] | SimilarProduct[] | RecommendedProduct[];
}

export const ProductsSection = ({ title, seeAllHref, products }: Props) => (
  <div className="productsSection">
    <div className="row">
      <h2>{title}</h2>
      {seeAllHref && <Link href={seeAllHref}>Pogledaj sve proizvode</Link>}
    </div>
    <ProductsListsBlock products={products} />
  </div>
);
