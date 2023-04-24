import axios from "axios";

export default async function getCitiesList(searchValue) {
  const response = await axios.get(
    `https://api.teleport.org/api/cities/?search=${searchValue}&limit=5`
  );

  return response ? filter(response) : null;
}

function filter(response) {
  return response.data._embedded["city:search-results"].map((city) => {
    // splits and rejoins
    const cityFullValue = city.matching_full_name.split(", ");
    let x = cityFullValue[cityFullValue.length - 1];
    if (x[x.length - 1] === ")") {
      cityFullValue.pop();
    }
    cityFullValue[0].replaceAll(/ /g, "+");
    const cityFullLabel = city.matching_full_name.split(", ");
    const cityLabel = `${cityFullLabel[0]}, ${
      cityFullLabel[cityFullLabel.length - 1]
    }`;
    const cityValue = `${cityFullValue[0].replaceAll(
      / /g,
      "+"
    )},${cityFullValue[cityFullValue.length - 1].replaceAll(/ /g, "+")}`;

    return {
      // label for human reding, value for api call
      value: `${cityValue}`,
      label: `${cityLabel}`,
    };
  });
}
