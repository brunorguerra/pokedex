import { useContext } from "react";
import { PokedexContext } from "../../contexts/PokedexContext";
import { CardPokemon } from "../CardPokemon";
import { Loading } from "../Loading";
import { Pagination } from "../Pagination";
import { Container } from "./style";

export const Main = () => {
    const { pokemonList, isLoading, isNotFoundPokemon } =
        useContext(PokedexContext);

    return (
        <Container>
            <Pagination resultsActive={true} />
            <div className="listPokemons">
                {isLoading ? (
                    <Loading />
                ) : isNotFoundPokemon ? (
                    <div className="notFoundPokemon">
                        <img src="/pokemon.svg" alt="Pokemon não encontrado" />
                        <p>Pokémon Não Encontrado</p>
                    </div>
                ) : (
                    pokemonList.map((pokemon, index) => (
                        <CardPokemon
                            key={index}
                            name={pokemon.name}
                            id={pokemon.id}
                            image={
                                pokemon.sprites.other.dream_world
                                    .front_default ??
                                pokemon.sprites.other.home.front_default ??
                                "/pokebola.png"
                            }
                            type={pokemon.types[0].type.name}
                        />
                    ))
                )}
            </div>
        </Container>
    );
};
