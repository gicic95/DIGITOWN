import { Breadcrumb } from 'components/shared/Breadcrumb';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { BulbSucces } from 'public/assets/icons/BulbSucces';
import { seoData } from 'seo/seo.data';
import IconImage from 'public/assets/images/DigiTownIcon.png';

const Thankyou = () => (
  <>
    <NextSeo
      title={seoData.thankYouPage.title}
      description={seoData.thankYouPage.description}
      noindex
      nofollow
    />
    <Breadcrumb name="Uspešna kupovina" />
    <div className="thankyouPage">
      <div className="innerContainer">
        {/* <BulbSucces className="bulbSucces" /> */}
        <div className="logo">
          <Image
            src={IconImage}
            height={396}
            width={316}
            alt="Digi Town"
          ></Image>
        </div>
        <div className="content">
          <h3>Hvala Vam!</h3>
          <p className="congrats">Čestitamo, uspešno ste izvršili kupovinu!</p>
          <p className="text">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.{' '}
          </p>
          <Link href="/" className="btn-primary">
            Nazad na početnu
          </Link>
        </div>
      </div>
    </div>
  </>
);

export default Thankyou;
