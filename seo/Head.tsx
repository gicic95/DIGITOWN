import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import SEO from 'next-seo.config';

export const AppHead = () => {
  const { asPath } = useRouter();

  return (
    <>
      <Head>
        <title>Digi Town</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/assets/images/Logo.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="/assets/images/Logo.png" />
        <meta property="twitter:title" content="DESCRIPTION" />
        <meta property="twitter:description" content="DESCRIPTION" />
        <meta
          name="google-site-verification"
          content="UaoN8tHnOS59yAy0WtRm5pkUANQI86ceceEQ5_00rvE"
        />
        <link
          rel="alternate"
          href={`https://digitown.rs${asPath}`}
          hrefLang="sr-SR"
        />
        <link rel="canonical" href={`https://digitown.rs${asPath}`} />
      </Head>
      <DefaultSeo
        {...SEO}
        canonical={`https://digitown.rs${asPath}`}
        languageAlternates={[
          { hrefLang: 'sr-SR', href: `https://digitown.rs${asPath}` },
        ]}
      />
    </>
  );
};
