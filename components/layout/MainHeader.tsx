import { Layout, Typography } from "antd";
import Link from "next/link";

const { Header } = Layout;

export const MainHeader = () => (
  <Header style={{ margin: "auto 0" }}>
    <Link href="/">
      <Typography.Title
        type="warning"
        level={1}
        style={{
          height: "100%",
          margin: 0,
          display: "flex",
          alignItems: "center",
        }}
      >
        Rifas
      </Typography.Title>
    </Link>
  </Header>
);
