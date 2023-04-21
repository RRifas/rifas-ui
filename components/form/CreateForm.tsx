import { DollarOutlined, PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, DatePicker, InputNumber, Upload } from "antd";
import { useRouter } from "next/router";
import { Raffle } from "../../types/raffle";
import { createRaffle } from "../../pages/api/raffle";
import React from "react";

const { TextArea } = Input;

export const CreateForm = () => {
  const router = useRouter();
  const [error, setError] = React.useState(false);

  const handleFormSubmit = async (values: Raffle) => {
    const response = await createRaffle({ ...values, imagen: "test" });
    console.log(response);
    if (response === null || response.detail) {
      setError(true);
      return;
    }
    router.push(`/raffles`);
  };
  console.log(error);
  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onFinish={handleFormSubmit}
      >
        <Form.Item label="Name" name="name">
          <Input name="name" />
        </Form.Item>
        <Form.Item label="Price" name="price">
          <InputNumber name="price" min="1" prefix={<DollarOutlined />} />
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
            Create
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
