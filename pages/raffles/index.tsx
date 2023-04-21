import { RaffleList } from "../../components/raffles/RaffleList";
import { Raffle } from "../../types/raffle";
import { getRaffles } from "../api/raffle";

type Props = {
  data: Raffle[];
};

export default function Raffles({ data }: Props) {
  return <RaffleList data={data} />;
}

export async function getServerSideProps() {
  const data = await getRaffles();
  return {
    props: { data },
  };
}
