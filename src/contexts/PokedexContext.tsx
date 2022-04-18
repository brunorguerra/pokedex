import { createContext, useEffect, useState } from "react";
import { Api } from "../pages/api/Api";

interface PokedexContextProps {
    children: React.ReactNode;
}

type PokedexContextData = {
    pokemonList: PokemonProps[];
    setPokemonList: (state: []) => void;
};

type PokemonProps = {
    id: number;
    name: string;
    sprites: {
        other: {
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

    useEffect(() => {
        const getAllPokemon = async () => {
            const res = await Api.get("/pokemon");
            const data = await res.data.results;

            function createObjectPokemon(result: { name: string }[]) {
                result.forEach(async (pokemon) => {
                    const res = await Api.get(`/pokemon/${pokemon.name}`);
                    const data = await res.data;
                    setPokemonList((prevList) =>
                        prevList.length < 20
                            ? [...prevList, data]
                            : [...prevList]
                    );
                });
            }
            createObjectPokemon(data);
        };

        getAllPokemon();
    }, []);

    return (
        <PokedexContext.Provider value={{ pokemonList, setPokemonList }}>
            {children}
        </PokedexContext.Provider>
    );
};
