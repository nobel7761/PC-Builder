import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ReactElement } from "react";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
  const getLayout =
    (Component as any).getLayout || ((page: ReactElement) => page);
  return (
    <SessionProvider session={pageProps.session}>
      {getLayout(<Component {...pageProps} />)}
    </SessionProvider>
  );
}
