import { useRouter } from "next/router";
import React from "react";
import { loginUser } from "../../api/user";
import { User } from "../../types/user";
import { Button, Form, Input, Layout } from "antd";

export const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = React.useState(false);

  const handleFormSubmit = async (values: User) => {
    const response = await loginUser(values);
    console.log(response);
    if (response === null || response.detail || response.message) {
      setError(true);
      return;
    }
    router.push("/");
  };
  console.log(error);
  return (
    <div style={{ width: "400px", margin: "0 auto" }}>
      <h1>Login</h1>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onFinish={handleFormSubmit}
      >
        <Form.Item label="Email" name="email">
          <Input name="email" />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input name="password" type="password" />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 4 }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
      {error && <p>Invalid credentials</p>}
    </div>
  );
};
