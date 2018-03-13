import bombMap from './bombMap';

function createGetBombCountAroundOf() {
    return function(i, j) {
        return 3;
    }
}

export default createGetBombCountAroundOf();