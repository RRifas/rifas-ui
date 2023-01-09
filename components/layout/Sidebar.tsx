import React from "react";
import { Layout, Menu } from "antd";
import { GiftOutlined, PlusOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import Link from "next/link";
import { mockRaffles } from "../../constants/mockData";

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

const items: MenuItem[] = [
  getItem(
    <Link href="/raffles/create">New Raffle</Link>,
    "0",
    <PlusOutlined />
  ),

  getItem(
    "Raffles",
    "raffles",
    <GiftOutlined />,
    Object.values(mockRaffles).map(({ id, title }) =>
      getItem(<Link href={`/raffles/${id}`}>{title}</Link>, id)
    )
  ),
];

const defaultOpenKeys = ["raffles"];

export const Sidebar = () => (
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
