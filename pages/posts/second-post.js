import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function SecondPost(){
    return(
    <Layout>
        <Head>
            <title>SecondPost</title>
        </Head>

        <h1>SecondPost</h1>
        <h2><Link href="/">Back to home</Link></h2>
    </Layout>
    );
}