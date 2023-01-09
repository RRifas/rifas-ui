import { DollarOutlined, PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, DatePicker, InputNumber, Upload } from "antd";

const { TextArea } = Input;

export const EditForm = () => {
  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
      >
        <Form.Item label="Title" name="title">
          <Input name="title" />
        </Form.Item>
        <Form.Item label="Product" name="product">
          <Input name="product" />
        </Form.Item>
        <Form.Item label="Price" name="price">
          <InputNumber min="1" prefix={<DollarOutlined />} />
        </Form.Item>
        <Form.Item label="Description" name="description">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Upload" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label="End Date">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Tickets" name="tickets">
          <InputNumber min="0" />
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
