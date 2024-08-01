
export default function convertStringToArray(str) {
    return str.split(',').map(item => item.trim()).map(item => item.charAt(0).toUpperCase() + item.slice(1))
}