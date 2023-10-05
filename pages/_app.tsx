import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import { QueryClientProvider } from 'react-query';

import { queryClient } from 'lib/reactQuery';
import App from 'helpers/App';
import { Scripts } from 'seo/Scripts';
import { AppHead } from 'seo/Head';
import 'styles/styles.scss';
import { MyContextProvider } from 'context/MyContext';

const Root = (props: AppProps) => (
  <>
    <AppHead />
    <Scripts />
    <MyContextProvider>
      <QueryClientProvider client={queryClient}>
        <ToastContainer
          position="top-right"
          theme="light"
          autoClose={3000}
          hideProgressBar
          closeOnClick
        />
        <App {...props} />
      </QueryClientProvider>
    </MyContextProvider>
  </>
);

export default Root;
