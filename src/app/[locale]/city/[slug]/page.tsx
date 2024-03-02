import getWeatherStatus from '@/lib/getWeatherStatus';
import DynamicWeather from './components/dynamicWeather/DynamicWeather';
import WeekSection from './components/weekSection/WeekSection';
import TodaySection from './components/todaySection/TodaySection';

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
          <DynamicWeather data={res.setStatus} />
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
  // TODO: description
  return {
    title: `Weather Status for ${slug}`,
    description:
      'Weather status for the next 24 hours, and the next 5 days forcast.',
  };
}
