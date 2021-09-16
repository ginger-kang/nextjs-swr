import useSWR from "swr";
import { getPoke } from "../pages/api";

const fetcher = async () => {
  const data = await getPoke(20);

  return data;
};

export default function Pokemon() {
  const { data } = useSWR("/api/poke", fetcher);

  return (
    <div>
      <ul>
        {data.results.map(poke => (
          <li key={poke.url}>{poke.name}</li>
        ))}
      </ul>
    </div>
  );
}
