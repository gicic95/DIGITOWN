import { useEffect, useState } from 'react';

import { DownArrowIcon } from 'public/assets/icons/DownArrow';
import { SingleProduct } from 'types/singleProduct.types';
import { useCartStore } from 'stores/CartStore';
import { useMutation } from 'react-query';
import { addCartItem, deleteItem, getCart, updateCartItem } from 'api/cart';
import { toast } from 'react-toastify';
import { useAuthStore } from 'stores/AuthStore';
import { useCart } from 'hooks/useCart';
import { useRouter } from 'next/router';
import { WishListIcon } from 'public/assets/icons/WishList';
import { CartItem } from 'api/cart/types';
import { useWishlist } from 'hooks/useWishlist';
import { useWishlistStore } from 'stores/WishlistStore';

interface Props {
  product: SingleProduct;
}

export const Actions = ({ product }: Props) => {
  const [quantity, setQuantity] = useState(1);
  const { user } = useAuthStore();
  const { addToCart } = useCart();
  const { items: cartItems } = useCartStore();
  const { push } = useRouter();
  const { addToWishlist, removeFromWishlist } = useWishlist();

  const isInCart = cartItems.some((item) => item.product.id === product.id);
  const { items: wishListItems } = useWishlistStore();

  const isAddedToWishList = wishListItems.some(
    (item) => item.product.id === product.id
  );

  const onDecrement = () => {
    if (quantity > 1) setQuantity((prev) => (prev < 1 ? prev : prev - 1));
  };

  const onIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

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

  async function handleClick() {
    await addToCart({
      product_id: product.id,
      quantity: quantity,
      id: user?.id,
    });

    setTimeout(() => push('/zavrsetak-kupovine'), 1000);
  }

  return (
    <div className="actionsColumns">
      <div className="top">
        <div className="counter">
          <DownArrowIcon onClick={onDecrement} />
          <p>{quantity}</p>
          <DownArrowIcon onClick={onIncrement} />
        </div>
        <div
          className="wishlist"
          onClick={isAddedToWishList ? removeFromWishList : addInWishList}
        >
          <WishListIcon
            className="wishListIcon"
            isAddedToWishList={isAddedToWishList}
          />
          {isAddedToWishList ? 'Dodat u listu želja' : 'Dodaj u listu želja'}
        </div>
      </div>

      <div className="action">
        <button
          className="btn-primary"
          onClick={(e) => {
            e.preventDefault();
            if (isInCart) return push('/zavrsetak-kupovine');
            handleClick();
          }}
        >
          Kupi odmah
        </button>
      </div>
      <div className="action">
        <button
          className="btn-primary darker"
          onClick={(e) => {
            e.preventDefault();
            if (isInCart) return push('/korpa');
            addToCart({
              product_id: product.id,
              quantity: quantity,
              id: user?.id,
            });
          }}
        >
          {isInCart ? 'Dodat u korpu' : 'Dodaj u korpu'}
        </button>
      </div>
    </div>
  );
};
