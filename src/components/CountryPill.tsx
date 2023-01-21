import { fetcher } from "@/util/helpers";
import useSWR from "swr";
import Link from "next/link";

interface CountryPillProps {
  countryCode: string;
}

const CountryPill = ({ countryCode }: CountryPillProps) => {
  const { data, error, isLoading } = useSWR(
    `https://restcountries.com/v3.1/alpha/${countryCode}`,
    fetcher
  );
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>No border countries</p>;
  return (
    <Link href={`/${data[0].name.common}`}>
      <p>{data && data[0].name.common}</p>
    </Link>
  );
};

export default CountryPill;
