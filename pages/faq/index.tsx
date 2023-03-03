import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { InferGetServerSidePropsType } from "next";
import Head from "next/head";

// components
import HeroImage from "@/components/HeroImage";
import Accordion from "@/components/Accordion";

// check this
export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:4000/api/v1/job`);
  const data = await res.json();
  return {
    props: { data },
  };
};

const About: NextPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Virtual Fair - F.A.Q.</title>
      </Head>
      <HeroImage src={"/assets/faq.jpg"} className="mb-[76px]" />
      <Accordion faqs={data} />
    </>
  );
};

export default About;
