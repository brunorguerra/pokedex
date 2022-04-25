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
        moves: MovesProps[];
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
type MovesProps = {
    move: {
        name: string;
    };
    version_group_details: {
        level_learned_at: number;
        move_learn_method: {
            name: string;
        };
    }[];
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

                <div className="moves">
                    <h2>Moves</h2>
                    <div className="content-moves">
                        <div className="level-up column">
                            <h3>Level-UP</h3>
                            {pokemon.moves.map((move, index) => {
                                return (
                                    move.version_group_details[0]
                                        .move_learn_method.name ==
                                        "level-up" && (
                                        <div className="move" key={index}>
                                            <h3>{move.move.name}</h3>
                                            <p>
                                                Level{" "}
                                                {
                                                    move
                                                        .version_group_details[0]
                                                        .level_learned_at
                                                }
                                            </p>
                                        </div>
                                    )
                                );
                            })}
                        </div>
                        <div className="egg column">
                            <h3>Herdar do Pai</h3>
                            {pokemon.moves.map((move, index) => {
                                return (
                                    move.version_group_details[0]
                                        .move_learn_method.name == "egg" && (
                                        <div className="move" key={index}>
                                            <h3>{move.move.name}</h3>
                                            <p>Probabilidade de Herdar</p>
                                        </div>
                                    )
                                );
                            })}
                        </div>
                        <div className="tutor column">
                            <h3>Treinador Pokémon</h3>
                            {pokemon.moves.map((move, index) => {
                                return (
                                    move.version_group_details[0]
                                        .move_learn_method.name == "tutor" && (
                                        <div className="move" key={index}>
                                            <h3>{move.move.name}</h3>
                                            <p>Treinador Pokémon</p>
                                        </div>
                                    )
                                );
                            })}
                        </div>
                        <div className="machine column">
                            <h3>Máquina de TM e HM</h3>
                            {pokemon.moves.map((move, index) => {
                                return (
                                    move.version_group_details[0]
                                        .move_learn_method.name ==
                                        "machine" && (
                                        <div className="move" key={index}>
                                            <h3>{move.move.name}</h3>
                                            <p>TM ou HM</p>
                                        </div>
                                    )
                                );
                            })}
                        </div>
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
