import { ArrowLeftOutlined } from "@ant-design/icons";
import { Col, Layout, Row, Typography } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { EditForm } from "../../../components/form/EditForm";

const { Title } = Typography;

export default function Edit() {
  const router = useRouter();
  const { raffleId } = router.query;
  return (
    <Layout style={{ padding: "1rem" }}>
      <Link href={`/raffles/${raffleId}`}>
        <ArrowLeftOutlined /> Back
      </Link>
      <Row>
        <Col span={18} push={4}>
          <Title level={2}>Edit Raffle</Title>
        </Col>
      </Row>
      <EditForm />
    </Layout>
  );
}
