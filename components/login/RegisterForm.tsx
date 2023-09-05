import { useRouter } from "next/router";
import React from "react";
import { createUser } from "../../api/user";
import { User } from "../../types/user";
import { Button, Form, Input } from "antd";

export const RegisterForm = () => {
  const router = useRouter();
  const [error, setError] = React.useState(false);

  const handleFormSubmit = async (values: User) => {
    const response = await createUser(values);
    console.log(response);
    if (response === null || response.detail || response.message) {
      setError(true);
      return;
    }
    router.push("/");
  };
  console.log(error);
  return (
    <div style={{ width: "500px", margin: "0 auto" }}>
      <h1>Register</h1>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onFinish={handleFormSubmit}
      >
        <Form.Item label="First Name" name="first_name">
          <Input name="first_name" />
        </Form.Item>
        <Form.Item label="Last Name" name="last_name">
          <Input name="last_name" />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input name="email" />
        </Form.Item>
        <Form.Item label="Phone" name="phone">
          <Input name="phone" />
        </Form.Item>
        <Form.Item label="Address" name="address">
          <Input name="address" />
        </Form.Item>
        <Form.Item label="Gender" name="gender">
          <Input name="gender" />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input name="password" type="password" />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 4 }}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
