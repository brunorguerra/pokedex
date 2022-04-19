import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { GlobalStyle } from "../../styles/Global";
import { Container } from "./style";

type PokemonInfoProps = {
    id: number;
    name: string;
    height: number;
    weight: number;
    abilities: AbilitiesProps[];
    sprites: {
        other: {
            dream_world: {
                front_default: string;
            };
        };
    };
};
type AbilitiesProps = {
    ability: {
        name: string;
    };
};

const Pokemon: NextPage = () => {
    const [pokemonInfo, setPokemonInfo] = useState({} as PokemonInfoProps);

    const router = useRouter();

    useEffect(() => {
        const getInfoPokemon = async () => {
            const res = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${router.query.pokemon}`
            );
            const data = await res.json();
            setPokemonInfo(data);
            console.log(data);
        };
        getInfoPokemon();
    }, [router.query.pokemon]);

    return (
        <>
            <GlobalStyle />
            <Head>
                <title>Pokédex Info</title>
            </Head>
            <Header />
            <Container>
                <div className="content">
                    <div className="img-pokemon">
                        <p>{`N° ${pokemonInfo.id}`}</p>
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonInfo.id}.svg`}
                            alt=""
                        />
                    </div>

                    <div className="index">
                        <p className="namePokemon">
                            Pokémon <span>{pokemonInfo.name}</span>
                        </p>
                        <div className="info">
                            <div className="height">
                                <h4>Height</h4>
                                <p>{`${(pokemonInfo.height / 10).toFixed(
                                    1 ?? "??"
                                )} m`}</p>
                            </div>
                            <div className="weight">
                                <h4>Weight</h4>
                                <p>{`${(pokemonInfo.weight / 10).toFixed(
                                    1 ?? "??"
                                )} kg`}</p>
                            </div>
                            <div className="abilities">
                                <h4>Abilities</h4>
                                <p>overgrow</p>
                                <p>chlorophyll</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="stats">
                    <div className="type">
                        <h2>Type</h2>
                        <p>Grass</p>
                        <p>Poison</p>
                    </div>
                    <div className="stats-info">
                        <div className="box-stats">
                            <h4>Hp</h4>
                            <p>100</p>
                        </div>
                        <div className="box-stats">
                            <h4>Attack</h4>
                            <p>100</p>
                        </div>
                        <div className="box-stats">
                            <h4>Defense</h4>
                            <p>100</p>
                        </div>
                        <div className="box-stats">
                            <h4>Special Attack</h4>
                            <p>100</p>
                        </div>
                        <div className="box-stats">
                            <h4>Special Defense</h4>
                            <p>100</p>
                        </div>
                        <div className="box-stats">
                            <h4>Speed</h4>
                            <p>100</p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Pokemon;
