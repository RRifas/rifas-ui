import { Layout, theme } from "antd";

const { Content } = Layout;

export const MainContent = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Content style={{ margin: "24px 16px 0" }}>
      <div
        style={{
          padding: 24,
          minHeight: 360,
          background: colorBgContainer,
        }}
      >
        Welcome to Rifas
      </div>
    </Content>
  );
};
