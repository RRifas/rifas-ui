import React from "react";
import Head from "next/head";
import { MainContent } from "../components/home/MainContent";

import { Inter } from "@next/font/google";

import "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Rifas</title>
        <meta name="description" content="RRifas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style jsx global>{`
          html {
            font-family: ${inter.style.fontFamily};
          }
        `}</style>
      </Head>
      <main className={inter.className}>
        <MainContent />
      </main>
    </>
  );
}
