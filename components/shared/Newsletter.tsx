import Link from 'next/link';
import { useMutation } from 'react-query';
import { Field, Form, Formik } from 'formik';

import { newsletterSubscribe } from 'api/contact';
import { NewsletterIcon } from 'public/assets/icons/Newsletter';
import { Checkbox } from 'components/ui/Checkbox';

export const Newsletter = () => {
  const { mutate } = useMutation(newsletterSubscribe);

  const onSubmit = (values: any, { resetForm }: any) => {
    if (!values.checked) return;
    mutate(values.email, { onSuccess: resetForm });
  };

  return (
    <div className="newsletter">
      <div className="left">
        <NewsletterIcon />
        <div className="text">
          <h2>Prijavite se na naš Newsletter</h2>
          <p>
            Prijavite se na naš Newsletter i ostanite u toku <br /> sa
            najnovijim proizvodima, akcijama i specijalnim ponudama.
          </p>
        </div>
      </div>
      <div className="right">
        <Formik
          initialValues={{ email: '', checked: false }}
          onSubmit={onSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <div className="row">
                <Field
                  name="email"
                  type="email"
                  placeholder="newsletter@digitown.rs"
                  required
                />
                <button type="submit" className="btn-primary">
                  Prijavi se
                </button>
              </div>
              <div className="checkboxRow">
                <Checkbox
                  isChecked={values.checked}
                  onClick={() => setFieldValue('checked', !values.checked)}
                />
                <p>
                  Prihvatam <Link href="/">Politiku privatnosti </Link>
                  radi unapređenja korisničkog iskustva.
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
