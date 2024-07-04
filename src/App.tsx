import { useState } from "react";
import { Country } from "./types/country";
import CountryList from "./components/CountryList";
import useCountryQuery from "./hooks/useCountryQuery";
import "./App.css";

function App() {
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);
  const { data: countries = [], isPending, error } = useCountryQuery();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const isSelected = (country: Country) => {
    return !!selectedCountries.find(
      (selectedCountry) => selectedCountry.name.common === country.name.common,
    );
  };

  const selectCountry = (country: Country) => {
    setSelectedCountries((prev) => [...prev, country]);
  };

  const deselectCountry = (country: Country) => {
    setSelectedCountries(
      selectedCountries.filter(
        (selectedCountry) => selectedCountry.name.common !== country.name.common,
      ),
    );
  };

  const handleCountryClick = (country: Country) => {
    isSelected(country) ? deselectCountry(country) : selectCountry(country);
  };

  const filteredCountries = countries.filter((country) => !isSelected(country));

  return (
    <>
      <CountryList
        title="선택된 나라 목록"
        countries={selectedCountries}
        handleCountryClick={handleCountryClick}
      />
      <CountryList
        title="전체 나라 목록"
        countries={filteredCountries}
        handleCountryClick={handleCountryClick}
      />
    </>
  );
}

export default App;
