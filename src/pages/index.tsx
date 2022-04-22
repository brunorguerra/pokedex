import Head from "next/head";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { PokedexProvider } from "../contexts/PokedexContext";
import { GlobalStyle } from "../styles/Global";

const Home = () => {
    return (
        <PokedexProvider>
            <GlobalStyle />
            <Head>
                <title>Pokédex</title>
            </Head>
            <Header searchActive={true} />
            <Main />
        </PokedexProvider>
    );
};

export default Home;
