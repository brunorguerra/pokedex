import Head from "next/head";
import { Header } from "../../components/Header";
import { GlobalStyle } from "../../styles/Global";
import Container from "./style";

type PokemonInfoProps = {
    pokemon: {
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
                home: {
                    front_default: string;
                };
            };
        };
        stats: [
            {
                base_stat: number;
                stat: { name: string };
            }
        ];
        types: [
            {
                type: {
                    name: string;
                };
            }
        ];
    };
};
type AbilitiesProps = {
    ability: {
        name: string;
    };
};

const Pokemon = ({ pokemon }: PokemonInfoProps) => {
    return (
        <>
            <GlobalStyle />
            <Head>
                <title>Pokédex Info</title>
            </Head>
            <Header searchActive={false} />
            <Container>
                <div className="content">
                    <div className="img-pokemon">
                        <p>{`N° ${pokemon.id}`}</p>
                        <img
                            src={
                                pokemon.sprites.other.dream_world
                                    .front_default ??
                                pokemon.sprites.other.home.front_default ??
                                "/pokebola.png"
                            }
                            alt=""
                        />
                    </div>

                    <div className="index">
                        <p className="namePokemon">
                            Pokémon <span>{pokemon.name}</span>
                        </p>
                        <div className="info">
                            <div className="height">
                                <h4>Height</h4>
                                <p>{`${(pokemon.height / 10).toFixed(
                                    1 ?? "??"
                                )} m`}</p>
                            </div>
                            <div className="weight">
                                <h4>Weight</h4>
                                <p>{`${(pokemon.weight / 10).toFixed(
                                    1 ?? "??"
                                )} kg`}</p>
                            </div>
                            <div className="abilities">
                                <h4>Abilities</h4>
                                {pokemon.abilities.map((ability, index) => (
                                    <p key={index}>{ability.ability.name}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="stats">
                    <div className="type">
                        <h2>Type</h2>
                        {pokemon.types.map((type, index) => (
                            <p key={index}>{type.type.name}</p>
                        ))}
                    </div>
                    <div className="stats-info">
                        {pokemon.stats.map((stat, index) => (
                            <div className="box-stats" key={index}>
                                <h4>{stat.stat.name}</h4>
                                <p>{stat.base_stat}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Pokemon;

export async function getStaticProps({ params }: { params: { name: string } }) {
    const pokemon = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${params.name}`
    )
        .then((response) => response.json())
        .then((pokemonData) => pokemonData);

    return {
        props: {
            pokemon,
        },
    };
}

export async function getStaticPaths() {
    const pokemons = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    )
        .then((response) => response.json())
        .then((responseObject) => responseObject.results)
        .then((pokemonList) =>
            pokemonList.map((pokemon: { name: string }) => {
                return {
                    params: {
                        name: pokemon.name,
                    },
                };
            })
        );

    return {
        paths: pokemons,

        fallback: false,
    };
}
