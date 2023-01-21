import Head from "next/head";
import CountryCard from "@/components/CountryCard";

interface Country {
  name: { common: string };
  capital: string;
  region: string;
  population: number;
  flags: { png: string };
}

export default function Home({ data }: any) {
  return (
    <>
      <Head>
        <title>✈️ Traveler&apos;s Hub</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="mx-10">
        <div className="flex justify-between mb-6">
          <p className="mt-5">TODO: INPUT FOR SEARCH HERE</p>
          <p className="mt-5">TODO: Filter by Region</p>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {data.map((country: Country) => (
            <CountryCard
              name={country.name.common}
              capital={country.capital}
              region={country.region}
              population={country.population}
              image={country.flags.png}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();

  return { props: { data } };
}
