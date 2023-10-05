import Image from 'next/image';
import Link from 'next/link';

import { Action } from 'types/actions.types';

//import { Newsletter } from 'components/shared/Newsletter';
import { Breadcrumb } from 'components/shared/Breadcrumb';
import { BreadcrumbJsonLd, NextSeo } from 'next-seo';
import { seoData } from 'seo/seo.data';
import { Infos } from 'components/shared/Infos';

interface Props {
  data: Action[];
}

const Actions = ({ data }: Props) => {
  return (
    <>
      <NextSeo
        title={seoData.actionsPage.title}
        description={seoData.actionsPage.description}
      />
      <BreadcrumbJsonLd itemListElements={seoData.actionsPage.breadcrumbList} />
      <Breadcrumb name="Akcije" />
      <div className="actionsPage">
        <div className="container">
          <h1>Akcije i katalozi</h1>
          <p>
            <b>DigiTown</b> OnLine prodavnica je prodavnica sa stalnim akcijama
            i promocijama. Svakodnevno nudimo veliki broj proizvoda iz
            različitih kategorija po sniženim, akcijskim cenama.
          </p>
          <p>
            Ove promocije mogu biti u obliku sniženja cena, besplatne dostave
            ili poklona uz kupovinu. Promocije često imaju rok trajanja, pa je
            važno iskoristiti ih dok su dostupne.
          </p>
          <p>
            Kako biste lakše pratili popuste i akcije na sajtu možete se
            prijaviti i na naš newsletter, putem kojeg ćete biti obavešteni o
            svim novim promocijama i sniženjima.
          </p>
          <p>
            Pratite naš veb portal i možete uštedeti novac prilikom kupovine i
            dobiti željeni proizvod po povoljnijoj ceni!
          </p>
          <div className="cards">
            {data.map((item) => (
              <Link href={`/akcije/${item.id}`} key={item.id} className="card">
                <div className="img">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_SITE_URL}/storage/${item.mobile_image}`}
                    alt={item.name}
                    fill
                  />
                </div>
                <p>{item.name}</p>
              </Link>
            ))}
          </div>
          <Infos />
        </div>
      </div>
    </>
  );
};

export default Actions;

export async function getServerSideProps() {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${baseURL}catalog-stickers`);
  const data = await res.json();

  //console.log(data);

  return { props: { data: data?.data || [] } };
}
