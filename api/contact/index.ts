import { apiCall } from 'api';
import { toast } from 'react-toastify';
import { ContactUsPayload, PriceOfferPayload } from './types';

export const newsletterSubscribe = async (email: string) => {
  const request = await apiCall();

  try {
    await request({
      url: `newsletter/subscribe`,
      method: 'POST',
      data: { email },
    });

    toast('Prijavili ste se za e-popuste!', { type: 'success' });
  } catch (error: any) {
    throw toast(error.message, { type: 'error' });
  }
};

export const contactUs = async (body: ContactUsPayload) => {
  const request = await apiCall();

  try {
    await request({ url: `contact`, method: 'POST', data: body });

    toast('Mail prosleđen, uskoro će te biti kontaktirani!', {
      type: 'success',
    });
  } catch (error: any) {
    throw toast(error.message, { type: 'error' });
  }
};

export const priceOffer = async (body: PriceOfferPayload) => {
  const request = await apiCall();

  try {
    await request({
      url: `priceoffer`,
      method: 'POST',
      data: body,
    });

    toast('Ponuda poslata', { type: 'success' });
  } catch (error: any) {
    throw toast(error.message, { type: 'error' });
  }
};
