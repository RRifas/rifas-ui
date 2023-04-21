import { Layout, Typography } from "antd";
import { Raffle } from "../../types/raffle";
import { RaffleCard } from "./RaffleCard";

const { Title } = Typography;

type Props = {
  raffle: Raffle;
  id: string;
};

export const RaffleView = ({ raffle }: Props) => {
  const { name } = raffle || {};

  const handleOnDelete = (id: string) => {
    console.log("deleted");
  };

  return (
    <Layout style={{ display: "flex", alignItems: "center" }}>
      <Title level={2}>{name}</Title>
      <RaffleCard raffle={raffle} onDelete={handleOnDelete} />
    </Layout>
  );
};
