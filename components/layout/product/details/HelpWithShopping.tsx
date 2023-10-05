import Link from 'next/link';

import { InfoIcon } from 'public/assets/icons/Info';

export const HelpWithShopping = () => (
  <div className="helpWithShopping">
    <p>
      <span>Podrška:</span> Kontaktirajte nas uvek, svim radnim danima{' '}
      <span>08h</span> do <span>20h</span>.
    </p>
    <p>
      <span>Isporuka:</span> Očekivani rok isporuke je od <span>3</span> do{' '}
      <span>5 dana</span>.{' '}
    </p>
    <p>
      <span>Dostava:</span> <span>Besplata dostava</span> za porudžbine preko
      10.000 din, a težine do 20 kg.
    </p>
  </div>
);
