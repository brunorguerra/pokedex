import type { NextPage } from "next";
import Head from "next/head";
import { GlobalStyle } from "../styles/Global";

const Home: NextPage = () => {
    return (
        <>
            <GlobalStyle />
            <Head>
                <title>Pokédex</title>
            </Head>
            <main></main>
        </>
    );
};

export default Home;
