import { SWRConfig } from "swr";
import Pokemon from "../components/Pokemon";
import { getPoke } from "./api";

export async function getServerSideProps(ctx) {
  const data = await getPoke(0);
  return {
    props: {
      fallback: {
        "/pokemon?offset=0": data,
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
