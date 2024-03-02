'use server';

import axios from 'axios';
import { City } from '../../types';

export default async function getCitiesList(searchValue: string) {
  try {
    const resss = await axios.get(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${searchValue}&lang=en&limit=${5}&type=${'city'}&format=json&apiKey=${
        process.env.CITIES_KEY
      }`,
    );
    return resss?.data?.results?.length > 0 ? filter(resss.data.results) : null;
  } catch (error) {
    console.log('error', error);
  }
}

function filter(response: City[]) {
  return response.map((city: City) => {
    const result = {
      label: `${city.city}, ${city.country_code}`,
      value: encodeURIComponent(`${city.city}+${city.country_code}`),
    };
    return result;
  });
}
