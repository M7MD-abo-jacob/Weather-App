'use server';

import axios from 'axios';
import filterSearchResults from '../filterSearchResults';

export default async function getCitiesResults(searchValue: string) {
  const resultsLimit = 5;
  const resultsType = 'city';
  const apiKey = process.env.CITIES_KEY;

  try {
    const resss = await axios.get(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${searchValue}&lang=en&limit=${resultsLimit}&type=${resultsType}&format=json&apiKey=${apiKey}`,
    );
    return resss?.data?.results?.length > 0
      ? filterSearchResults(resss.data.results)
      : null;
  } catch (error) {
    throw error;
  }
}
