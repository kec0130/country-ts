import { Country } from "../types/country";

interface CountryCardProps {
  country: Country;
  handleCountryClick: (country: Country) => void;
}

const CountryCard = ({ country, handleCountryClick }: CountryCardProps) => {
  return (
    <li>
      <button onClick={() => handleCountryClick(country)}>
        <img src={country.flags.png} />
        <h2>{country.name.common}</h2>
        <p>{country.capital}</p>
      </button>
    </li>
  );
};

export default CountryCard;
