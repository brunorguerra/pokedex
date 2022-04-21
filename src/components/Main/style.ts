import styled from "styled-components";

export const Container = styled.main`
    width: min(120rem, 90%);
    margin: 0 auto;
    .listPokemons {
        padding: 8rem 0;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
        gap: 5rem;
        p.notFoundPokemon {
            padding: 5rem 0;
            font-size: 2rem;
            color: var(--text-gray);
        }
    }
`;
