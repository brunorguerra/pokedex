import { Container } from "./style";
import { BiSearch } from "react-icons/bi";

export const Header = () => {
    return (
        <Container>
            <a href="">
                <img
                    src="./pokemon.svg"
                    alt="Logo Pokemon"
                    title="Pokédex Pokemon"
                />
            </a>

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
