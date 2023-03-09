import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
import { GetServerSideProps } from "next";
import { InferGetServerSidePropsType } from "next";
import Layout from "@/components/Layout";
import Head from "next/head";

// components
import HeroVideo from "@/components/HeroVideo";
import EmployersList from "@/components/EmployersList";
import Employers from "@/components/Employers";
import Candidates from "@/components/Candidates";

// check this
export const getServerSideProps: GetServerSideProps = async (context) => {
  // const res = await fetch(`http://localhost:4000/api/v1/job`);
  // const data = await res.json();
  const data = {
    test: "test",
  };
  return {
    props: { data },
  };
};

const Fairs2DPage: NextPageWithLayout = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(data);
  return (
    <>
      <Head>
        <title>Virtual Fair - Fairs 2D</title>
      </Head>
      <HeroVideo
        src={
          "https://embed-ssl.wistia.com/deliveries/262fd8e350169efeecfd5bfce33b7997f5a8fec0.bin"
        }
        className="mb-20"
      />
      <EmployersList />
      <Employers />
      <Candidates className="mb-0" />
    </>
  );
};

// define the layout per page
Fairs2DPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Fairs2DPage;
