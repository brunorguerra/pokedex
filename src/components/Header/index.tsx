import { Container } from "./style";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";
import { FormEvent, useContext, useRef } from "react";
import { PokedexContext } from "../../contexts/PokedexContext";

export const Header = ({ searchActive }: { searchActive: boolean }) => {
    const { findPokemon } = useContext(PokedexContext);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        findPokemon(inputRef.current?.value);
    };

    return (
        <Container>
            <Link href="/pokemon">
                <a>
                    <img
                        src="/pokemon.svg"
                        alt="Logo Pokemon"
                        title="Pokédex Pokemon"
                    />
                </a>
            </Link>

            {searchActive && (
                <form action="" method="GET">
                    <input
                        ref={inputRef}
                        type="text"
                        name="pokemon"
                        placeholder="Buscar Pokemon"
                    />
                    <button type="submit" onClick={(e) => handleSubmit(e)}>
                        <BiSearch size={30} color="#fff" />
                    </button>
                </form>
            )}
        </Container>
    );
};
