import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  openGraph: {
    type: 'website',
    locale: 'sr_RS',
    url: 'https://digitown.rs/',
    title: 'Digi Town',
    siteName: 'Digi Town',
    description: 'Grad dobre tehnike  | Digi Town d.o.o | Novi Pazar Srbija',
    images: [
      {
        url: 'https://digitown.rs/assets/images/Logo.png',
        alt: 'Logo',
      },
    ],
  },
  twitter: {
    site: 'Digi Town',
    cardType: 'summary_large_image',
  },
};

export default config;
