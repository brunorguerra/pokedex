import { Container } from "./style";

import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useContext } from "react";
import { PokedexContext } from "../../contexts/PokedexContext";

export const Pagination = () => {
    const { pokemonList, currentPage, totalPage, backPage, forwardPage } =
        useContext(PokedexContext);

    return (
        <Container>
            <h2>Pokémons encontrados {pokemonList.length}</h2>

            {totalPage > 0 && (
                <div className="btnPagination">
                    <button onClick={backPage}>
                        <MdOutlineArrowBackIos size={20} color="#fff" />
                    </button>
                    <div className="pages">
                        <p className="currentPage">
                            {currentPage + 1} de {totalPage}
                        </p>
                    </div>
                    <button onClick={forwardPage}>
                        <MdOutlineArrowForwardIos size={20} color="#fff" />
                    </button>
                </div>
            )}
        </Container>
    );
};
