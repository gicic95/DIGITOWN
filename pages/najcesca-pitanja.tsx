import { Breadcrumb } from 'components/shared/Breadcrumb';
import Link from 'next/link';
// import { NextSeo } from 'next-seo';
// import { seoData } from 'seo/seo.data';

const FaqPage = () => (
  <>
    {/* <NextSeo
      title={seoData.wayOfDeliveryPage.title}
      description={seoData.wayOfDeliveryPage.description}
    /> */}
    <Breadcrumb name="Najčešća pitanja" />
    <div className="readOnlyPage">
      <div className="container">
        <h1>Najčešća pitanja</h1>
        <p className="group">
          <i>Pitanje</i> : Kako da naručim proizvod na sajtu online? <br />
          <i>Odgovor</i> : Detaljno uputsvo kako naručiti artikle sa našeg sajta
          možete pogledati klikom na sledeći link{' '}
          <Link href="/uputstvo-za-kupovinu">
            <b>digitown.rs / uputstvo-za-kupovinu</b>
          </Link>
        </p>
        <p className="group">
          <i>Pitanje</i> : Kako mogu da platim poručenu robu?
          <br />
          <i>Odgovor</i> : Prilikom završetka online kupovine na našem sajtu
          nude Vam se više načina plaćanja od kojih možete izabrati vama
          najpogodniji način. Sve načine plaćanja možete pogledati na sledećoj
          strani{' '}
          <Link href="/nacin-placanja">
            <b>digitown.rs /nacin-placanja</b>
          </Link>
        </p>
        <p className="group">
          <i>Pitanje</i> : Da li akcijska cena proizvoda važi samo za plaćanje u
          gotovini (keš)?
          <br />
          <i>Odgovor</i> : Da! Akcijska cena je cena sa popustom za gotovinsko
          plaćanje.
        </p>
        <p className="group">
          <i>Pitanje</i> : Da li cene artikla mogu da se razlikuju u OnLine
          prodavnici i u vašoj maloprodajnoj prodavnici?
          <br />
          <i>Odgovor</i> : Da! Može da se desi da je cena u online prodavnici
          različita od cene u našoj maloprodaji. Online prodavnica je prodavnica
          sa stalnim akcijama i promocijama kako bi se pospešila online prodaja,
          stoga cene koje su prikazane na sajtu su jedinstvene samo za online
          poručivanje.
        </p>
        <p className="group">
          <i>Pitanje</i> : Da li radite isporuku robe van Srbije?
          <br />
          <i>Odgovor</i> : Ne. Isporuku robe vršimo samo na teritoriji Srbije.
        </p>

        <p className="group">
          <i>Pitanje</i> : Koliko iznose troškovi dostave?
          <br />
          <i>Odgovor</i> : Sve informacije o troškovima isporuke možete
          pogledati na sledećem linku{' '}
          <Link href="/nacin-placanja">
            <b>digitown.rs /nacin-placanja</b>
          </Link>
        </p>
        <p className="group">
          <i>Pitanje</i> : Kako mogu da reklamiram kupljeni proizvod?
          <br />
          <i>Odgovor</i> : Proizvodi koji se prodaju putem naše internet
          prodavnice su praćeni svom zakonski neophodnom dokumentacijom. Ukoliko
          se pojavi potreba da reklamirate određeni artikal na kvalitet mi ćemo
          ispuniti sve zakonski definisane obaveze za prodavca, na isti način
          kao da ste robu kupili u klasičnoj prodavnici. Kontakt telefon za
          prijem reklamacija je: <b>+381 63 115 1 115</b>
        </p>
        <p className="group">
          <i>Pitanje</i> : Koji je period saobraznosti za proizvode?
          <br />
          <i>Odgovor</i> : Prema Zakonu o zaštiti potrošača Republike Srbije
          država garantuje 24 meseca saobraznosti za svaki proizvod.
        </p>
        <p className="group">
          <i>Pitanje</i> : Kupio sam proizvod, ali mi nije jasno kako se
          upotrebljava.
          <br />
          <i>Odgovor</i> : Svaki proizvod kupljen u našoj prodavnici sadrži
          korisničko uputstvo. Ukoliko imate nedoumice o korišćenju proizvoda,
          možete se obratiti našem servisu na sledeći broj telefona:{' '}
          <b>+381 63 115 1 115</b>
        </p>
        <p className="group">
          <i>Pitanje</i> : Kome treba da se obratim ako kupljeni artikl ne radi?
          <br />
          <i>Odgovor</i> : Za svaki kvar ili nepravilan rad kupljenog uređaja
          možete se obratiti našem servisu na telefon: :{' '}
          <b>+381 63 115 1 115</b>
        </p>
        {/* <p className="group">
          <i>Odgovor</i> : Detaljno uputsvo kako naručiti artikle sa našeg sajta
          možete pogledati klikom na sledeći link{' '}
          <Link href="/uputstvo-za-kupovinu">
            <b>digitown.rs / uputstvo-za-kupovinu</b>
          </Link>
        </p> */}
      </div>
    </div>
  </>
);

export default FaqPage;
