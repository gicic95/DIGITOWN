import { LocalBusinessJsonLd } from 'next-seo';
import storeImg from 'public/assets/images/store.jpg';

const LocalBusinessSeo = () => {
  return (
    <LocalBusinessJsonLd
      type="Store"
      id="https://digitown.rs"
      name="DigiTown"
      description=" Grad dobre tehnike | DigiTown d.o.o. | Novi Pazar"
      telephone="+381631151115"
      address={{
        streetAddress: 'Stevana Nemanje 44',
        addressLocality: 'Novi Pazar',
        postalCode: '36300',
        addressCountry: 'Srbija',
      }}
      geo={{
        latitude: '43.31845029967726',
        longitude: '21.905835290590723',
      }}
      images={[`https://digitown.rs${storeImg.src}`]}
      openingHours={[
        {
          opens: '08:00',
          closes: '20:00',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        },
        {
          opens: '09:00',
          closes: '17:00',
          dayOfWeek: 'Saturday',
        },
      ]}
    />
  );
};

export default LocalBusinessSeo;
