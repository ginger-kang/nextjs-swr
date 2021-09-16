import { SWRConfig } from "swr";
import Pokemon from "../components/Pokemon";
import { getPoke } from "./api";

export async function getServerSideProps(ctx) {
  const data = await getPoke(20);
  return {
    props: {
      fallback: {
        "/api/poke": data,
      },
    },
  };
}

export default function Poke({ fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <Pokemon />
    </SWRConfig>
  );
}
