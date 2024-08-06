import axios from "axios";
import { JogosType } from "../types/jogos";

export const api = {
    fetchGamesGender: async (gender: string): Promise<JogosType[]> => {
        try {
            const response = await axios.get(`http://localhost:3001/genero/${gender}`);
            return response.data;
        } catch (error) {
            console.error(`Erro ao buscar jogos com o genero: ${gender} -`, error);
            return [];
        }
    },
    fetchAllGenders: async () => {
        try {
            const response = await axios.get("http://localhost:3001/listar/generos");
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar generos dos jogos: ", error);
            return [];
        }
    },
};

export default api;