import { Breadcrumb } from 'components/shared/Breadcrumb';
import { BreadcrumbJsonLd, NextSeo } from 'next-seo';
import { seoData } from 'seo/seo.data';

const PrivacyPolicyPage = () => (
  <>
    <NextSeo
      title={seoData.privacyPolicyPage.title}
      description={seoData.privacyPolicyPage.description}
    />
    <BreadcrumbJsonLd
      itemListElements={seoData.privacyPolicyPage.breadcrumbList}
    />
    <Breadcrumb name="Politika privatnosti" />
    <div className="readOnlyPage">
      <div className="container">
        <h1>Pravila o privatnosti</h1>
        <p>
          U ime LOGOS obavezujemo se da ćemo čuvati privatnost svih naših
          kupaca. Prikupljamo samo neophodne, osnovne podatke o kupcima/
          korisnicima i podatke neophodne za poslovanje i informisanje korisnika
          u skladu sa dobrim poslovnim običajima i u cilju pružanja kvalitetne
          usluge. Dajemo kupcima mogućnost izbora uključujući mogućnost odluke
          da li žele ili ne da se izbrišu sa mailing lista koje se koriste za
          marketinške kampanje. Svi podaci o korisnicima/kupcima se strogo
          čuvaju i dostupni su samo zaposlenima kojima su ti podaci nužni za
          obavljanje posla. Svi zaposleni LOGOS odgovorni su za poštovanje
          načela zaštite privatnosti.
        </p>
      </div>
    </div>
  </>
);

export default PrivacyPolicyPage;
