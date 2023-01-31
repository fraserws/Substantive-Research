import { type NextPage } from "next";
import Head from "next/head";
import PieChartStats from "../components/PieChartStats";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex   flex-row">
        <Sidebar />
        <PieChartStats />
        <Table />
      </main>
    </>
  );
};

export default Home;
