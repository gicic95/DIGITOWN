import Link from 'next/link';
import { useRouter } from 'next/router';

import { Category } from 'types/categories.types';

import { isActiveClass } from 'utils/activeClass';
import { CategoriesMenu } from './CategoriesMenu';

import { HamburgerIcon } from 'public/assets/icons/Hamburger';
import { useState } from 'react';

interface Props {
  categories: Category[];
}

export const HeaderNav = ({ categories }: Props) => {
  const { asPath } = useRouter();
  const [hamurgerOpen, setHamburgerOpen] = useState(false);

  return (
    <nav>
      <div className="navContainer">
        <CategoriesMenu categories={categories} />
        <div className="links-container">
          <div className="links">
            {/* {categories.slice(0, 5).map((el) => (
            <Link
              key={el.id}
              className={isActiveClass(asPath.includes(el.slug), 'link')}
              href={`/kategorije/${el.slug}`}
            >
              {el.name}
            </Link>
          ))}
          <Link
            key={'akcije'}
            className={isActiveClass(asPath.includes('akcije'), 'link')}
            href="/akcije"
          >
            Akcije i katalozi
          </Link> */}
            <Link href="/akcije" className="link primary">
              Akcije
            </Link>
            {categories.slice(0, 5).map((el) => (
              <Link
                key={el.id}
                className={isActiveClass(asPath.includes(el.slug), 'link')}
                href={`/kategorije/${el.slug}`}
              >
                {el.name}
              </Link>
            ))}
            <Link
              className={isActiveClass(asPath.includes('o-nama'), 'link')}
              href="/o-nama"
            >
              O nama
            </Link>
            <Link
              className={isActiveClass(asPath.includes('kontakt'), 'link')}
              href="/kontakt"
            >
              Kontakt
            </Link>
            {categories.length > 5 && <div className="show-more">{`>`}</div>}
          </div>
        </div>
        <div
          className="hamburgerIcon"
          onClick={() => setHamburgerOpen(!hamurgerOpen)}
        >
          <HamburgerIcon />
          {hamurgerOpen && (
            <div className="hamburgerContent">
              <ul>
                <Link href="/o-nama">
                  <li>O nama</li>
                </Link>
                <Link href="/nacin-placanja">
                  <li>Način plaćanja i isporuke </li>
                </Link>
                <Link href="/reklamacije">
                  <li>Reklamacije i povrati</li>
                </Link>
                <Link href="/najcesca-pitanja">
                  <li>Najčešća pitanja</li>
                </Link>
                <Link href="/kontakt">
                  <li>Kontakt</li>
                </Link>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
