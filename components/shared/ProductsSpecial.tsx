import Image from 'next/image';
import { Action } from 'types/actions.types';
import { GenericProduct } from 'types/global.types';
import { ProductCard } from './ProductCard';
import Link from 'next/link';
import useWindowSize from 'hooks/useWindowSIze';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props {
  action: Action;
  products: GenericProduct[];
}

export const ProductsSpecial = ({ action, products }: Props) => {
  const isMobileDevice = useWindowSize();
  return (
    <>
      {/* {isMobileDevice && (
        <>
          <div className="productsSpecialTop">
            <h3>{action.name}</h3>
            <Link href={`/akcije/${action.id}`}>Pogledaj sve</Link>
          </div>
          <div className="productsSpecial">
            <Swiper slidesPerView={1}>
              <SwiperSlide>
                <div className="image">
                  <Link href={`/akcije/${action.id}`}>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_SITE_URL}/storage/${action.desktop_image}`}
                      alt={action.name}
                      width={567}
                      height={477}
                    ></Image>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard product={products[0]} />
              </SwiperSlide>
            </Swiper>
          </div>
        </>
      )} */}

      {/* {!isMobileDevice && ( */}
      <>
        {' '}
        <div className="productsSpecialTop">
          <h3>{action.name}</h3>
          <Link href={`/akcije/${action.id}`}>Pogledaj sve</Link>
        </div>
        <div className="productsSpecial">
          <div className="image">
            <Link href={`/akcije/${action.id}`}>
              <Image
                src={
                  isMobileDevice
                    ? `${process.env.NEXT_PUBLIC_SITE_URL}/storage/${action.desktop_image}` //change to mobile_image later
                    : `${process.env.NEXT_PUBLIC_SITE_URL}/storage/${action.desktop_image}`
                }
                alt={action.name}
                width={567}
                height={477}
              ></Image>
            </Link>
          </div>
          <div className="products">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>{' '}
      </>
      {/* )} */}
    </>
  );
};
