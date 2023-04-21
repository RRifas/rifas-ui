import { DollarOutlined, PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, DatePicker, InputNumber, Upload } from "antd";
import { useRouter } from "next/router";
import { updateRaffle } from "../../pages/api/raffle";
import { Raffle } from "../../types/raffle";

const { TextArea } = Input;

export const EditForm = ({ raffle }: { raffle: Raffle }) => {
  const router = useRouter();
  const { id, name, description, price, goal } = raffle;
  console.log(raffle);
  const handleFormSubmit = async (values: Raffle) => {
    await updateRaffle({ ...values, imagen: "", id });
    router.push(`/raffles`);
  };
  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{
          name,
          description,
          price,
          goal,
        }}
        onFinish={handleFormSubmit}
      >
        <Form.Item label="Name" name="name">
          <Input name="name" />
        </Form.Item>
        <Form.Item label="Price" name="price">
          <InputNumber min="1" prefix={<DollarOutlined />} />
        </Form.Item>
        <Form.Item label="Description" name="description">
          <TextArea rows={4} />
        </Form.Item>
        {/* <Form.Item label="Upload" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label="End Date">
          <DatePicker />
        </Form.Item> */}
        <Form.Item label="Goal" name="goal">
          <InputNumber name="goal" min="0" />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 4 }}>
          <Button type="primary" htmlType="submit">
            Edit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
