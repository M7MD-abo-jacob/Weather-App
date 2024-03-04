import DynamicWeather from '@/components/city/dynamicWeather/DynamicWeather';
import TodaySection from '@/components/city/todaySection/TodaySection';
import WeekSection from '@/components/city/weekSection/WeekSection';
import getWeatherStatus from '@/lib/api/getWeatherStatus';

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
  const slug = params.slug
    .replaceAll('%2B', ' ')
    .replaceAll('%20', ' ')
    .replaceAll('%2C', ', ');
  return {
    title: `Weather Status for ${slug}`,
    description: `${slug} Weather. Check hourly forecasts, wind status, and more for weather conditions.`,
    keywords: [
      slug,
      `${slug} Weather`,
      `${slug} Forecast`,
      `${slug} Temperature`,

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
