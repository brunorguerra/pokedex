import { useContext } from "react";
import { PokedexContext } from "../../contexts/PokedexContext";
import { CardPokemon } from "../CardPokemon";
import { Container } from "./style";

export const Main = () => {
    const { pokemonList } = useContext(PokedexContext);

    return (
        <Container>
            {pokemonList.map((pokemon, index) => (
                <CardPokemon
                    key={index}
                    name={pokemon.name}
                    id={pokemon.id}
                    image={pokemon.sprites.other.dream_world.front_default}
                    type={pokemon.types[0].type.name}
                />
            ))}
        </Container>
    );
};
