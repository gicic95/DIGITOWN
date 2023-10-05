import { useProductPrice } from 'hooks/useProductPrice';
//import Image from 'next/image';

import { SingleProduct } from 'types/singleProduct.types';

import { formatPrice } from 'utils/price';
import { Actions } from './Actions';
import { Tabs } from './tabs';
//import Link from 'next/link';
import { PriceOffer } from './PriceOffer';
import { HelpWithShopping } from './HelpWithShopping';
//import { useRef } from 'react';
//import { targetRef } from '../details/tabs/index';

interface Props {
  product: SingleProduct;
}

export const Info = ({ product }: Props) => {
  const { getProductPrice } = useProductPrice();
  const { discount, authenticated_price, web_price, retail_price } = product;
  const price = getProductPrice({ discount, authenticated_price, web_price });
  const category = product.mainCategory?.[0] || null;

  let mainSpecContent;

  let savings;
  let retailPrice;

  if (retail_price - price == 0) {
    savings = retail_price * 1.14 - price;
    retailPrice = retail_price * 1.14;
  } else { 
    savings = retail_price - price;
    retailPrice = retail_price;
  }

  if (product.attributes.length > 0) {
    mainSpecContent = (
      <div className="mainSpec">
        <ul>
          {product.attributes.slice(0, 5).map((attribute) => (
            <li key={attribute.attribute.name}>
              {attribute.attribute.name}
              {': '}
              {attribute.value.value}
            </li>
          ))}
        </ul>
        <a href="#target-element">Pogledaj kompletnu specifikaciju proizvoda</a>
      </div>
    );
  }

  return (
    <>
      <div className="productInfo">
        <div className="infoPart">
          <div className="left">
            <div className="row">
              <p>
                Kategorija: <span>{category?.name}</span>
              </p>
              <p>
                Brend: <span>{product.brand?.name}</span>
              </p>
              <p>
                SKU: <span>{product.sku}</span>
              </p>
            </div>
            <h1>{product.name}</h1>
          </div>
        </div>
        {product.attributes.length > 0 && mainSpecContent}
        <div className="pricesAndActions">
          <div className="left">
            <div className="prices">
              <p className="text">Akcijska cena</p>
              <h2>{formatPrice(price)}</h2>
              <div className="discountInfo">
                <div className="usualPrice">
                  <p className="text">Redovna cena</p>
                  <p className="lineThrough">{formatPrice(retailPrice)}</p>
                </div>
                <div>
                  <p className="text">Ušteda</p>
                  <p className="saving">{formatPrice(savings)}</p>
                </div>
              </div>
            </div>
            <p className="credit">
              Cena za kupovinu na rate je <span>8.476</span>
            </p>
          </div>

          <Actions product={product} />
        </div>
        <PriceOffer product={product}/>
        <HelpWithShopping />
        <Tabs product={product} />
      </div>
    </>
  );
};
