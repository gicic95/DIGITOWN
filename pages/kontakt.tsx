import Image from 'next/image';
import { Field, Form, Formik } from 'formik';

import LogoImage from 'public/assets/images/Logo.png';
import { useMutation } from 'react-query';
import { contactUs } from 'api/contact';
import { ContactUsPayload } from 'api/contact/types';
import { Breadcrumb } from 'components/shared/Breadcrumb';
import { UploadIcon } from 'public/assets/icons/Upload';
import { NextSeo } from 'next-seo';
import { seoData } from 'seo/seo.data';
// import { NextSeo } from 'next-seo';
// import { seoData } from 'seo/seo.data';

const initialValues: ContactUsPayload = {
  email: '',
  message: '',
  ticketType: '',
};

const ContactPage = () => {
  const { mutate, isLoading } = useMutation(contactUs);

  const onSubmit = (values: ContactUsPayload, { resetForm }: any) =>
    mutate(values, { onSuccess: resetForm });

  return (
    <>
      <NextSeo
        title={seoData.contactPage.title}
        description={seoData.contactPage.description}
      />
      <Breadcrumb name="Kontakt" />
      <div className="contactPage">
        <div className="container">
          <h1>Kontakt</h1>
          <div className="banner">
            <Image src={LogoImage} alt="Digi Town" width={386} height={210} />
          </div>
          <div className="holder">
            <div className="left">
              <h2>Korisnička podrška</h2>
              <p>
                Call Centar podrška Digi Towna čini tim stručnjaka koji je
                osposobljen da odgovori na sva pitanja korisnika i reši sve
                probleme koji se tiču usluga koje Digi Town nudi. Korisnici mogu
                dobiti podršku pozivom na broj +381 63 115 1 115, ili putem mail
                office@digitown.rs radnim danima : 08 h. do 20 h.
              </p>
              {/* <div className="support">
                <h2>Pitajte podršku</h2>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book
                </p>
              </div> */}

              <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form>
                  <h2>Pitajte podršku</h2>
                  <p>
                    Naši stručnjaci u Call Centru će odgovoriti na sva pitanja i
                    pomoći korisnicima u rešavanju problema u najkraćem mogućem
                    roku. Digi Town je posvećen pružanju vrhunske podrške svojim
                    korisnicima, tako da korisnici mogu biti sigurni da će
                    dobiti brzu i efikasnu podršku od stručnog tima koji je
                    uvijek spreman pomoći.
                  </p>
                  <div className="field">
                    <label>* Unesite Vašu email adresu</label>
                    <Field name="email" type="email" required />
                  </div>
                  <div className="field">
                    <label>* Izaberite vrstu upita</label>
                    <Field name="ticketType" as="select" required>
                      <option value="" disabled selected>
                        Vrsta upita
                      </option>
                      <option value="provera">Provera narudžbine</option>
                      <option value="reklamacija">Reklamacija</option>
                      <option value="povrat">Povrat</option>
                      <option value="ostalo">Ostalo</option>
                    </Field>
                  </div>
                  <div className="bottom">
                    <div className="field">
                      <label>Poruka</label>
                      <Field
                        name="message"
                        as="textarea"
                        required
                        placeholder="Poruka"
                      />
                    </div>
                    <div className="field">
                      <label>Dodavanje fajla</label>

                      <label className="fileButton" htmlFor="image">
                        <UploadIcon />
                        Privucite ili izaberite fajl
                      </label>
                      <ul>
                        <li>
                          Podržani formati fajlova: <span>PDF, PNG, JPG</span>{' '}
                        </li>
                        <li>
                          Maksimalna veličina fajla: <span> 25MB</span>
                        </li>
                      </ul>

                      <Field id="image" name="image" type="file" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={isLoading}
                  >
                    Pošaljite poruku
                  </button>
                </Form>
              </Formik>
            </div>
            <div className="right">
              <div className="top">
                <h4>Adresa</h4>
                <p>Novi Pazar, Stevana Nemanje 44</p>
                <h4>Email</h4>
                <p>info@digitown.rs</p>
                <p>office@digitown.rs</p>
                <h4>Telefon</h4>
                <p>
                  <a href="tel: +381 63 115 1 115">+381 63 115 1 115</a>
                </p>
              </div>

              <div className="openHours">
                <h4>Radno vreme</h4>
                <p>Svim radnim danima od 08h do 20h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
