import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import { Nunito_Sans } from "@next/font/google";

const nunito_sans = Nunito_Sans({
  weight: ["300", "600", "800"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main
        className={`${nunito_sans.className} mx-auto min-h-screen scroll-smooth`}
      >
        <Component {...pageProps} />
      </main>
    </>
  );
}
