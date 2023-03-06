import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
import { GetServerSideProps } from "next";
import { InferGetServerSidePropsType } from "next";
import Layout from "@/components/Layout";
import Head from "next/head";

// components
import HeroImage from "@/components/HeroImage";
import Employers from "@/components/about/Employers";
import Candidates from "@/components/about/Candidates";
import Video from "@/components/Video";

// check this
export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:4000/api/v1/job`);
  const data = await res.json();
  return {
    props: { data },
  };
};

const About: NextPageWithLayout = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(data);
  return (
    <>
      <Head>
        <title>Virtual Fair - About</title>
      </Head>
      <HeroImage src={"/assets/about-us.jpg"} className="mb-[122px]" />
      <Employers />
      <Candidates />
      <Video />
    </>
  );
};

// define the layout per page
About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default About;
