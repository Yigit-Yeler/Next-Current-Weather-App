import CurrentWeatherInfoCard from '@/components/CurrentWeatherInfoCard';
import SearchAppBar from '@/components/SearchAppBar';

export default function Home() {

  return (
    <div>
      <SearchAppBar />
      <CurrentWeatherInfoCard />
    </div>
  );
}
