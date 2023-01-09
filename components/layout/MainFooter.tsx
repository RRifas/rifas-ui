import { Layout } from "antd";

const { Footer } = Layout;

export const MainFooter = () => (
  <Footer style={{ textAlign: "center" }}>
    Rifas ©{new Date().getFullYear()} Created by{" "}
    <a href="https://github.com/RRifas" target="_blank" rel="noreferrer">
      RRfias
    </a>
  </Footer>
);
