import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Card, Image, Popconfirm, message } from "antd";
import Link from "next/link";
import { Raffle } from "../../types/raffle";
import { defaultImageUrl } from "../../constants/raffle";
import { deleteRaffle } from "../../api/raffle";

export const RaffleCard = ({
  raffle,
  onDelete,
}: {
  raffle: Raffle;
  onDelete: (id: string) => void;
}) => {
  const { id, name, description, url } = raffle;
  const imageUrl = url || defaultImageUrl;
  const confirm = async (e?: React.MouseEvent<HTMLElement>) => {
    try {
      await deleteRaffle(id);
      onDelete(id);
    } catch (e) {
      message.error("Unable to delete raffle");
    }
  };

  return (
    <Card
      style={{ width: 200 }}
      cover={<Image src={imageUrl} alt={name} width={200} height={200} />}
      actions={[
        <Link key="edit" href={`/raffles/${id}/edit`}>
          <EditOutlined key="edit" />
        </Link>,
        <Popconfirm
          key="delete"
          title="Delete the task"
          description="Are you sure to delete this raffle?"
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
        >
          <DeleteOutlined key="delete" />
        </Popconfirm>,
      ]}
    >
      <Card.Meta title={name} description={description} />
    </Card>
  );
};
