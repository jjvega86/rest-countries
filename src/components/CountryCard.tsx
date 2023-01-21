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
    <div className="w-56 shadow-md cursor-pointer">
      <img className="w-full object-cover h-32" src={image} alt={name} />
      <div className="pb-7 px-3">
        <h2 className="font-bold text-lg my-4">{name}</h2>
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
    </div>
  );
};

export default CountryCard;
