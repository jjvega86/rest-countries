import Head from "next/head";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>✈️ Traveler&apos;s Hub</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <div className="flex items-center justify-center">
          <h1 className="font-bold text-5xl mt-5">Traveler&apos;s Hub</h1>
        </div>
      </main>
    </>
  );
}
