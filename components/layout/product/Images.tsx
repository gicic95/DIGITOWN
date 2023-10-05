import { useEffect, useState } from 'react';
import Image from 'next/image';

import { SingleProduct } from 'types/singleProduct.types';
import { WishListIcon } from 'public/assets/icons/WishList';
import { useWishlist } from 'hooks/useWishlist';
import { useAuthStore } from 'stores/AuthStore';
import { useWishlistStore } from 'stores/WishlistStore';
import useWindowSize from 'hooks/useWindowSIze';
import DefaultSticker from 'public/assets/images/stiker.png';

//import { ST } from 'next/dist/shared/lib/utils';

interface Props {
  product: SingleProduct;
}

export const Images = ({ product }: Props) => {
  //console.log(product);
  const { name, images } = product;
  const title = name.length > 40 ? `${name.slice(0, 40)}...` : name;
  //const sticker = product.discount?.sticker;
  const { user } = useAuthStore();
  const mainImage = images.find(({ main }) => main)?.large || '';

  const [activeImage, setActiveImage] = useState(mainImage);
  const { items } = useWishlistStore();
  const { addToWishlist, removeFromWishlist } = useWishlist();
  const [largeImage, setLargeImage] = useState('');
  //const catalog_stickers = product.catalog_stickers;
  let stickerSrc;

  if (product.discount?.sticker) {
    stickerSrc = `${process.env.NEXT_PUBLIC_SITE_URL}/storage/${product.discount?.sticker}`;
  } else {
    stickerSrc = DefaultSticker;
  }

  const isMobileDevice = useWindowSize();

  const isAddedToWishList = items.some(
    (item) => item.product.id === product.id
  );

  const addInWishList = (e: any) => {
    e.preventDefault();
    addToWishlist({
      product_id: product.id,
      quantity: 1,
      id: user?.id,
    });
  };

  const removeFromWishList = (e: any) => {
    e.preventDefault();
    removeFromWishlist({ product_id: product.id, id: user?.id });
  };

  useEffect(() => {
    setActiveImage(mainImage);
  }, [product]);

  return (
    <div className="images">
      {largeImage !== '' && (
        <>
          <div className="backdrop" onClick={() => setLargeImage('')} />
          <div className="largeImage">
            <Image
              src={largeImage}
              alt={name}
              height={600}
              width={600}
              onClick={() => setLargeImage('')}
            ></Image>
          </div>
        </>
      )}

      <div className="allImages">
        {images.map((img) => (
          <div
            key={img.id}
            className="item"
            onClick={() => setActiveImage(img.large)}
          >
            <div key={img.id} className="img">
              <Image key={product.name} src={img.large} alt={name} fill />
            </div>
          </div>
        ))}
      </div>
      <div className="right">
        <div className="mainImg">
          <WishListIcon
            className="wishListIcon"
            isAddedToWishList={isAddedToWishList}
            onClick={isAddedToWishList ? removeFromWishList : addInWishList}
          />
          {isMobileDevice && product.discount && (
            <div className="sticker mobile">
              <Image
                //src={`${process.env.NEXT_PUBLIC_SITE_URL}/storage/${sticker}`}
                src={stickerSrc}
                alt={name}
                width={50}
                height={50}
              />
            </div>
          )}
          <div className="catalogStickers mobile">
            {isMobileDevice &&
              product.catalog_stickers &&
              product.catalog_stickers
                .filter((s) => s.sticker_active === 1)
                .map((sticker, index) => (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_SITE_URL}/storage/${sticker.sticker}`}
                    alt={product.name}
                    key={index}
                    width={50}
                    height={50}
                  ></Image>
                ))}
          </div>
          <div className="img">
            {activeImage && (
              <Image
                src={activeImage}
                alt={name}
                fill
                priority
                quality={100}
                onClick={() => setLargeImage(activeImage)}
              />
            )}
          </div>
        </div>
        {product.discount && (
          <div className="stickers">
            <p>Promocije</p>
            <div className="sticker">
              <Image
                // src={
                //   `${process.env.NEXT_PUBLIC_SITE_URL}/storage/${sticker}` ||
                //   defaultSticker
                // }
                src={stickerSrc}
                alt={title}
                width={80}
                height={80}
              />
              {product.catalog_stickers
                .filter((sticker) => sticker.sticker_active === 1)
                .map((s, index) => (
                  <Image
                    key={index}
                    src={`${process.env.NEXT_PUBLIC_SITE_URL}/storage/${s.sticker}`}
                    alt={title}
                    width={80}
                    height={80}
                  ></Image>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
