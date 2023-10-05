import { SiteLinksSearchBoxJsonLd } from 'next-seo';

const SiteLinksSearchSeo = () => {
  return (
    <SiteLinksSearchBoxJsonLd
      url="https://digitown.rs"
      potentialActions={[
        {
          target: 'https://digitown.rs//pretraga-proizvoda?search',
          queryInput: 'search_term_string',
        },
      ]}
    />
  );
};

export default SiteLinksSearchSeo;
