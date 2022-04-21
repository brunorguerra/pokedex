import styled from "styled-components";

export const Container = styled.section`
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.65);
    .boxLoading {
        background-color: var(--blueLight);
        border-radius: 1rem;
        padding: 2rem;
        font-size: 0;
        .iconLoading {
            animation: loading 1s infinite linear;
        }
        @keyframes loading {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    }
`;
