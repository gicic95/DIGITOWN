import dynamic from 'next/dynamic';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';

import { GenericProduct, Subcategory } from 'types/global.types';
import { isActiveClass } from 'utils/activeClass';

import { ProductCard } from './ProductCard';
import Link from 'next/link';

interface Props {
  title: string;
  subs: Subcategory[];
  products: GenericProduct[];
  isPrimary?: boolean;
}

export const ProductsSlider = ({
  title,
  subs,
  products,
  isPrimary = false,
}: Props) => (
  <>
    <div className="sectionContainer">
      <div className="sectionLeft">
        <h2 className="sectionTitle">{title}</h2>

        <div className="links">
          {subs.length > 0 && (
            <Link href={`/kategorije/${subs[0].slug}`}>{subs[0].name}</Link>
          )}
          {subs.length > 1 && (
            <Link href={`/kategorije/${subs[1].slug}`}>{subs[1].name}</Link>
          )}
          {subs.length > 2 && (
            <Link href={`/kategorije/${subs[2].slug}`}>{subs[2].name}</Link>
          )}
        </div>
      </div>
    </div>

    <div className={isActiveClass(isPrimary, 'paper productsSlider')}>
      {/* <div className="leftArrow">{'<'}</div> */}
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        navigation={true}
        loop
        breakpoints={{
          1750: { slidesPerView: 5 },
          1400: { slidesPerView: 4 },
          1024: { slidesPerView: 3 },
          700: { slidesPerView: 2 },
        }}
      >
        {products.map((p) => (
          <SwiperSlide key={p.id}>
            <ProductCard product={p} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="rightArrow">{'>'}</div> */}
    </div>
  </>
);

export const DynamicProductsSlider = dynamic(
  import('components/shared/ProductsSlider').then((e) => e.ProductsSlider),
  { ssr: false }
);
