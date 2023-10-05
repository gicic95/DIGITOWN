import { CartItems } from 'components/layout/cart/CartItems';
import { CartSummary } from 'components/layout/cart/CartSummary';
import { EmptyCart } from 'components/layout/cart/EmptyCart';
import { Breadcrumb } from 'components/shared/Breadcrumb';
import { NextSeo } from 'next-seo';
import { seoData } from 'seo/seo.data';
import { useCartStore } from 'stores/CartStore';

const WishListPage = () => {
  const { items, totalPrice } = useCartStore();

  return (
    <>
      <NextSeo
        title={seoData.cartPage.title}
        description={seoData.cartPage.description}
      />

      {totalPrice < 10000 && totalPrice != 0 && (
        <div className="freeShipping">
          <p>
            AKO PORUČITE ZA JOŠ {10000 - totalPrice} RSD I UKOLIKO JE POŠILJKA
            LAKŠA OD 20Kg DOSTAVA ĆE <b>BITI BESPLATNA</b>
          </p>
        </div>
      )}
      {totalPrice > 10000 && (
        <div className="freeShipping">
          <p>
            OSTVARILI STE <b>BESPLATNU DOSTAVU</b> UKOLIKO JE POŠILJKA LAKŠA OD
            20Kg
          </p>
        </div>
      )}

      <Breadcrumb name="Korpa" />
      <div className="cartPage">
        <div className="container">
          {items.length ? (
            <div>
              <h1 className="pageTitle">Korpa</h1>
              <div className="cartPageContent">
                <CartItems items={items} isCart />
                <CartSummary totalPrice={totalPrice} isCart />
              </div>
            </div>
          ) : (
            <EmptyCart message="Korpa je prazna." />
          )}
        </div>
      </div>
    </>
  );
};

export default WishListPage;
