import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import { GetServerSideProps } from "next";
import { InferGetServerSidePropsType } from "next";
import Layout from "@/components/Layout";
import Head from "next/head";

// components
import HeroSlider from "@/components/HeroSlider";
import NewsBlock from "@/components/NewsBlock";
import Employers from "@/components/Employers";
import Candidates from "@/components/Candidates";
import Statistics from "@/components/Statistics";
import PreviousFairs from "@/components/PreviousFairs";
import LogosEmployers from "@/components/LogosEmployers";
import Video from "@/components/Video";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:4000/api/v1/job`);
  const data = await res.json();
  return {
    props: { data },
  };
};

const HomePage: NextPageWithLayout = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(data);
  return (
    <>
      <Head>
        <title>Virtual Fair</title>
      </Head>
      <HeroSlider fairs={data} />
      <NewsBlock news={data} />
      <Employers />
      <Candidates />
      <Statistics />
      <PreviousFairs />
      <LogosEmployers />
      <Video />
    </>
  );
};

// define the layout per page
HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default HomePage;
