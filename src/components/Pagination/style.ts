import styled from "styled-components";

type ContainerProps = {
    resultsActive: boolean;
};

export const Container = styled.section<ContainerProps>`
    padding: 4rem 0 1rem;
    width: 100%;
    display: flex;
    column-gap: 6rem;
    row-gap: 2rem;
    flex-flow: row wrap;
    align-items: center;
    justify-content: ${(props) =>
        props.resultsActive ? "space-between" : "center"};
    h2 {
        display: ${(props) => (props.resultsActive ? "block" : "none")};
        font-size: 2rem;
    }
    .btnPagination {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        .pages {
            height: 100%;
            display: flex;
            align-items: center;
            gap: 0.4rem;
            p {
                font-size: 2rem;
                font-weight: 700;
                &.currentPage {
                    color: var(--blueLight);
                }
            }
        }
        button {
            width: 3.5rem;
            height: 3.5rem;
            border-radius: 50%;
            background-color: var(--blueLight);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0;
        }
    }
`;
