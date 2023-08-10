import Link from "next/link";
import Head from "next/head";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>FirstPost</title>
      </Head>

      <h1>FirstPost</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}
