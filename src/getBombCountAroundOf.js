import bombMap from './bombMap';
import hasBomb from './hasBomb';

function createGetBombCountAroundOf() {
    const checkPos = (i,j) => {
        return i >= 0 && i < 10 && j >= 0 && j < 10 && hasBomb(i, j);
    }
    
    return function(i, j) {
        let count = 0;
        for (let k = i - 1; k <= i + 1; k++) {
            //console.log(`k is ${k}`);
            for (let z = j - 1; z <= j + 1; z++) {
                //console.log(`z is ${z}`);
                if (checkPos(k,z)) {                    
                    count++;
                }
            }
        } 
        return count;       
    }
}

export default createGetBombCountAroundOf();