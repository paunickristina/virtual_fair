import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { InferGetServerSidePropsType } from "next";
import Head from "next/head";

// components
import CvUpload from "@/components/CvUpload";

// change this
export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:4000/api/v1/job`);
  const data = await res.json();
  return {
    props: { data },
  };
};

const CvUploadPage: NextPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Virtual Fair - CV Upload</title>
      </Head>
      <CvUpload />
    </>
  );
};

export default CvUploadPage;
