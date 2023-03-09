import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { InferGetServerSidePropsType } from "next";
import Head from "next/head";

// components
import Signup from "@/components/signup/Signup";

// change this
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

const SignupPage: NextPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(data);
  return (
    <>
      <Head>
        <title>Virtual Fair - Sign Up</title>
      </Head>
      <Signup />
    </>
  );
};

export default SignupPage;
