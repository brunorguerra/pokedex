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
            <Pagination />
            <div className="listPokemons">
                {isLoading ? (
                    <Loading />
                ) : isNotFoundPokemon ? (
                    <p className="notFoundPokemon">Pokemon Não Encontrado</p>
                ) : (
                    pokemonList.map((pokemon, index) => (
                        <CardPokemon
                            key={index}
                            name={pokemon.name}
                            id={pokemon.id}
                            image={
                                pokemon.sprites.other.dream_world
                                    .front_default ||
                                pokemon.sprites.other.home.front_default ||
                                `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
                            }
                            type={pokemon.types[0].type.name}
                        />
                    ))
                )}
            </div>
        </Container>
    );
};
