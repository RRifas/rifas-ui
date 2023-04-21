import { Layout, theme } from "antd";
import Link from "next/link";

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
        <ul>
          <li>
            <Link href="/raffles">View Raffles</Link>
          </li>
          <li>
            <Link href="/raffles/create">Create a new Raffle</Link>
          </li>
        </ul>
      </div>
    </Content>
  );
};
