import getWeatherStatus from "@/app/lib/getWeatherStatus";
import DynamicWeather from "./components/dynamicWeather/DynamicWeather";
import WeekSection from "./components/weekSection/WeekSection";
import TodaySection from "./components/todaySection/TodaySection";

export default async function WeatherPage({ params }) {
  const slug = params.slug[0].replaceAll("%2B", "+").replaceAll("%2C", ",");
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

export async function generateMetadata({ params }) {
  const slug = params.slug[0]
    .replaceAll("%2B", " ")
    .replaceAll("%20", " ")
    .replaceAll("%2C", ", ");
  return {
    title: `Weather Status for ${slug} | Next Weather App`,
    description:
      "Weather status for the next 24 hours, and the next 5 days forcast.",
  };
}
