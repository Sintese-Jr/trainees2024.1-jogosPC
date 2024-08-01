export default function convertStringToArray(str) {
    return str.split(',').map(item => item.trim()).map(item => item.charAt(0).toUpperCase() + item.slice(1))
} // Método auxiliar para converter uma string em um array de strings