import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Sidebar from "../components/Sidebar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Sidebar />
      </main>
    </>
  );
};

export default Home;
