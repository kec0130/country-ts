import { Country } from "../types/country";
import CountryCard from "./CountryCard";

interface CountryListProps {
  title: string;
  countries: Country[];
  handleCountryClick: (country: Country) => void;
}

const CountryList = ({ title, countries, handleCountryClick }: CountryListProps) => {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {countries.map((country) => (
          <CountryCard key={country.name.common} country={country} handleCountryClick={handleCountryClick} />
        ))}
      </ul>
    </>
  );
};

export default CountryList;
