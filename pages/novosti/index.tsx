import Image from 'next/image';
import Link from 'next/link';

import { NewsType } from 'types/news.types';

import { Infos } from 'components/shared/Infos';
import { BreadcrumbJsonLd, NextSeo } from 'next-seo';
import { seoData } from 'seo/seo.data';

interface Props {
  data: NewsType[];
}

const NewsPage = ({ data }: Props) => {
  //console.log(data);
  return (
    <>
      <NextSeo
        title={seoData.newsPage.title}
        description={seoData.newsPage.description}
      />
      <BreadcrumbJsonLd itemListElements={seoData.newsPage.breadcrumbList} />
      <div className="actionsPage">
        <div className="container">
          <h1>Novosti</h1>
          <p>
            Vesti - Ovde ćete pronaći najnovije vesti i informacije iz sveta
            računara i tehnologije.
          </p>
          <p>
            Pratite vesti o najnovijim tehnološkim dostignućima, najnovijim
            uređajima i programima, kao i savete za upotrebu i održavanje
            računara.
          </p>
          <p>
            Naši članci pokrivaju širok spektar tema, uključujući nove{' '}
            <b>
              procesore, matične ploče, grafičke kartice, memorijske module, SSD
              diskove
            </b>
            , kao i najnovije softverske aplikacije i operativne sisteme.
          </p>
          <p>
            Uz nas ćete biti u toku sa najnovijim trendovima i dešavanjima u
            svetu računarske tehnologije. Bez obzira da li ste profesionalac u
            IT industriji ili jednostavno volite da se igrate sa računarima,
            naša veb stranica je savršeno mesto za vas.
          </p>
          <div className="cards">
            {data.map((item) => (
              <Link href={`/novosti/${item.id}`} key={item.id} className="card">
                <div className="img">
                  <Image src={item.image} alt={item.title} fill />
                </div>
                <p>{item.title}</p>
                {/* {isMobile && ( */}
                <Link
                  href={`/novosti/${item.id}`}
                  className="btn-primary mobile"
                >
                  Prikaži više
                </Link>
                {/* )} */}
              </Link>
            ))}
          </div>
          <Infos />
        </div>
      </div>
    </>
  );
};

export default NewsPage;

export async function getServerSideProps() {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${baseURL}news`);
  const data = await res.json();

  return { props: { data: data?.data || [] } };
}
