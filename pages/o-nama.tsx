import { Breadcrumb } from 'components/shared/Breadcrumb';
import { BreadcrumbJsonLd, NextSeo } from 'next-seo';
// import Image from 'next/image';

// import LogoImage from 'public/assets/images/Logo.png';
import { seoData } from 'seo/seo.data';

const AboutUsPage = () => (
  <>
    <NextSeo
      title={seoData.aboutUs.title}
      description={seoData.aboutUs.description}
    />
    <BreadcrumbJsonLd itemListElements={seoData.aboutUs.breadcrumbList} />
    <Breadcrumb name="O nama" />
    <div className="aboutUsPage">
      <div className="container">
        <h1>O nama</h1>
        {/* <div className="banner">
          <Image
            src={LogoImage}
            alt="Constant Electric"
            width={350}
            height={100}
          />
        </div> */}
        <div className="content">
          <div className="left">
            <div className="text">
              <p>
                <b>Digi Town</b> je kompanija koja je nekada nosila naziv Mobile
                Town. Mobile Town je nastao 2014-e godine sa ciljem da u svom
                gradu pruzi najbolju ponudu i uslugu mobilnih telefona i mobilne
                opreme. Kako je vreme prolazilo, obim posla kao i asortiman su
                konstantno rasli. Korak po korak, u ponudi su se pojavili TV
                uređaji, laptop i desktop računari kao i prateca oprema za iste.
                Potraznjom zadovoljnih kupaca, na red je dosla i bela tehnika,
                kao mali kucni aparati i sve sto ide uz to. Kako sam naziv
                Mobile Town ne moze pratiti sav asortiman koji je u ponudi,
                robot Digi je resio da zazume grad i postane lider u svom poslu.
                Tako da sada Digi moze da Vam ponudi sve sto se ukljucuje na
                struju a i mnogo vise
              </p>
            </div>
            <div className="info">
              <h3>Digi Town DOO</h3>
              <p>
                Matični broj: <span>21794228</span>{' '}
              </p>
              <p>
                PIB: <span>113050519 </span>
              </p>
              <p>
                <span>Novi Pazar, Stevana Nemanje 44</span>
              </p>
            </div>
          </div>
          <div className="right">
            <p className="number red">95+</p>
            <p className="text">Brendova</p>
            <p className="number blue">10000+</p>
            <p className="text">Zadovoljnih kupaca</p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default AboutUsPage;
