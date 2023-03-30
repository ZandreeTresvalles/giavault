import Login from "../../container/Login";
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getCsrfToken, getSession } from "next-auth/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Login />
    </>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
