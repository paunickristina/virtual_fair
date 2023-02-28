import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { InferGetServerSidePropsType } from "next";
import Head from "next/head";

// components
import HeroSlider from "@/components/HeroSlider";
import NewsBlock from "@/components/NewsBlock";
import Employers from "@/components/Employers";
import Employees from "@/components/Employees";
import Statistics from "@/components/Statistics";
import PreviousFairs from "@/components/PreviousFairs";
import LogosEmployers from "@/components/LogosEmployers";
import HpVideo from "@/components/HpVideo";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:4000/api/v1/job`);
  const data = await res.json();
  return {
    props: { data },
  };
};

const Home: NextPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(data);
  return (
    <>
      <Head>
        <title>Virtual Fair</title>
      </Head>
      <HeroSlider />
      <NewsBlock news={data} />
      <Employers />
      <Employees />
      <Statistics />
      <PreviousFairs />
      <LogosEmployers />
      <HpVideo />
    </>
  );
};

export default Home;
