import React from "react";
import { Raffle } from "../../types/raffle";
import { RaffleCard } from "./RaffleCard";
import { Col, Row } from "antd";

export const RaffleList = ({ data }: { data: Raffle[] }) => {
  const [raffles, setRaffles] = React.useState<Raffle[]>(data);
  const handleOnDelete = (id: string) => {
    setRaffles(raffles.filter((raffle) => raffle.id !== id));
  };
  return (
    <div style={{ padding: "30px" }}>
      <Row gutter={[16, 16]}>
        {raffles.map((raffle) => (
          <Col key={raffle.id} span={4}>
            <RaffleCard raffle={raffle} onDelete={handleOnDelete} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
