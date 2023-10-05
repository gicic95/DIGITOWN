import { Category } from 'types/categories.types';
import { ProductItem } from 'types/global.types';
import { SingleProduct } from 'types/singleProduct.types';
import { formatPrice } from 'utils/price';

const name = '| DigiTown d.o.o. ';
const site = 'Grad dobre tehnike | DigiTown d.o.o. ';
const baseUrl = "https://digitown.rs'";

export const seoData = {
  // Pocetna
  homePage: {
    title: `Početna strana ${name}`,
    description:
      'Laptop računari, monitori, televizori, mobilni telefoni, bela tehnika, mali kućni aparati... Veliki izbor renomiranih brendova| Grad dobre tehnike - DigiTown d.o.o.',
  },
  // Kontakt
  contactPage: {
    title: `Kontakt ${name}`,
    description: `KONTAKT - ${site}`,
    breadcrumbList: [
      {
        position: 1,
        name: `Kontakt`,
        item: `${baseUrl}/kontakt`,
      },
    ],
  },
  // Novosti
  newsPage: {
    title: `Novosti ${name}`,
    description: `NOVOSTI - ${site}`,
    breadcrumbList: [
      {
        position: 1,
        name: `Novosti`,
        item: `${baseUrl}/novosti`,
      },
    ],
  },
  // Novosti / slug
  newsSinglePage: {
    title: (title: string) => `${title || ''} ${name}`,
    description: `NOVOSTI - ${site}`,
    breadcrumbList: (postTitle: string) => [
      {
        position: 1,
        name: `Novosti`,
        item: `${baseUrl}/novosti`,
      },
      {
        position: 2,
        name: postTitle,
      },
    ],
  },
  // Akcije
  actionsPage: {
    title: `Akcije ${name}`,
    description: `Proizvodi na AKCIJI - ${site}`,
    breadcrumbList: [
      {
        position: 1,
        name: `Akcije`,
        item: `${baseUrl}/akcije`,
      },
    ],
  },
  //Akcije / slug
  actionsSinglePage: {
    title: `Akcije ${name}`,
    description: `Proizvod na AKCIJI - ${site}`,
    breadcrumbList: (products: ProductItem[]) => {
      const crumb = products[0].discount?.type?.name || '';
      return [
        {
          position: 1,
          name: `Akcije`,
          item: `${baseUrl}/akcije`,
        },
        {
          position: 2,
          name: crumb,
        },
      ];
    },
  },
  // O nama
  aboutUs: {
    title: `O nama ${name}`,
    description: `O NAMA - ${site}`,
    breadcrumbList: [
      {
        position: 1,
        name: `O nama`,
        item: `${baseUrl}/o-nama`,
      },
    ],
  },
  // Nacin Isporuke
  // wayOfDeliveryPage: {
  //   title: `Način Isporuke ${name}`,
  //   description: `NAČIN ISPORUKE - ${site}`,
  //   breadcrumbList: [
  //     {
  //       position: 1,
  //       name: `Način isporuke`,
  //       item: `${baseUrl}/nacin-isporuke`,
  //     },
  //   ],
  // },

  // Način Plaćanja
  methodOfPaymentPage: {
    title: `Način Plaćanja ${name}`,
    description: `NAČIN PLAĆANJA - ${site}`,
    breadcrumbList: [
      {
        position: 1,
        name: `Način plaćanja`,
        item: `${baseUrl}/nacin-placanja`,
      },
    ],
  },
  // Prava potrošača
  // consumerRightsPage: {
  //   title: `Prava potrošača ${name}`,
  //   description: 'description',
  // },

  // Pravila o privatnosti
  privacyPolicyPage: {
    title: `Pravila o privatnosti ${name}`,
    description: `PRAVILA O PRIVATNOSTI - ${site}`,
    breadcrumbList: [
      {
        position: 1,
        name: `Politika privatnosti`,
        item: `${baseUrl}/privacy-policy`,
      },
    ],
  },
  // Uslovi korišćenja sajta
  termsOfConditionsPage: {
    title: `Uslovi korišćenja sajta ${name}`,
    description: `USLOVI KORIŠĆENJA - ${site}`,
    breadcrumbList: [
      {
        position: 1,
        name: `Uslovi korišćenja`,
        item: `${baseUrl}/terms-of-conditions`,
      },
    ],
  },
  // Reklamacije
  complaintsPage: {
    title: `Reklamacije ${name}`,
    description: `REKLAMACIJE - ${site}`,
    breadcrumbList: [
      {
        position: 1,
        name: `Reklamacije`,
        item: `${baseUrl}/reklamacije`,
      },
    ],
  },
  // Registracija / Login
  authPage: {
    title: `Registracija ${name}`,
    description: `REGISTRACIJA - ${site}`,
    breadcrumbList: [
      {
        position: 1,
        name: `Registracija`,
        item: `${baseUrl}/registracija`,
      },
    ],
  },
  // Pretraga
  searchPage: {
    title: `Pretraga ${name}`,
    description: `PRETRAGA - ${site}`,
    breadcrumbList: [
      {
        position: 1,
        name: `Pretraga proizvoda`,
        item: `${baseUrl}/pretraga-proizvoda`,
      },
    ],
  },
  // Zavrsena kupivna
  thankYouPage: {
    title: `Završena kupovina ${name}`,
    description: `ZAVRŠENA KUPOVINA - ${site}`,
  },
  // Zavrsetak kupovine
  checkoutPage: {
    title: `Završetak kupovine ${name}`,
    description: `ZAVRŠETAK KUPOVINE - ${site}`,
  },
  // Lista zelja
  wishListPage: {
    title: `Lista želja ${name}`,
    description: `LISTA ŽELJA - ${site}`,
  },
  // Korpa
  cartPage: {
    title: `Korpa ${name}`,
    description: `KORPA - ${site}`,
  },
  // Kategorije
  categoryPage: {
    title: (title: string) => `${title || ''} ${name}`,
    description: (category: Category) =>
      `KATEGORIJE / ${category.name || ''} - ${site}`,
    breadcrumbList: (category: Category) => {
      const crumb = category?.name || '';
      const slug = category?.slug || '';
      return [
        {
          position: 1,
          name: crumb,
          item: `${baseUrl}/kategorije/${slug}`,
        },
      ];
    },
    openGraph: (category: Category) => ({
      url: `https://digitown.rs/proizvod/${category.slug}`,
      title: `${category.name || ''} | Digi Town`,
      description: seoData.categoryPage.description(category),
      images: [
        {
          url: category?.image || '/assets/images/Logo.png',
          alt: `${category.name || ''} | Digi Town`,
        },
      ],
      siteName: 'Digi Town',
    }),
  },
  // Proizod
  productPage: {
    title: (title: string) => `${title || ''} ${name}`,
    description: (product: SingleProduct) => {
      const category = product?.mainCategory?.[0]?.name || 'KATEGORIJA';
      const productName = product?.name || 'IME PROIZVODA';
      const productPrice = product?.price ? formatPrice(product.price) : 'n/a';

      const description = `Kupite proizvod online "${productName}". Cena: ${productPrice} | Besplatna dostava preko 15.000rsd! | Grad dobre tehnike | DigiTown d.o.o. `;
      return description;
    },
    breadcrumbList: (product: SingleProduct) => {
      const name = product?.name || '';
      const category = product?.mainCategory[0]?.name || '';
      return [
        {
          position: 1,
          name: category,
          item: `${baseUrl}/${category}`,
        },
        {
          position: 2,
          name: name,
        },
      ];
    },
    openGraph: (product: SingleProduct) => ({
      url: `https://digitown.rs/proizvod/${product.slug}`,
      title: `${product.name || ''} | Digi Town`,
      description: seoData.productPage.description(product),
      images: product.images.map((el) => ({
        url: el.small,
        alt: `${product.name || ''} | Digi Town`,
      })),
      siteName: 'Digi Town',
    }),
  },
};
