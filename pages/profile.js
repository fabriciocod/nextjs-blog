import Image from "next/image";
import Head from "next/head";

export default function Profile() {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>

      <Image src="/images/profile.jpg" height={200} width={200} alt="Profile" />
    </>
  );
}
