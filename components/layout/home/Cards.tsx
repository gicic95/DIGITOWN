import Link from 'next/link';

import { BigInfoIcon } from 'public/assets/icons/BigInfo';
import { SecurityIcon } from 'public/assets/icons/Security';
import { ShippingIcon } from 'public/assets/icons/Shipping';
import { WalletIcon } from 'public/assets/icons/Wallet';

export const Cards = () => {
  return (
    <div className="cardsGroup">
      <Link href="/nacin-placanja" className="card">
        <ShippingIcon />
        <div className="text">
          <h2>Besplatna dostava</h2>
          <p>
            Besplatna dostava preko 10.000 RSD,
            <br /> a do 20 Kg težine
          </p>
        </div>
      </Link>
      <Link href="/privacy-policy" className="card">
        <BigInfoIcon />
        <div className="text">
          <h2>Oslobdjeni od poreza</h2>
          <p>
            Povracaj PDV-a za <br />
            strane kupce
          </p>
        </div>
      </Link>
      <Link href="/nacin-placanja" className="card">
        <WalletIcon />
        <div className="text">
          <h2>Call centar</h2>
          <p>
            Kontaktirajte nas uvek, svim <br />
            radnim danima 08h do 20h
          </p>
        </div>
      </Link>
      <Link href="/prava-potrosaca" className="card">
        <SecurityIcon />
        <div className="text">
          <h2>Povrat novca zagarantovan</h2>
          <p>
            Kupujte sigurno preko naseg <br />
            web portala
          </p>
        </div>
      </Link>
    </div>
  );
};
