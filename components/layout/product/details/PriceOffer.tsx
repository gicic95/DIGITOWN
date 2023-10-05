import { priceOffer } from 'api/contact';
import { PriceOfferPayload } from 'api/contact/types';
import { Field, Form, Formik } from 'formik';
import { DownArrowIcon } from 'public/assets/icons/DownArrow';
import { useMutation } from 'react-query';
import { SingleProduct } from 'types/singleProduct.types';


interface Props {
  product: SingleProduct;
}

export const PriceOffer = ({ product }: Props) => {
  const initialValues: PriceOfferPayload = { email: '', price: '', product_sku: product?.sku };

  const { mutate, isLoading } = useMutation(priceOffer);

  const onSubmit = (values: any, { resetForm }: any) => {
    //if (!values.checked) return;
    mutate(values, { onSuccess: resetForm });
  };

  return (
    <div className="priceOffer">
      <p>
        Ne odgovara vam cena? <span>Upišite sami cenu</span> za koju mislite da
        je odgovarajuća, a mi ćemo se potruditi da vam što pre odgovorimo sa
        trenutno <span>najboljom ponudom</span> .{' '}
      </p>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Field name="price" type="text" required placeholder="Cena" />
          <Field name="email" type="email" required placeholder="Email" />
          <Field name="product_sku" type="hidden" />
          <button type="submit" disabled={isLoading}>
            <DownArrowIcon />
          </button>
        </Form>
      </Formik>
    </div>
  );
};
