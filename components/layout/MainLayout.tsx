import React from "react";
import { Layout } from "antd";
import { MainHeader } from "./MainHeader";
import { Sidebar } from "./Sidebar";
import { MainFooter } from "./MainFooter";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout style={{ height: "100vh" }}>
      <MainHeader />
      <Layout>
        <Sidebar />
        <Layout style={{ overflow: "auto" }}>{children}</Layout>
      </Layout>
    </Layout>
  );
};
