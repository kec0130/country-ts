import axios from "axios";
import { Country } from "../types/country";

export const getCountries = async () => {
  const response = await axios.get<Country[]>("https://restcountries.com/v3.1/all");
  return response.data;
};
