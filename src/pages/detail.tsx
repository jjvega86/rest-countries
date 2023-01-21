import Head from "next/head";
import { Nunito_Sans } from "@next/font/google";

const nunito_sans = Nunito_Sans({
  weight: ["300", "600", "800"],
  subsets: ["latin"],
});

export default function Detail() {
  return (
    <>
      <Head>
        <title>✈️ Traveler&apos;s Hub</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={nunito_sans.className}>
        <h1 className="mt-5">DETAIL</h1>
      </main>
    </>
  );
}
