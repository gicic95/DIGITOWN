import { EmailIcon } from 'public/assets/icons/Email';
//import { FacebookIcon } from 'public/assets/icons/Facebook';
import { PhoneIcon } from 'public/assets/icons/Phone';

export const HeaderBanner = () => (
  <div className="headerBanner">
    <div className="container">
      <div className="headerBanner__content">
        <div className="left"></div>
        <div className="right">
          <a href="mailto:office@digitown.rs">
            <EmailIcon />
            <p>Piši nam</p>
          </a>
          <a href="tel:+381 63 115 1 115">
            <PhoneIcon />
            <p>Pozovi nas</p>
          </a>
        </div>
      </div>
    </div>
  </div>
);
