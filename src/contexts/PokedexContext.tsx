import { createContext, useEffect, useState } from "react";
import { Api } from "../pages/api/Api";

interface PokedexContextProps {
    children: React.ReactNode;
}

type PokemonListData = {
    name: string;
    url: string;
};

type PokedexContextData = {
    pokemonList: PokemonListData[];
    setPokemonList: (state: []) => void;
};

export const PokedexContext = createContext({} as PokedexContextData);

export const PokedexProvider = ({ children }: PokedexContextProps) => {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        Api.get("/pokemon")
            .then((response) => setPokemonList(response.data.results))
            .catch((error) => console.log(error));
    }, []);

    return (
        <PokedexContext.Provider value={{ pokemonList, setPokemonList }}>
            {children}
        </PokedexContext.Provider>
    );
};
