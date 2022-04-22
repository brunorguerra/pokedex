import Link from "next/link";
import { useContext } from "react";
import { PokedexContext } from "../../contexts/PokedexContext";
import { Container } from "./style";

type PokemonProps = {
    id: number;
    name: string;
    image: string;
    type: string;
};

export const CardPokemon = ({ id, name, image, type }: PokemonProps) => {
    const { setIsLoading } = useContext(PokedexContext);

    return (
        <Link href={`/pokemon/${name}`}>
            <Container onClick={() => setIsLoading(true)}>
                <div className="image">
                    <p>N° {id}</p>
                    <img src={image} alt={`Pokémon ${name}`} />
                </div>
                <div className="description">
                    <p>{name}</p>
                    <p>{type}</p>
                </div>
            </Container>
        </Link>
    );
};
