import axios from "axios";

export const Api = axios.create({
    method: "GET",
    baseURL: "https://pokeapi.co/api/v2/",
    params: {
        limit: 20,
        offset: 0,
    },
});
