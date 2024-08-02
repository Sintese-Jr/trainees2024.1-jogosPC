import axios from "axios";
import { JogosType } from "../types/jogos";

export const api = {
    fetchAllGames: async () => {
        try {
            const response = await axios.get("http://localhost:3001/");
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar jogos:", error);
            return [];
        }
    },

    fetchGames: async (page: number): Promise<JogosType[]> => {
        try {
            const response = await axios.get(`http://localhost:3001/pag/${page}`);
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar jogos:", error);
            return [];
        }
    },

    fetchNumberPags: async () => {
        try {
            const response = await axios.get("http://localhost:3001/pag/");
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar jogos:", error);
            return [];
        }
    }
};

export default api;