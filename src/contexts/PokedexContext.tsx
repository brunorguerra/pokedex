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
        return () => {
            const getAllPokemon = async () => {
                const res = await Api.get("/pokemon");
                const data = await res.data.results;
                createObjectPokemon(data);
            };

            const createObjectPokemon = async (result: { name: string }[]) => {
                const promises = result.map(async (pokemon) => {
                    const res = await Api.get(`/pokemon/${pokemon.name}`);
                    return res.data;
                });
                const results = await Promise.all(promises);
                setPokemonList(results);
            };

            getAllPokemon();
        };
    }, []);

    return (
        <PokedexContext.Provider value={{ pokemonList, setPokemonList }}>
            {children}
        </PokedexContext.Provider>
    );
};
