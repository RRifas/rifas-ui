import { useRouter } from "next/router";
import { RaffleView } from "../../../components/raffles/RaffleView";
import { Raffle } from "../../../types/raffle";
import { getRaffleById } from "../../../api/raffle";

type Props = {
  data: Raffle;
  raffleId: string;
};

export default function RaffleById({ data, raffleId }: Props) {
  const router = useRouter();
  if (!data) {
    router.push("/");
    return null;
  }
  return <RaffleView raffle={data} id={raffleId} />;
}

export async function getServerSideProps({
  query,
}: {
  query: { raffleId: string };
}) {
  const { raffleId } = query;
  if (!raffleId) {
    return {};
  }
  const raffle = await getRaffleById(raffleId);
  return {
    props: { data: raffle, raffleId },
  };
}
