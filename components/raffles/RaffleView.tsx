import { Card, Layout, Typography, message, Popconfirm } from "antd";
import { mockRaffles } from "../../constants/mockData";
import Image from "next/image";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import Link from "next/link";

const { Meta } = Card;
const { Title } = Typography;

export const RaffleView = ({ id }: { id: string | string[] | undefined }) => {
  if (typeof id !== "string") {
    return null;
  }
  const { title, url, product, description } = mockRaffles[id];

  const confirm = (e?: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    message.success("Deleted");
  };

  const cancel = (e?: React.MouseEvent<HTMLElement>) => {
    console.log(e);
  };

  return (
    <Layout style={{ display: "flex", alignItems: "center" }}>
      <Title level={2}>{title}</Title>
      <Card
        style={{ width: 200 }}
        cover={<Image src={url} alt={title} width={200} height={200} />}
        actions={[
          <Link key="edit" href={`/raffles/${id}/edit`}>
            <EditOutlined key="edit" />
          </Link>,
          <Popconfirm
            key="delete"
            title="Delete the task"
            description="Are you sure to delete this raffle?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <DeleteOutlined key="delete" />
          </Popconfirm>,
        ]}
      >
        <Meta title={product} description={description} />
      </Card>
    </Layout>
  );
};
