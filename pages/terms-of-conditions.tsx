import { Breadcrumb } from 'components/shared/Breadcrumb';
import { BreadcrumbJsonLd, NextSeo } from 'next-seo';
import Link from 'next/link';
import { seoData } from 'seo/seo.data';

const TermsOfConditionsPage = () => (
  <>
    <NextSeo
      title={seoData.termsOfConditionsPage.title}
      description={seoData.termsOfConditionsPage.description}
    />
    <BreadcrumbJsonLd
      itemListElements={seoData.termsOfConditionsPage.breadcrumbList}
    />
    <Breadcrumb name="Uslovi korišćenja" />
    <div className="readOnlyPage">
      <div className="container">
        <h1>OPŠTI USLOVI KORIŠĆENJA WEB SHOP-a DIGITOWN D.O.O.</h1>
        <p className="group">
          Ovim Opštim uslovima korišćenja Web shop-a <b>DigiTown d.o.o.</b> (u
          daljem tekstu: Opšti uslovi) utvrđuju se uslovi pod kojima se
          ostvaruje pravo na kupovinu i plaćanje proizvoda i usluga iz ponude
          Preduzeća <b>DigiTown d.o.o.</b> putem Web shop-a.
        </p>
        <p className="group">
          Web shop omogućava punoletnim fizičkim i pravnim licima (u daljem
          tekstu: Korisnici) izbor proizvoda/artikala, uvid u cenu i
          karakteristike istih kao i online kupovinu.
        </p>

        <h2>1. REGISTRACIJA KORISNIKA</h2>
        <p className="group">
          Korisnik se registracijom i kreiranjem naloga prijavljuje za
          korišćenje Web shop-a i ostvaruje pravo da putem Web shop-a vrši
          online kupovinu Proizvoda/Usluga. Korisnik je u postupku kreiranja
          naloga i prilikom svakog kasnijeg unošenja podataka u obavezi da unese
          tačne i potpune osnovne lične podatke, a u vezi sa tim podacima, u
          skladu sa Zakonom o zaštiti podataka o ličnosti, daje izričitu
          saglasnost <b>DigiTownu-u</b> da iste obrađuje i čuva za potrebe
          izvršenja njegovih obaveza u vezi sa Proizvodima/Uslugama naručenim
          putem Web shop-a ili njegovih na zakonu zasnovanih obaveza, naplate
          potraživanja, razvoja njegovih usluga i sprečavanja potencijalnih
          zloupotreba.
        </p>
        <p className="group">
          <b>DigiTown d.o.o.</b> će, u skladu sa važećim propisima, preduzeti
          sve raspoložive mere u cilju zaštite podataka o Korisniku, kao i o
          podacima o izvršenoj kupovini. Navedeni podaci će se smatrati
          poslovnom tajnom i nad njima se primenjuje Politika privatnosti ličnih
          podataka.
        </p>
        <p className="group">
          Podaci o Korisniku koje Korisnik dostavi DigiTownu-u neće biti
          korišćeni u cilju dostave reklamnih obaveštenja, osim ukoliko Korisnik
          za to prethodno ne da izričitu saglasnost.
        </p>

        <h2>2. CENE</h2>
        <p className="group">
          Cene Proizvoda/Usluga su izražene u dinarima i iskazane su u bruto
          iznosu (sa svim pripadajućim porezima). Za većinu proizvoda na sajtu
          Korisnik može videti 2 vrste cena.
        </p>
        <p className="group">
          <strong>WEB cena</strong> – Ova cena važi isključivo za gotovinsko
          plaćanje u dinarima i nije važeća za plaćenje čekovima, platnim
          karticama ili preko kredita, za odloženo plaćanje primenjuje se MP
          cena.
        </p>
        <p className="group">
          <strong>MP cena</strong> – Ova cena važi za odloženo plaćenje
          čekovima, platnim karticama ili preko kredita, za gotovinsko plaćanje
          primenjuje se WEB cena.
        </p>
        <p className="group">
          DigiTown d.o.o. može promeniti sadržaj ovog sajta ili proizvode i cene
          navedene na sajtu u bilo koje vreme i bez prethodnog upozorenja.
        </p>
        <p className="group">
          Dostava Proizvoda/Usluga kupljenih putem Web shop-a, a u iznosu preko
          10.000 dinara na adresu Korisnika vrši se o trošku DigiTown d.o.o. Sve
          naručene proizvode ispod 10.000 dinara, šalju se kurirskom službom, a
          troškovi isporuke padaju na teret kupaca.
        </p>

        <h2>3. NAČIN PLAĆANJA</h2>
        <p className="group">
          Plaćanje Proizvoda/Usluga može se izvršiti pouzećem ili uplatom na
          račun (pravna lica) <b>DigiTown-a</b>, s tim da u slučaju plaćanja
          naručenih Proizvoda/Usluga pouzećem, Korisnik vrši uplatu porudžbine
          kurirskoj službi, prilikom preuzimanja paketa.{' '}
        </p>
        <h2>4. Pravo kupca/potrošača na “odustanak od ugovora/kupovine”</h2>
        <p className="group">
          Kupac/Potrošač po Zakonu o zaštiti potrošača ima rok od 14 dana od
          preuzimanja robe da se predomisli i odustane od kupovine a da pritom
          ne mora ni da odgovori zašto. Kupac/Potrošač robu može da vratiti samo
          UZ FISKALNI RAČUN i napisan razlog vraćanja (predomislio se, ne
          odgovara, neispravno primljeno ili bez ikakvog komentara ukoliko ne
          želi da komentariše razlog vraćanja). Ako kupac/potrošač u navedenom
          roku ne želi da zadrži robu, može da izjavi odustanak bez negativnih
          posledica, odnosno samo uz pokrivanje troškova vraćanja/transporta
          robe.
        </p>
        <p className="group">
          Kupac/Potrošač snosi isključivo direktne troškove vraćanja robe, osim
          ako se trgovac saglasio sa tim da ih on snosi ili ako nije prethodno
          obavestio kupca/potrošača da je sam kupac/potrošač u obavezi da ih
          plati. Trgovac nije odgovoran za oštećenja nastala usled neadekvatnog
          pakovanja robe i oštećenja u transportu robe (prilikom vraćanja) do
          mesta kupovine, tu odgovornost snosi sam kupac/potrošač.
        </p>
        <p className="group">
          Kupac/Potrošač je u obavezi da robu vrati u originalnu ambalažu uz
          obavezan fiskalni račun, a preporuka je da se napravi kopija fiskalnog
          računa i prateće dokumentacije. Kupac/Potrošač je isključivo odgovoran
          za umanjenu vrednost robe koja nastane kao posledica rukovanja robom
          na način koji nije adekvatan, odnosno prevazilazi ono što je neophodno
          da bi se ustanovili priroda, karakteristike i funkcionalnost robe.
        </p>
        <p className="group">
          Trgovac (DigiTown d.o.o.) je u tom slučaju dužan da bez odlaganja
          izvrši povraćaj uplata koje je primio od potrošača, uključujući i
          troškove isporuke, a najkasnije u roku od 14 dana od dana kada je
          primio obrazac za odustanak. Osim toga, trgovac mora da mu, bilo
          elektronskom poštom ili na kućnu adresu, dostavi i obrazac za
          odustanak, a dužan je i da mu objasni svu proceduru.
        </p>
        <p className="group">
          Pravilnik o obliku i sadržini obrasca, kao i sam obrazac možete
          pogledati i preuzeti sa sajta Ministarstva trgovine, turizma i
          telekomunikacija, sa sektora za zaštitu potrošača{' '}
          <Link href="https://zastitapotrosaca.gov.rs/zakonodavstvo">
            na ovom linku{' '}
          </Link>
        </p>
        <p className="group">
          Potrošač nema pravo da odustane od ugovora/kupovine u slučaju:
        </p>
        <ul>
          <li>
            pružanja usluga, nakon što je usluga u potpunosti izvršena, ako je
            pružanje usluge počelo nakon izričite prethodne saglasnosti
            potrošača i uz njegovu potvrdu da zna da gubi pravo na odustanak od
            ugovora kada trgovac u potpunosti izvrši ugovor;
          </li>
          <li>
            isporuke robe proizvedene prema posebnim zahtevima potrošača ili
            jasno personalizovane;
          </li>
          <li>
            isporuke robe koja je podložna pogoršanju kvaliteta ili ima kratak
            rok trajanja;
          </li>
          <li>
            isporuke zapečaćene robe koja se ne može vratiti zbog zaštite
            osetljivih informacija (serijskih brojeva, aktivacionih kodova),
            zaštite zdravlja ili higijenskih razloga i koja je otpečaćena nakon
            isporuke.
          </li>
        </ul>

        <h2>5. SERVIS i REKLAMACIJA ROBE</h2>
        <p className="group">
          Reklamacija robe se vrši u objektu prodavca na mestu obeleženom za
          prijem reklamacija. U slučaju da potrošač reklamira artikal nakon
          isteka 14 dana od preuzimanja robe (zakonskog roka za odustanak od
          kupovine), zbog nedostatka ili kvara, kupac se upućuje na redovnu
          proceduru RMA (da artikal sam odnese u ovlašćeni servis naveden na
          garantnom listu ili da artikal donese u najbližu <b>DigiTown d.o.o</b>{' '}
          . radnju). U slučaju reklamacije robe, prodavac (
          <b>DigiTown d.o.o.</b> ) mora da odgovori za najviše 8 dana, a onda
          ima dodatnih 30 dana za rešavanje reklamacije.
        </p>
        <p className="group">
          Potrošač može da izjavi reklamaciju radi ostvarivanja svojih prava
          usled nesaobraznosti robe po ugovoru i prava po osnovu garancije, kao
          i zbog pogrešno obračunate cene i drugih nedostataka, na sledeće
          načine:
        </p>
        <ul>
          <li>
            pružanja usluga, nakon što je usluga u potpunosti izvršena, ako je
            pružanje usluge počelo nakon izričite prethodne saglasnosti
            potrošača i uz njegovu potvrdu da zna da gubi pravo na odustanak od
            ugovora kada trgovac u potpunosti izvrši ugovor;
          </li>
          <li>
            isporuke robe proizvedene prema posebnim zahtevima potrošača ili
            jasno personalizovane;
          </li>
          <li>
            isporuke robe koja je podložna pogoršanju kvaliteta ili ima kratak
            rok trajanja;
          </li>
          <li>
            isporuke zapečaćene robe koja se ne može vratiti zbog zaštite
            osetljivih informacija (serijskih brojeva, aktivacionih kodova),
            zaštite zdravlja ili higijenskih razloga i koja je otpečaćena nakon
            isporuke.
          </li>
        </ul>
        <p className="group">
          Ukoliko potrošač šalje robu na reklamaciju kurirskom službom, u
          obavezi je da robu adekvatno i bezbedno upakuje za slanje ako je
          moguće u originalnoj ambalaži. Trgovac nije odgovoran za oštećenja
          nastala usled neadekvatnog pakovanja robe i oštećenja u transportu
          robe (prilikom vraćanja) do mesta reklamacije, tu odgovornost snosi
          sam kupac/potrošač.
        </p>
        <p className="group">
          Potrošač može da izjavi reklamaciju prodavcu radi ostvarivanja svojih
          prava iz čl. 52, 54. i 81. ovog zakona, kao i zbog pogrešno obračunate
          cene i drugih nedostataka.
        </p>
        <p className="group">
          Prodavac je dužan da na prodajnom mestu vidno istakne obaveštenje o
          načinu i mestu prijema reklamacija, kao i da obezbedi prisustvo lica
          ovlašćenog za prijem reklamacija u toku radnog vremena.'
        </p>
        <p className="group">
          Potrošač može da izjavi reklamaciju usmeno na prodajnom mestu gde je
          roba kupljena, odnosno drugom mestu koje je određeno za prijem
          reklamacija, telefonom, pisanim putem, elektronskim putem, odnosno na
          trajnom nosaču zapisa, uz dostavu računa na uvid ili drugog dokaza o
          kupovini (kopija računa, slip i sl.)
        </p>
        <p className="group">
          Prodavac je dužan da vodi evidenciju primljenih reklamacija i da je
          čuva najmanje dve godine od dana podnošenja reklamacija potrošača.
        </p>
        <p className="group">
          Prodavac je dužan da potrošaču izda pisanu potvrdu ili elektronskim
          putem potvrdi prijem reklamacije, odnosno saopšti broj pod kojim je
          zavedena njegova reklamacija u evidenciji primljenih reklamacija.
        </p>
        <p className="group">
          Evidencija o primljenim reklamacijama vodi se u obliku ukoričene
          knjige ili u elektronskom obliku i sadrži naročito podatke o
          podnosiocu i datumu prijema reklamacije, podatke o robi, kratkom opisu
          nesaobraznosti i zahtevu iz reklamacije, datumu izdavanja potvrde o
          prijemu reklamacije, odluci o odgovoru kupcu, datumu dostavljanja te
          odluke, ugovorenom primerenom roku za rešavanje na koji se saglasio
          potrošač, načinu i datumu rešavanja reklamacije, kao i informacije o
          produžavanju roka za rešavanje reklamacije.
        </p>
        <p className="group">
          Prodavac je dužan da bez odlaganja, a najkasnije u roku od osam dana
          od dana prijema reklamacije, pisanim ili elektronskim putem odgovori
          potrošaču na izjavljenu reklamaciju. Odgovor prodavca na reklamaciju
          potrošača mora da sadrži odluku da li prihvata reklamaciju,
          izjašnjenje o zahtevu potrošača i konkretan predlog i rok za rešavanje
          reklamacije. Rok ne može da bude duži od 15 dana, odnosno 30 dana za
          tehničku robu i nameštaj, od dana podnošenja reklamacije.
        </p>
        <p className="group">
          Prodavac je dužan da postupi u skladu sa odlukom, predlogom i rokom za
          rešavanje reklamacije, ukoliko je dobio prethodnu saglasnost
          potrošača.
        </p>
        <p className="group">
          Ukoliko prodavac iz objektivnih razloga nije u mogućnosti da udovolji
          zahtevu potrošača u roku koji je dogovoren, dužan je da o produžavanju
          roka za rešavanje reklamacije obavesti potrošača i navede rok u kome
          će je rešiti, kao i da dobije njegovu saglasnost, što je u obavezi da
          evidentira u evidenciji primljenih reklamacija. Produžavanje roka za
          rešavanje reklamacija moguće je samo jednom.
        </p>
        <p className="group">
          Prodavac je dužan da isporuči robu koja je saobrazna ugovoru (Član 50.
          stav 1. Zakona o zaštiti potrošača). Pretpostavlja se da je isporučena
          roba saobrazna ugovoru ako odgovara opisu koji je dao prodavac i ako
          ima svojstva robe koju je prodavac pokazao potrošaču kao uzorak ili
          model.
        </p>
        <p className="group">
          Prodavac odgovara za nesaobraznosti isporučene robe (Član 51. stav 1.
          Zakona o zaštiti potrošača) ako je postojala u času prelaska rizika na
          potrošača, bez obzira na to da li je za tu nesaobraznost prodavac
          znao.
        </p>
        <p className="group">
          Prodavac je odgovoran i za nesaobraznost nastalu zbog nepravilnog
          pakovanja, nepravilne instalacije ili montaže koju je izvršio on ili
          lice pod njegovim nadzorom, kao i kada je nepravilna instalacija ili
          montaža robe posledica nedostatka u uputstvu koje je predao potrošaču
          radi samostalne instalacije ili montaže.
        </p>
        <p className="group">
          Prodavac ne odgovara za nesaobraznost ako je u trenutku zaključenja
          ugovora potrošaču bilo poznato ili mu nije moglo ostati nepoznato da
          roba nije saobrazna ugovoru ili ako je uzrok nesaobraznosti u
          materijalu koji je dao potrošač.
        </p>
        <p className="group">
          Prodavac je odgovoran za nesaobraznost robe koja se pojavi u roku od
          dve godine od dana prelaska rizika na potrošača (Član 53. stav 1.
          Zakona o zaštiti potrošača). Ako nesaobraznost nastane u roku od šest
          meseci od dana prelaska rizika na potrošača, pretpostavlja se da je
          nesaobraznost postojala u trenutku prelaska rizika, osim ako je to u
          suprotnosti sa prirodom robe i prirodom određene nesaobraznosti.
        </p>
        <p className="group">
          Nemogućnost potrošača da dostavi prodavcu ambalažu robe ne može biti
          uslov za rešavanje reklamacije niti razlog za odbijanje otklanjanja
          nesaobraznosti.
        </p>

        <h2>6. DOSTAVA</h2>

        <p className="group">
          Dostava naručenih Proizvoda/Usluga putem Web shop-a vrši se na adresu
          Korisnika koju je Korisnik naveo prilikom prijavljivanja. Dostava je
          moguća isključivo na teritoriji Republike Srbije.
        </p>
        <p className="group">
          Po evidentiranju naručenih Proizvoda/Usluga, vrši se provera podataka
          za koje trgovac (<b>DigiTown d.o.o.</b> ) smatra da su potrebni,
          poštujući pozitivnopravne propise, i to putem provere kroz bazu
          podataka ovlašćenih službi <b>DigiTown d.o.o.</b> ili pozivanjem
          Korisnika, a sve u cilju provere ispunjenosti uslova za izvršenje
          kupovine. Po izvršenoj proveri podataka i evidentiranju porudžbine,{' '}
          <b>DigiTown d.o.o.</b> dostavlja Korisniku potvrdu o mogućnosti
          kupovine Proizvoda/Usluga, nakon čega se naručeni Proizvod/Usluga
          isporučuje Korisniku u roku od dva radna dana.
        </p>
        <p className="group">
          <b>DigiTown d.o.o.</b> će kontaktirati Korisnika na dostavljeni
          kontakt telefon i/ili e-mail adresu, proveriti tačnost adrese na koju
          je pokušana isporuka i ponoviti postupak isporuke.
        </p>
        <p className="group">
          Ukoliko Vam je pošiljka stigla oštećena, neophodno je da u roku od 24
          sata kontaktirate kurirsku službu koja je isporučila paket, kako bi
          napravili zapisnik.
        </p>
        <p className="group">
          Ukoliko je roba stigla neoštećena, ali je neispravna, kontaktirajte
          naš servis kako bismo utvrdili dalje korake u rešavanju problema
        </p>
      </div>
    </div>
  </>
);

export default TermsOfConditionsPage;
