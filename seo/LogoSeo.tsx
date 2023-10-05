import { LogoJsonLd } from 'next-seo';
import LogoImage from 'public/assets/images/Logo.png';

const LogoSeo = () => (
  <LogoJsonLd
    logo={`https://digitown.rs${LogoImage.src}`}
    url="https://digitown.rs"
  />
);

export default LogoSeo;
