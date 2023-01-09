import { Col, Layout, Row, Typography } from "antd";
import { CreateForm } from "../../components/form/CreateForm";

const { Title } = Typography;

export default function Create() {
  return (
    <Layout style={{ padding: "1rem" }}>
      <Row>
        <Col span={18} push={4}>
          <Title level={2}>New Raffle</Title>
        </Col>
      </Row>
      <CreateForm />
    </Layout>
  );
}
