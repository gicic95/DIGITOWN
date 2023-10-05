import { Breadcrumb } from 'components/shared/Breadcrumb';
import { BreadcrumbJsonLd, NextSeo } from 'next-seo';
import { seoData } from 'seo/seo.data';

const MethodOfPaymentPage = () => (
  <>
    <NextSeo
      title={seoData.methodOfPaymentPage.title}
      description={seoData.methodOfPaymentPage.description}
    />
    <BreadcrumbJsonLd
      itemListElements={seoData.methodOfPaymentPage.breadcrumbList}
    />
    <Breadcrumb name="Način plaćanja" />
    <div className="readOnlyPage">
      <div className="container">
        <h1>Način plaćanja</h1>
        <h2>
          Željene artikle možete platiti u našoj prodavnici na više načina.
        </h2>
        <p>Na raspolaganju su vam:</p>
        <ul>
          <li>
            Gotovinsko plaćanje – plaćenjem u gotovini ostvarujete popust koji
            je na veb sajtu prikazan kroz web cenu.
          </li>
          <li>Virmansko plaćanje, tj. plaćanje preko računa;</li>
          <li>
            Plaćanje debitnim i kreditnim platnim karticama: Visa, MasterCard,
            Maestro, American Express, Dina. U zavisnosti od vrste vaše platne
            kartice i banke koja ju je izdala, možete koristiti i pogodnost
            plaćanja na više rata.
          </li>
          <li>Plaćanje čekovima građana, na 10 rata bez kamate i bez učešća</li>
          <li>
            Kreditno plaćanje – plaćanje putem kredita banake. Za spisak banaka
            sa kojima sarađujemo, uslovima za dobijanje kredita i potrebnoj
            dokumentaciji molimo Vas da nas kontaktirate na telefon +381 63 115
            1 115 ili na mail info@digitown.rs
          </li>
        </ul>
        <h2>Isporuka robe</h2>
        <p className="group">
          Besplatna isporuka na kućnu adresu je omogućena za narudžbine u
          vrednosti preko 10.000 dinara, a težine do 20kg.
        </p>
        <p className="group">
          Poručeni proizvodi se nakon potvrde porudžbine od strane naših
          komercijalista isporučuju na navedenu adresu kurirskom službom sa
          kojim DigiTown d.o.o. ima sklopljen Ugovor o saradnji.
        </p>
        <p className="group">
          Vreme isporuke je obično 3 do 5 dana, ali zavisi od toga kada je
          izvršena narudžbina, odnosno kada je evidentirana uplata (ukoliko
          avansno ili virmanski plaćate naručene proizvode).
        </p>
        <p className="group">
          Na vreme isporuke mogu da utiču faktori kao što su vremenski uslovi na
          putevima, neradni dani i državni praznici, pa Vas molimo da to imate u
          vidu kada vršite narudžbinu.
        </p>
        <p className="group">
          Takođe, ukoliko imate potrebu za brzom isporukom (u toku istog dana
          ili danas za sutra) molimo Vas da to naglasite u napomeni prilikom
          naručivanja proizvoda ili kada vas kontaktira naš komercijalista.
        </p>
        {/* <div className="group">
          <h3>Gotovinski</h3>
          <p>
            Robu iz našeg širokog asortimana možete platiti gotovinom u nekom od
            Constant Electric maloprodajnih objekata.
          </p>
        </div>
        <div className="group">
          <h3>Pouzećem (gotovinski)</h3>
          <p>
            Plaćanje pouzećem podrazumeva plaćanje robe poštaru ili kuriru
            prilikom preuzimanja.
          </p>
        </div>
        <div className="group">
          <h3>Nalogom za prenos (virmanski)</h3>
          <p>
            Ukoliko ste pravno lice ili korisnik elektronskog bankarstva
            (e-banking-a) uplatu možete izvršiti prenosom sredstava sa Vašeg
            računa. Uplatu na osnovu dostavljenog predračuna možete izvršiti
            nakon konsultacija sa našim komercijalistima putem e-bankinga ili
            uplatom u najbližoj pošti ili banci.
          </p>
        </div> */}
      </div>
    </div>
  </>
);

export default MethodOfPaymentPage;
