import styled from "styled-components";

export const Container = styled.a`
    width: 35rem;
    background-color: var(--blueLight);
    border-radius: 0.2rem;
    overflow: hidden;
    box-shadow: 0 0 7rem #ededed;
    transition: all 0.2s ease;
    cursor: pointer;
    .image {
        background-color: var(--background-white);
        min-width: 100%;
        height: 28rem;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        p {
            position: absolute;
            top: 2rem;
            right: 2rem;
            color: var(--blueLight);
            font-weight: 700;
        }
        img {
            max-width: 50%;
            width: auto;
            transition: all 0.2s linear;
        }
    }
    .description {
        padding: 4rem 2rem;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-between;
        column-gap: 4rem;
        row-gap: 2rem;
        p {
            text-transform: capitalize;
            &:first-of-type {
                font-size: 1.8rem;
                font-weight: 700;
                color: var(--yellow);
            }
            &:last-child {
                color: var(--text-white);
            }
        }
    }
    &:hover {
        .image {
            img {
                transform: scale(1.05);
            }
        }
        transform: translateY(-5%);
    }
`;
