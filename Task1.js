function isValidWalk(walk) {
    if (walk.length !== 10) {
        return false;
    }

    let north = 0;
    let south = 0;
    let west = 0;
    let east = 0;

    for (let direction of walk) {
        switch (direction) {
            case 'n': north++; break;
            case 's': south++; break;
            case 'w': west++; break;
            case 'e': east++; break;
        }
    }


    return north === south && west === east;
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e']));
console.log(isValidWalk(['w']));
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));