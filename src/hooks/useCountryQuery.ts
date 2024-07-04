import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../api/country";

const useCountryQuery = () => {
  return useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
  });
};

export default useCountryQuery;
