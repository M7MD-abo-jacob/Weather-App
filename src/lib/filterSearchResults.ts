import { City } from '@/types';

// takes the response from the auto complete api and formats the city names
// label: to display in the UI
// value: to send to the weather api in the right format
export default function filterSearchResults(response: City[]) {
  return response.map((city: City) => ({
    label: `${city.city}, ${city.country_code}`,
    value: encodeURIComponent(`${city.city}+${city.country_code}`),
  }));
}
