import dynamic from 'next/dynamic';

import { HomePageData } from 'types/homePage.types';
import { Banner } from 'types/banner.types';

import { Cards } from 'components/layout/home/Cards';
import { HeroBanner } from 'components/layout/home/HeroBanner';

import { News } from 'components/layout/home/News';
import { DynamicProductsSlider } from 'components/shared/ProductsSlider';
//import { BannersSlider } from 'components/layout/home/BannersSlider';

import Image from 'next/image';
import Amd from 'public/assets/images/Amd.png';
import Akcija from 'public/assets/images/Akcija.png';
import Link from 'next/link';
import { Action } from 'types/actions.types';
import { ProductsSpecial } from 'components/shared/ProductsSpecial';
import { GenericProduct } from 'types/global.types';
import useWindowSize from 'hooks/useWindowSIze';
import { NextSeo } from 'next-seo';
import { seoData } from 'seo/seo.data';

interface Props {
  data: HomePageData;
  banners: Banner[];
  action: Action;
  specialProducts: GenericProduct[];
}

const Categories = dynamic(
  () => import('components/layout/home/Categories').then((e) => e.Categories),
  { ssr: false }
);

const HomePage = ({ data, banners, action, specialProducts }: Props) => {
  const laneBanner = banners.filter(
    (banner) => banner.position.name == 'Traka na početnoj'
  );
  const isMobileDevice = useWindowSize();
  if (isMobileDevice) {
    specialProducts = specialProducts.slice(0, 2);
  }

  //console.log(data);

  return (
    <>
      <NextSeo
        title={seoData.homePage.title}
        description={seoData.homePage.description}
      />
      <main className="homePage">
        <div className="container">
          {banners.length > 0 && <HeroBanner banners={banners} />}

          {/* <div className="notificationHomePage">
            <p>
            Call centar neće raditi <b>28.6. i 29.6.</b> zbog praznika. Sve porudžbine će biti realizovane u petak. Za sva pitanja, molimo vas da nas kontaktirate putem e-maila na <b>info@digitown.rs.</b> Odgovor ćete dobiti u najkraćem mogućem roku. Hvala na razumevanju.
            </p>
          </div> */}

          <Cards />
          {data.products.length > 0 && (
            <DynamicProductsSlider
              title="Izdvajamo iz ponude"
              products={data.products}
              subs={[]}
            />
          )}

          <div className="banners">
            <Link href="https://www.digitown.rs/kategorije/amd-konfiguracije">
              <Image src={Amd} alt="amd"></Image>
            </Link>
            <Link href="https://www.digitown.rs/kategorije/monitori">
              <Image src={Akcija} alt="akcija"></Image>
            </Link>
          </div>
          {data.sections.length > 0 && (
            <DynamicProductsSlider
              key={data.sections[0].id}
              title={data.sections[0].name}
              subs={data.sections[0].categories}
              products={data.sections[0].products}
            />
          )}

          {action && specialProducts.length > 0 && (
            <ProductsSpecial
              action={action}
              products={specialProducts}
            ></ProductsSpecial>
          )}

          {/* <DynamicProductsSlider
            title="ElectricSmart"
            products={data.sections?.[0]?.products || []}
            isPrimary
          /> */}
          {/* <BannersSlider banners={banners} /> */}
          {data.sections.slice(1, data.sections.length).map((section) => (
            <DynamicProductsSlider
              key={section.id}
              title={section.name}
              subs={section.categories}
              products={section.products}
            />
          ))}
          {laneBanner.length > 0 && (
            <div className="bannersSlider">
              <Link href={laneBanner[0].link || ''} className="bannerItem">
                <Image
                  src={
                    isMobileDevice
                      ? laneBanner[0].mobile_image
                      : laneBanner[0].desktop_image
                  }
                  alt="Banner"
                  fill
                />
              </Link>
            </div>
          )}
          {data.categories.length > 0 && (
            <Categories categories={data.categories} />
          )}
          <News />
        </div>
      </main>
    </>
  );
};

export default HomePage;

export async function getServerSideProps() {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const data = await fetch(`${baseURL}home-page/web`);
  const banners = await fetch(`${baseURL}banners?paginate=10`);
  const actions = await fetch(`${baseURL}catalog-stickers`);
  const { data: dataRes } = await data.json();
  const { data: bannersRes } = await banners.json();
  const { data: actionsRes } = await actions.json();

  const firstAction = actionsRes[0];

  let specialProductsRes = [];

  if (firstAction) {
    const specialProducts = await fetch(
      `${baseURL}catalog-stickers/${firstAction.id}`
    );
    const { data: specialProductsData } = await specialProducts.json();
    specialProductsRes = specialProductsData.slice(0, 3);
  }

  return {
    props: {
      data: dataRes,
      banners: bannersRes,
      action: firstAction || null,
      specialProducts: specialProductsRes,
    },
  };
}
