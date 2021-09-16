import useSWRInfinite from "swr/infinite";
import { getPoke } from "../pages/api";

const fetcher = async key => {
  const offset = key.split("=")[1];
  const data = await getPoke(offset);

  return data;
};

const getKey = (offset, previousPageData) => {
  if (previousPageData && !previousPageData.results) return null;
  return `/pokemon?offset=${offset * 20}`;
};

export default function Pokemon() {
  const { data, size, setSize } = useSWRInfinite(getKey, fetcher);

  if (!data) return <div>loading...</div>;

  return (
    <div>
      <ul>
        {data.map(page =>
          page.results.map(poke => <li key={poke.url}>{poke.name}</li>),
        )}
      </ul>
      <button onClick={() => setSize(size + 1)}>Load More</button>
    </div>
  );
}
