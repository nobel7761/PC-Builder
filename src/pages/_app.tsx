import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ReactElement } from "react";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function App({ Component, pageProps }: AppProps) {
  const getLayout =
    (Component as any).getLayout || ((page: ReactElement) => page);
  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        {getLayout(<Component {...pageProps} />)}
      </SessionProvider>
    </Provider>
  );
}
