import { ProductItem } from 'types/global.types';

import { ProductsListsBlock } from 'components/shared/ProductsListsBlock';
import { Breadcrumb } from 'components/shared/Breadcrumb';
import { BreadcrumbJsonLd, NextSeo } from 'next-seo';
import { seoData } from 'seo/seo.data';

interface Props {
  products: ProductItem[];
}

const ActionPage = ({ products }: Props) => {
  if (!products) {
    return null;
  }

  return (
    <>
      <NextSeo
        title={seoData.actionsPage.title}
        description={seoData.actionsPage.description}
      />
      <BreadcrumbJsonLd
        itemListElements={seoData.actionsSinglePage.breadcrumbList(products)}
      />
      <Breadcrumb name="Akcije" />
      <div className="pageHolder">
        <div className="container">
          <h1 className="pageTitle">Odaberite proizvode na akciji</h1>
          <ProductsListsBlock products={products} />
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({ query }: any) {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${baseURL}catalog-stickers/${query.slug}`);
  const { data } = await res.json();

  //console.log(`${baseURL}catalog-stickers/${query.slug}`);

  return { props: { products: data || null } };
}

export default ActionPage;
