// US => "United States"
export default function getLongCountryName(shortName: string) {
  console.log('shortName', shortName);
  let regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
  return regionNames.of(shortName.toUpperCase());
}
