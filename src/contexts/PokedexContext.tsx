import { createContext, useEffect, useState } from "react";
import { Api } from "../pages/api/Api";

interface PokedexContextProps {
    children: React.ReactNode;
}

type PokedexContextData = {
    pokemonList: PokemonProps[];
    setPokemonList: (state: []) => void;
    isLoading: boolean;
    setIsLoading: (state: boolean) => void;
    currentPage: number;
    totalPage: number;
    backPage: () => void;
    forwardPage: () => void;
    findPokemon: (namePokemon: string | undefined) => void;
    isNotFoundPokemon: boolean;
    setIsNotFoundPokemon: (state: boolean) => void;
};

type PokemonProps = {
    id: number;
    name: string;
    sprites: {
        other: {
            home: {
                front_default: string;
            };
            dream_world: {
                front_default: string;
            };
        };
    };
    types: { type: { name: string } }[];
};

export const PokedexContext = createContext({} as PokedexContextData);

export const PokedexProvider = ({ children }: PokedexContextProps) => {
    const [pokemonList, setPokemonList] = useState<PokemonProps[]>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isNotFoundPokemon, setIsNotFoundPokemon] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const getAllPokemon = async () => {
            try {
                const res = await Api.get("/pokemon", {
                    params: { limit: 24, offset: 24 * currentPage },
                });
                setTotalPage(Math.ceil(res.data.count / 24));
                const data = await res.data.results;
                createObjectPokemon(data);
            } catch (error) {
                console.log(error);
            }
        };

        const createObjectPokemon = async (result: { name: string }[]) => {
            try {
                const promises = result.map(async (pokemon) => {
                    const res = await Api.get(`/pokemon/${pokemon.name}`);
                    return res.data;
                });
                const results = await Promise.all(promises);
                setPokemonList(results);

                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        getAllPokemon();
    }, [currentPage]);

    function backPage() {
        currentPage > 0 && setCurrentPage(currentPage - 1);
    }

    function forwardPage() {
        currentPage + 1 < totalPage && setCurrentPage(currentPage + 1);
    }

    async function findPokemon(pokemonName: string | undefined) {
        if (pokemonName) {
            setIsLoading(true);
            try {
                const pokemonData = await Api.get(
                    `/pokemon/${pokemonName
                        .trim()
                        .replace(" ", "-")
                        .toLowerCase()}`
                );
                setTotalPage(0);
                setIsNotFoundPokemon(false);
                setIsLoading(false);
                setPokemonList([pokemonData.data]);
            } catch (error) {
                setTotalPage(0);
                setIsNotFoundPokemon(true);
                setIsLoading(false);
                setPokemonList([]);
            }
        }
    }

    return (
        <PokedexContext.Provider
            value={{
                pokemonList,
                setPokemonList,
                isLoading,
                setIsLoading,
                currentPage,
                totalPage,
                backPage,
                forwardPage,
                findPokemon,
                isNotFoundPokemon,
                setIsNotFoundPokemon,
            }}
        >
            {children}
        </PokedexContext.Provider>
    );
};
