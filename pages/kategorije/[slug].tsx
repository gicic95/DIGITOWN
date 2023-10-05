import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';

import { Attribute, Category } from 'types/categories.types';

import { getParams } from 'utils/urls';
import { isActiveClass } from 'utils/activeClass';
import { getCategotyProducts } from 'api/categories';
import { CategoriesList } from 'components/layout/categories/CategoriesList';
import { Attributes } from 'components/layout/categories/Attributes';
import { Products } from 'components/layout/categories/Products';
import { Breadcrumb } from 'components/shared/Breadcrumb';
import { BreadcrumbJsonLd, NextSeo } from 'next-seo';
import { seoData } from 'seo/seo.data';
import { Infos } from 'components/shared/Infos';
import { useMyContext } from 'context/MyContext';

interface Props {
  attributes: Attribute[];
  category: Category;
  //initialActivePage: number;
}

export interface ActiveAttribute {
  attribute_id: number;
  value: number[];
}

const CategoriesPage = ({ category, attributes }: Props) => {
  const { lastActivePage, setLastActivePage } = useMyContext();

  const [activeSort, setActiveSort] = useState('');
  const [activePage, setActivePage] = useState(lastActivePage);

  const { query, push }: any = useRouter();
  const params = getParams(attributes, query);
  const { data, refetch } = useQuery('category-products', () =>
    getCategotyProducts(category.slug, params, activeSort, activePage)
  );

  useEffect(() => {
    setLastActivePage(activePage);
    refetch();
  }, [query, activeSort, activePage]);

  return (
    <>
      <NextSeo
        title={seoData.categoryPage.title(category.name)}
        description={seoData.categoryPage.description(category)}
        openGraph={seoData.categoryPage.openGraph(category)}
      />
      <BreadcrumbJsonLd
        itemListElements={seoData.categoryPage.breadcrumbList(category)}
      />
      <Breadcrumb name={category.name} />
      <div className="categoriesPage">
        <div className="container">
          <h1>{category.name}</h1>
          {category.subcategories?.length ? (
            <CategoriesList subcategories={category.subcategories} />
          ) : null}
          {data?.data.length ? (
            <div
              className={isActiveClass(
                attributes.length ? true : false,
                'paper pageContent'
              )}
            >
              {attributes.length ? (
                <Attributes
                  attributes={attributes}
                  activePage={activePage}
                  setActivePage={setActivePage}
                />
              ) : null}
              <Products
                data={data}
                activeSort={activeSort}
                setActiveSort={setActiveSort}
                activePage={activePage}
                setActivePage={setActivePage}
              />
            </div>
          ) : null}
          <Infos />
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({ query }: any) {
  const baseURL = `${process.env.NEXT_PUBLIC_BASE_URL}categories/${query.slug}`;

  const categoryURL = `${baseURL}?include=all_subcategories`;
  const categoryRes = await fetch(categoryURL);
  const { data: category } = await categoryRes.json();

  const attributesURL = `${baseURL}/attributes`;
  const attributesRes = await fetch(attributesURL);
  const { data: attributes } = await attributesRes.json();

  //const initialActivePage = query.page ? parseInt(query.page as string, 10) : 1;

  return {
    props: {
      category,
      attributes,
      //initialActivePage,
    },
  };
}

export default CategoriesPage;
