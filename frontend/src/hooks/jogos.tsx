import axios from "axios";
import { JogosType } from "../types/jogos";

// axios.get("http://localhost:3001/") GET: PUXA INFORMAÇÕES
// axios.post("http://localhost:3001/") POST: ENVIA INFORMAÇÕES
// axios.put("http://localhost:3001/") PUT: ATUALIZA INFORMAÇÕES
// axios.delete("http://localhost:3001/") DELETE: DELETA INFORMAÇÕES

export const api = {
    /**requisição para exibir os jogos */
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
            console.log("Dados retornados:", response);
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar jogos:", error);
            return [];
        }
    },
    fetchTotalPags: async () => {
        try {
            const response = await axios.get("http://localhost:3001/pag");
            return response.data.pages;
        } catch (error) {
            console.error("Erro ao buscar jogos:", error);
            return [];
        }
    },
    fetchGamesBySearch: async (search: string): Promise<JogosType[]> => {
        try {
            const response = await axios.get(`http://localhost:3001/${search}`);
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar jogos:", error);
            return [];
        }
    }
};

export default api;