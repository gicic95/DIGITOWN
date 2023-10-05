import Link from 'next/link';
// import { DownArrowIcon } from 'public/assets/icons/DownArrow';
// import { Home } from 'public/assets/icons/Home';

interface Props {
  name?: any;
  children?: any;
}

export const Breadcrumb = ({ name, children }: Props) => {
  return (
    <div className="container">
      <div className="breadcrumb">
        <Link href="/">Početna strana</Link>
        <span className="arrow"> {'>'} </span>
        <span>{children}</span>
        <span className="main">{name}</span>
      </div>
    </div>
  );
};
