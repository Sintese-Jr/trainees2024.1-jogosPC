import {convertStringToArray} from "./data_format.js";

export default function convertGameToResponseGame(my_game) {
    // Converterá um objeto estático retirado do banco de dados em um 
    // para podermos manipular. 

    // se quiser alterar como uma informação é fornecido pelo db, é aqui 
    return {
            id: my_game.ranking,
            game: my_game.game,
            serie: my_game.serie,
            developer: convertStringToArray(my_game.developer),
            publisher: convertStringToArray(my_game.publisher),
            release_date: my_game.release_date,
            total_copies_sold: my_game.total_copies_sold,
            genre: convertStringToArray(my_game.genre),
            background: my_game.imagem
        };

}