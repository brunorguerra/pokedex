import styled from "styled-components";

const Container = styled.main`
    padding: 7rem 0;
    width: min(120rem, 90%);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    .content {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        align-items: flex-start;
        justify-content: center;
        gap: 10rem;
        .img-pokemon {
            width: 40rem;
            height: 50rem;

            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            img {
                max-width: 100%;
                width: auto;
            }
            p {
                position: absolute;
                right: 2rem;
                top: 2rem;
                color: var(--blueLight);
                font-weight: 700;
            }
        }
        .index {
            padding: 2rem 4rem;
            p.namePokemon {
                display: block;
                font-size: 3rem;
                font-weight: 400;
                text-transform: capitalize;
                span {
                    font-weight: 700;
                    color: var(--blueLight);
                }
            }
            .info {
                margin-top: 2rem;
                background-color: var(--blueLight);
                padding: 3rem;
                border-radius: 1rem;
                display: flex;
                flex-flow: row wrap;
                column-gap: 6rem;
                row-gap: 4rem;
                align-items: center;
                .height,
                .weight,
                .abilities {
                    h4 {
                        color: #fff;
                        font-weight: 700;
                        font-size: 1.8rem;
                    }
                    p {
                        margin-top: 1rem;
                        color: #eee;
                        display: inline-block;
                        margin-right: 1rem;
                        text-transform: capitalize;
                    }
                }
                .abilities {
                    min-width: 100%;
                }
            }
        }
    }

    .stats {
        margin-top: 3rem;
        display: flex;
        flex-direction: column;
        gap: 5rem;
        .type {
            h2 {
                font-size: 2.8rem;
            }
            p {
                margin-top: 2rem;
                display: inline-block;
                margin-right: 1rem;
                background-color: var(--blueLight);
                color: var(--text-white);
                padding: 1rem 2rem;
                border-radius: 2rem;
                text-transform: capitalize;
            }
        }
        .stats-info {
            display: flex;
            flex-flow: row wrap;
            align-items: center;
            gap: 6rem;
            .box-stats {
                h4 {
                    font-size: 1.8rem;
                    font-weight: 700;
                    text-transform: uppercase;
                }
                border-left: 0.4rem solid #ccc;
                padding-left: 2rem;
                p {
                    color: var(--text-gray);
                    margin-top: 0.7rem;
                }
            }
        }
    }

    .moves {
        padding: 12rem 0;
        h2 {
            font-size: 2.8rem;
        }
        .content-moves {
            margin-top: 4rem;
            display: flex;
            flex-direction: column;
            gap: 3rem;
            .column {
                padding: 2rem 0;
                h3 {
                    display: block;
                    font-size: 2.2rem;
                    margin-bottom: 3rem;
                }
                .move {
                    display: inline-block;
                    margin-right: 4rem;
                    margin-bottom: 4rem;
                    padding: 1rem 0;
                    h3 {
                        font-size: 2rem;
                        color: var(--blueLight);
                        text-transform: capitalize;
                    }
                    p {
                        margin-top: 1rem;
                        font-size: 1.6rem;
                        color: var(--text-black);
                    }
                }
            }
        }
    }
`;
export default Container;
