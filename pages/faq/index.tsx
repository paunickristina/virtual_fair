import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
import { GetServerSideProps } from "next";
import { InferGetServerSidePropsType } from "next";
import Layout from "@/components/Layout";
import Head from "next/head";

// components
import HeroImage from "@/components/HeroImage";
import Accordion from "@/components/Accordion";

// check this
export const getServerSideProps: GetServerSideProps = async (context) => {
  // const res = await fetch(`http://localhost:4000/api/v1/job`);
  // const data = await res.json();
  const data = {
    "test": "test"
  }
  return {
    props: { data },
  };
};

const FaqPage: NextPageWithLayout = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(data)
  return (
    <>
      <Head>
        <title>Virtual Fair - F.A.Q.</title>
      </Head>
      <HeroImage src={"/assets/faq.jpg"} className="h-[530px] mb-[76px]" />
      {/* <Accordion faqs={data} /> */}
    </>
  );
};

// define the layout per page
FaqPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default FaqPage;
