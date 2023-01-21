type CountryCardProps = {
  name: string;
  image: string;
  population: number;
  region: string;
  capital: string;
};

const CountryCard = ({
  name,
  image,
  population,
  region,
  capital,
}: CountryCardProps) => {
  return (
    <div>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>
        <span className="font-bold">Population:</span> {population}
      </p>
      <p>
        <span className="font-bold">Region:</span> {region}
      </p>
      <p>
        <span className="font-bold">Capital:</span> {capital}
      </p>
    </div>
  );
};

export default CountryCard;
