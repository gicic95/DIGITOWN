import Image from 'next/image';
import Link from 'next/link';

import { CardsIcon } from 'public/assets/icons/Cards';
import { FacebookIcon } from 'public/assets/icons/Facebook';
import { InstagramIcon } from 'public/assets/icons/Instagram';
import { TwitterIcon } from 'public/assets/icons/Twitter';
import LogoImage from 'public/assets/images/Logo.png';
import { Newsletter } from './Newsletter';
import useWindowSize from 'hooks/useWindowSIze';

export const Footer = () => {
  const isMobile = useWindowSize();

  return (
    <footer>
      <div className="footerContainer">
        <div className="left">
          {/* {isMobile && <Newsletter />} */}
          <div className="logo">
            <Image
              src={LogoImage}
              alt="Digi Town"
              priority
              fill
              sizes="(max-width: 1500px) 200px, 240px"
            />
          </div>
          <h3>Digi Town</h3>
          <p>
            Web Shop Digi Town je online prodavnica koja se bavi prodajom
            računara, računarske opreme, mobilnih telefona, bele tehnike, malih
            kućnih aparata i drugih proizvoda. Sedište firme je u Novom Pazaru,
            Srbija, ali zahvaljujući svom online prisustvu, kupci iz cele zemlje
            mogu da kupuju proizvode koji se nalaze u ponudi.
          </p>
          <h3>PRATITE NAS NA DRUŠTVENIM MREŽAMA</h3>
          <div className="socials">
            <Link
              target="blank"
              href="https://www.facebook.com/mobiletown2013?mibextid=ZbWKwL"
            >
              <FacebookIcon fill="black" />
            </Link>
            <Link
              target="blank"
              href="https://instagram.com/digitown.rs?igshid=ZDdkNTZiNTM="
            >
              <InstagramIcon fill="black" />
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="top">
            <Newsletter />
            <div className="middle">
              <div className="middleLeft">
                {isMobile && (
                  <div className="logoMobile">
                    <Image
                      src={LogoImage}
                      alt="Digi Town"
                      priority
                      height={70}
                      width={120}
                      //sizes="(max-width: 1500px) 200px, 240px"
                    />
                    <p>
                      Web Shop Digi Town je online prodavnica koja se bavi
                      prodajom računara, računarske opreme, mobilnih telefona,
                      bele tehnike, malih kućnih aparata i drugih proizvoda.
                      Sedište firme je u Novom Pazaru, Srbija, ali zahvaljujući
                      svom online prisustvu, kupci iz cele zemlje mogu da kupuju
                      proizvode koji se nalaze u ponudi.
                    </p>
                  </div>
                )}

                <div className="links">
                  {links.map((group) => (
                    <div key={group.id} className="column">
                      <Link className="showAlways" href={group.href}>
                        <h2>{group.title}</h2>
                      </Link>
                      {group.links.map((link, index) => (
                        <Link key={index} href={link.href}>
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="middleText">
                  <p>
                    Na sajtu su prikazane cene za proizvode u dinarima,
                    uključujući i porez. Plaćanje se takođe vrši samo u
                    dinarima. Prikazujemo slike i cene proizvoda što preciznije
                    možemo, ali nismo u mogućnosti da garantujemo da su sve
                    informacije tačne i bez grešaka. Svi artikli koji se nalaze
                    na sajtu predstavljaju deo naše ponude, ali to ne znači da
                    su svi artikli uvek dostupni.
                  </p>
                </div>
              </div>

              <div className="middleRight">
                <h2>Kontaktirajte nas</h2>
                <p>Telefon:</p>
                <a href="tel:+381 63 115 1 115">+381 63 115 1 115</a>
                <p>Email:</p>
                <a href="mailto: office@digitown.rs">office@digitown.rs</a>
                <p>Adresa: </p>
                <p className="bold">
                  Novi Pazar 36300, <br /> Stevana Nemanje 44
                </p>
                <p>Radno vreme:</p>
                <p className="bold">
                  Svim radnim danima <br />
                  od 08 do 20h
                </p>
                {isMobile && (
                  <div className="socialsMobile">
                    <h3>PRATITE NAS NA DRUŠTVENIM MREŽAMA</h3>
                    <div className="socials">
                      <Link
                        target="blank"
                        href="https://www.facebook.com/mobiletown2013?mibextid=ZbWKwL"
                      >
                        <FacebookIcon fill="white" />
                      </Link>
                      <Link
                        target="blank"
                        href="https://instagram.com/digitown.rs?igshid=ZDdkNTZiNTM="
                      >
                        <InstagramIcon fill="white" />
                      </Link>
                    </div>{' '}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="bottomContainer">
          <div className="left">
            <p>
              COPYRIGHT © 2023 DIGITOWN POWERED BY{' '}
              <a target="_blank" href="https://jakovsmartsolutions.com/">
                JAKOV SMART SOLUTIONS
              </a>
            </p>
          </div>
          <div className="right">
            <CardsIcon />
          </div>
        </div>
      </div>
    </footer>
  );
};

const links = [
  {
    id: 1,
    title: 'Podrška',
    href: '/kontakt',
    links: [
      { href: '/nacin-placanja', label: 'Način plaćanja i isporuke' },
      { href: '/reklamacije', label: 'Reklamacije i povrati' },
      { href: '/najcesca-pitanja', label: 'Najčešća pitanja' },
    ],
  },
  {
    id: 2,
    title: 'Uslovi korišćenja',
    href: '/terms-of-conditions',
    links: [
      { href: '/terms-of-conditions', label: 'Uslovi korišćenja sajta' },
      { href: '/terms-of-conditions', label: 'Prava potrošača' },
      { href: '/privacy-policy', label: 'Politika privatnosti' },
    ],
  },
  {
    id: 3,
    title: 'DIGI TOWN',
    href: '/o-nama',
    links: [
      { href: '/o-nama', label: 'O nama' },
      { href: '/akcije', label: 'Akcije i katalozi' },
      { href: '/novosti', label: 'Novosti' },
      { href: '/kontakt', label: 'Kontakt' },
    ],
  },
];
