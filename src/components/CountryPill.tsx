import { fetcher } from "@/util/helpers";
import useSWR from "swr";

interface CountryPillProps {
  countryCode: string;
}

const CountryPill = ({ countryCode }: CountryPillProps) => {
  const { data, error } = useSWR(
    `https://restcountries.com/v3.1/alpha/${countryCode}`,
    fetcher
  );
  console.log(data);
  if (error) return <p>No border countries</p>;
  return <p>{data[0]?.name.common}</p>;
};

export default CountryPill;
