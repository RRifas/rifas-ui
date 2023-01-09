import { useRouter } from "next/router";
import { Typography } from "antd";
import { RaffleView } from "../../../components/raffles/RaffleView";

const { Title } = Typography;

export default function Raffle() {
  const router = useRouter();
  const { raffleId } = router.query;
  return <RaffleView id={raffleId} />;
}
