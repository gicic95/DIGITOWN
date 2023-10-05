import { useCart } from 'hooks/useCart';
import { useProductPrice } from 'hooks/useProductPrice';
import { useWishlist } from 'hooks/useWishlist';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { WishListIcon } from 'public/assets/icons/WishList';
import { useAuthStore } from 'stores/AuthStore';
import { useCartStore } from 'stores/CartStore';
import { useWishlistStore } from 'stores/WishlistStore';
import { GenericProduct } from 'types/global.types';
import { formatPrice } from 'utils/price';
import DefaultSticker from 'public/assets/images/digi-town-akcija-stiker.png';

interface Props {
  product: GenericProduct;
}

export const ProductCard = ({ product }: Props) => {
  //console.log(product);
  const { name, main_image } = product;
  const title = name.length > 35 ? `${name.slice(0, 35)}...` : name;
  const { user } = useAuthStore();
  const { items: cartItems } = useCartStore();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist } = useWishlist();
  const { items } = useWishlistStore();
  const { getProductPrice } = useProductPrice();
  const { push } = useRouter();
  const price = getProductPrice(product);

  let stickerSrc;

  if (product.discount?.sticker) {
    stickerSrc = `${process.env.NEXT_PUBLIC_SITE_URL}/storage/${product.discount?.sticker}`;
  } else {
    stickerSrc = DefaultSticker;
  }

  let savings;
  let retailPrice;

  if (product.retail_price - price == 0) {
    savings = product.retail_price * 1.14 - price;
    retailPrice = product.retail_price * 1.14;
  } else {
    savings = product.retail_price - price;
    retailPrice = product.retail_price;
  }

  //const catalogSticker = product.catalog_stickers?.

  const isAddedToWishList = items.some(
    (item) => item.product.id === product.id
  );
  const badgeText = product.catalog_stickers?.[0]?.label_text || null;
  const isInCart = cartItems.some((item) => item.product.id === product.id);

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

  return (
    <div className="productContainer">
      <Link href={`/proizvod/${product.slug}`} className="productCard">
        <div className="top">
          {product.discount && (
            <div className="sticker">
              <Image src={stickerSrc} alt={title} width={50} height={50} />
            </div>
          )}

          <WishListIcon
            className="heartIcon"
            isAddedToWishList={isAddedToWishList}
            onClick={isAddedToWishList ? removeFromWishList : addInWishList}
          />
          <div className="catalogStickers">
            {product.catalog_stickers &&
              product.catalog_stickers
                .filter((s) => s.sticker_active === 1)
                .map((sticker) => (
                  <Image
                    key={product.name}
                    src={`${process.env.NEXT_PUBLIC_SITE_URL}/storage/${sticker.sticker}`}
                    alt={product.name}
                    width={50}
                    height={50}
                  ></Image>
                ))}
          </div>
          <div className="photo">
            {main_image && (
              <Image
                src={main_image.large}
                alt={title}
                width={190}
                height={190}
              />
            )}
          </div>
          <h2 title={name}>{title}</h2>
        </div>
        <div className="bottom">
          {/* <div className="badgeHolder">
            {badgeText && (
              <div className="badge primary" title={badgeText}>
                {badgeText.length > 30
                  ? `${badgeText.slice(0, 30)}...`
                  : badgeText}
              </div>
            )}
          </div> */}
          <div className="prices">
            <div className="pricesTop">
              <p>Akcijska cena</p>
              <h3>{formatPrice(price)}</h3>
            </div>
            <div className="pricesBottom">
              <div>
                <h4>Redovna cena</h4>
                <p className="retail">{formatPrice(retailPrice)}</p>
              </div>
              <div>
                <h4>Ušteda</h4>
                <p className="saving">{formatPrice(savings)}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <button
        className="btn-primary"
        onClick={(e) => {
          e.preventDefault();
          if (isInCart) return push('/korpa');
          addToCart({ product_id: product.id, quantity: 1, id: user?.id });
        }}
      >
        {isInCart ? 'Dodat u korpu' : 'Dodaj u korpu'}
      </button>
    </div>
  );
};
