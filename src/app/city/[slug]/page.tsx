import DynamicWeather from '@/components/city/dynamicWeather/DynamicWeather';
import TodaySection from '@/components/city/todaySection/TodaySection';
import WeekSection from '@/components/city/weekSection/WeekSection';
import getWeatherStatus from '@/lib/api/getWeatherStatus';
import getLongCountryName from '@/lib/getLongCountryName';

export default async function WeatherPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = decodeURIComponent(params.slug);
  const res = await getWeatherStatus(slug);

  return (
    <>
      {res && (
        <>
          <DynamicWeather data={res.status} />
          <main>
            <TodaySection
              currentWeather={res.currentWeather}
              hoursForcast={res.hoursForcast}
            />
            <WeekSection daysForcast={res.daysForcast} />
          </main>
        </>
      )}
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const slug = decodeURIComponent(params.slug);
  const longCountryName = getLongCountryName(slug.split('+')[1]);
  let newSlug = `${slug.split('+')[0]}, ${longCountryName}`;
  return {
    title: `Weather Status for ${newSlug}`,
    description: `${newSlug} Weather. Check hourly forecasts, wind status, and more for weather conditions.`,
    keywords: [
      newSlug,
      `${newSlug} Weather`,
      `${newSlug} Forecast`,
      `${newSlug} Temperature`,

      'Mohammad Kikhia',
      'محمد كيخيا',
      'Weather forecast',
      'Dynamic Weather',
      'Temperature ranges',
      'Summer weather trends',
      'Outdoor activities',
      'Weather radar',
      'rain',
      'snow',
      'sun',
      'moon',
      'clouds',
      'NextJS',
      'Syria',
      'سوريا',
      'Latakia',
      'اللاذقية',
    ],
  };
}
