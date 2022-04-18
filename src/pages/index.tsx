import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { PokedexProvider } from "../contexts/PokedexContext";
import { GlobalStyle } from "../styles/Global";

const Home: NextPage = () => {
    return (
        <PokedexProvider>
            <GlobalStyle />
            <Head>
                <title>Pokédex</title>
            </Head>
            <Header />
            <Main />
        </PokedexProvider>
    );
};

export default Home;
