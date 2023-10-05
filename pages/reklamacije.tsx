import { Breadcrumb } from 'components/shared/Breadcrumb';
import { BreadcrumbJsonLd, NextSeo } from 'next-seo';
import { seoData } from 'seo/seo.data';

const ComplaintsPage = () => (
  <>
    <NextSeo
      title={seoData.complaintsPage.title}
      description={seoData.complaintsPage.description}
    />
    <BreadcrumbJsonLd
      itemListElements={seoData.complaintsPage.breadcrumbList}
    />
    <Breadcrumb name="Reklamacije" />
    <div className="readOnlyPage">
      <div className="container">
        <h1>Reklamacije</h1>
        <p className="group">
          Proizvodi koji se prodaju putem naše internet prodavnice su praćeni
          svom zakonski neophodnom dokumentacijom. Ukoliko se pojavi potreba da
          reklamirate određeni artikal na kvalitet mi ćemo ispuniti sve zakonski
          definisane obaveze za prodavca, na isti način kao da ste robu kupili u
          klasičnoj prodavnici.
        </p>
        <ul className="decimal">
          <li>
            Ukoliko je isporučeni proizvod oštećen ili mu nedostaju neki delovi
            (nekompletan je) problem se mora evidentirati na licu mesta, ispred
            kurira, tako što ćete proveriti robu i ukoliko nešto nije u redu,
            odmah prijaviti neispravnost. Ukoliko kurir ne sačeka da proverite
            paket, rok za reklamaciju je 14 dana. Ukoliko je paket koji Vam je
            kurir dostavio oštećen možete odbiti pošiljku, ukoliko šteta bude
            ustanovljena nakon isporuke i otvaranje paketa dužni ste da
            reklamaciju prijavite u roku od 24h jer u suprotnom neće biti
            prihvaćena.
          </li>
          <li>
            U slučaju reklamacije na funkcionalnu ispravnost proizvoda robu
            odnosite u maloprodaju gde ste proizvod kupili i gde ga možete
            reklamirati. Ako ste proizvod kupili preko web-a, kontaktirate nas
            na kontakt telefone koji se nalaze na našoj stranici kako bi se
            dogovorili o preuzimanju neispravanog uređaja i dostavili ga našoj
            službi reklamacija.
          </li>
          <li>
            Ukoliko Vam proizvod koji ste poručili stigne oštećen prilikom
            isporuke, potrebno je u roku od 24 sata kontaktirati kurirsku službu
            koja je proizvod dostavila kako bi napravili zapisnik, a zatim nas
            obavestiti o tome.
          </li>
          <li>
            Imate rok od 14 dana, od dana prijema, da vratite robu prodavcu,
            ukoliko iz nekih razloga niste zadovoljni. Kupac robu može da vrati
            samo uz RAČUN i napisan RAZLOG VRAĆANJA. Mi ćemo robu prihvatiti i
            izvršiti povraćaj novca, ako u tom periodu niste oštetili ili na
            bilo koji drugi način umanjili vrednost proizvoda. Potrebno je da
            nas o tome obavestite info@electric.co.rs i popunite obrazac za
            jednostrani raskid ugovora koji se nalazi na ovom sajtu. Povraćaj
            robe i novca ide o trošku kupca.
          </li>
        </ul>
      </div>
    </div>
  </>
);

export default ComplaintsPage;
