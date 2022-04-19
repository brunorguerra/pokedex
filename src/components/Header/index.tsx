import { Container } from "./style";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";

export const Header = () => {
    return (
        <Container>
            <Link href="/">
                <a>
                    <img
                        src="/pokemon.svg"
                        alt="Logo Pokemon"
                        title="Pokédex Pokemon"
                    />
                </a>
            </Link>

            <form action="" method="GET">
                <input
                    type="text"
                    name="pokemon"
                    placeholder="Buscar Pokemon"
                />
                <button type="submit">
                    <BiSearch size={30} color="#fff" />
                </button>
            </form>
        </Container>
    );
};
