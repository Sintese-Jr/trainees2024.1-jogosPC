import convertStringToArray from "./data_format.js";

export default function convertGameToResponseGame(my_game) {

    return {
            id: my_game.id,
            game: my_game.game,
            serie: my_game.serie,
            developer: convertStringToArray(my_game.developer),
            publisher: convertStringToArray(my_game.publisher),
            release_date: my_game.release_date,
            total_copies_sold: my_game.total_copies_sold,
            genre: convertStringToArray(my_game.genre),
        };

}