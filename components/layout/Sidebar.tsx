import React from "react";
import useSWR from "swr";
import { Layout, Menu } from "antd";
import { GiftOutlined, PlusOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import Link from "next/link";
import { Raffle } from "../../types/raffle";
import { fetcher } from "../../utils/fetcher";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const defaultOpenKeys = ["raffles"];

const Loader = () => (
  <div style={{ width: "200px", height: "100%", backgroundColor: "#001529" }} />
);

export const Sidebar = () => {
  const { data } = useSWR<Raffle[]>(
    process.env.NEXT_PUBLIC_SERVER_URL,
    fetcher
  );

  if (!data) return <Loader />;

  const items = [
    getItem(
      <Link href="/raffles/create">New Raffle</Link>,
      "0",
      <PlusOutlined />
    ),
    getItem(
      "Raffles",
      "raffles",
      <GiftOutlined />,
      data.map(({ id, name }) =>
        getItem(<Link href={`/raffles/${id}`}>{name}</Link>, id)
      ) || []
    ),
  ];
  return (
    <Sider
      theme="dark"
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      style={{ position: "relative" }}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultOpenKeys={defaultOpenKeys}
        items={items}
      />
    </Sider>
  );
};
