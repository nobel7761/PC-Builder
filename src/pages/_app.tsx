import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ReactElement } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const getLayout =
    (Component as any).getLayout || ((page: ReactElement) => page);
  return getLayout(<Component {...pageProps} />);
}
