import styled from "styled-components";

export const Container = styled.header`
    width: min(130rem, 90%);
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 2rem 0;
    a {
        width: 20rem;
        img {
            max-width: 100%;
            width: auto;
        }
    }

    form {
        max-width: 27rem;

        display: flex;
        border-radius: 0.3rem;
        overflow: hidden;
        input {
            flex: 1;
            padding: 0 1rem;
            background-color: var(--blueLight);
            color: var(--text-white);
            &::placeholder {
                color: var(--text-white);
            }
        }
        button {
            width: 5rem;
            height: 5rem;
            font-size: 0;
            background-color: var(--blueLight);
        }
    }
    @media (max-width: 580px) {
        flex-direction: column;
        justify-content: center;
    }
`;
