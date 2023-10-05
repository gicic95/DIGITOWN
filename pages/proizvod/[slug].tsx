import { BreadcrumbJsonLd, NextSeo } from 'next-seo';

import { SingleProduct } from 'types/singleProduct.types';

import { seoData } from 'seo/seo.data';
import { Images } from 'components/layout/product/Images';
import { Newsletter } from 'components/shared/Newsletter';
import { Details } from 'components/layout/product/details';
import { CustomBreadCrumb } from 'components/shared/CustomBreadcrumb';
import { DynamicProductsSlider } from 'components/shared/ProductsSlider';
import { Infos } from 'components/shared/Infos';

interface Props {
  product: SingleProduct;
}

const ProductPage = ({ product }: Props) => {
  if (!product) return null;

  //console.log(product);

  return (
    <>
      <NextSeo
        title={seoData.productPage.title(product.name)}
        description={seoData.productPage.description(product)}
        openGraph={seoData.productPage.openGraph(product)}
      />
      <BreadcrumbJsonLd
        itemListElements={seoData.productPage.breadcrumbList(product)}
      />
      <CustomBreadCrumb categories={product.categories} name={product.name} />
      <div className="productPage">
        <div className="container">
          <div className="contentGrid">
            <Images product={product} />
            <Details product={product} />
          </div>
          <DynamicProductsSlider
            title="Povezani proizvodi"
            products={product.similarProducts}
            subs={[]}
          />
          <Infos />
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({ query }: any) {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const additionalParams = `categories,images,discount.type,mainCategory,approvedRatings,brand,supplier,answeredQuestions.user`;
  const url = `${baseURL}products/${query.slug}?include=${additionalParams}`;
  const res = await fetch(url);
  let product = null;

  try {
    const { data } = await res.json();
    product = data;
    console.log('CONSOLE CATALOG STICKER: ', product.catalog_stickers);
  } catch (error) {
    product = null;
  }

  return { props: { product } };
}

export default ProductPage;
