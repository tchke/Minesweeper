import bombMap from './bombMap';

export function createHasBomb(bombs) {
    return function(i, j) {
        return !!bombs[i][j];
    }
}

export default createHasBomb(bombMap);

// export function hasBomb(i, j) {
//     return true;//!!bombMap[i][j];
// }

//export { hasBomb };