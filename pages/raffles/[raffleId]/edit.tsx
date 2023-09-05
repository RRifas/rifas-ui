import { ArrowLeftOutlined } from "@ant-design/icons";
import { Col, Layout, Row, Typography } from "antd";
import Link from "next/link";
import { EditForm } from "../../../components/form/EditForm";
import { Raffle } from "../../../types/raffle";
import { getRaffleById } from "../../../api/raffle";

const { Title } = Typography;

export default function Edit({ data }: { data: Raffle; raffleId: string }) {
  return (
    <Layout style={{ padding: "1rem" }}>
      <Link href={`/raffles`}>
        <ArrowLeftOutlined /> Back
      </Link>
      <Row>
        <Col span={18} push={4}>
          <Title level={2}>Edit Raffle</Title>
        </Col>
      </Row>
      <EditForm raffle={data} />
    </Layout>
  );
}

export async function getServerSideProps({
  query,
}: {
  query: { raffleId: string };
}) {
  const { raffleId } = query;
  const raffle = await getRaffleById(raffleId);
  return {
    props: { data: raffle, raffleId },
  };
}
