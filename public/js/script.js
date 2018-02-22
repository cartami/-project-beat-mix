// Drum Arrays
let kicks = Array(16).fill(false);
let snares = Array(16).fill(false);
let hiHats = Array(16).fill(false);
let rideCymbals = Array(16).fill(false);

function toggleDrum(arrayNameString, indexNum) { //toggles drum on or off
    if (!arrayNameString || indexNum > 15 || indexNum < 0) {
        return;
    }
    const drumArray = getValidArray(arrayNameString);
    drumArray[indexNum] = !drumArray[indexNum];
}; //end toggleDrum

function clear(arrayNameString) { //clear selected drum array to false
    if (!arrayNameString || !isValidArrayName(arrayNameString)) {
        return;
    }
    const drumArray = getValidArray(arrayNameString);
    drumArray.fill(false);
}

function invert(arrayNameString) { //flips all value in a drum to opposite
    if (!arrayNameString || !isValidArrayName(arrayNameString)) {
        return;
    }
    const drumArray = getValidArray(arrayNameString);
    drumArray.forEach((elem, index) => drumArray[index] = !elem);
}

function isValidArrayName(arrayName) { //checks for valid arrayNames
    return (arrayName === 'kicks') ||
        (arrayName === 'snares') ||
        (arrayName === 'hiHats') ||
        (arrayName === 'rideCymbals');
}

function getValidArray(arrayName) { //gets the array variable
    switch (arrayName) {
        case 'kicks': {
            return kicks;
        }
        case 'snares': {
            return snares;
        }
        case 'hiHats': {
            return hiHats;
        }
        case 'rideCymbals': {
            return rideCymbals;
        }
        default:
            return;
    }
}

function getNeighborPads(x,y,size) {
    if (x < 0 || y < 0 || x > 4 || y > 4 || size < 1 || x>=size || y>=size) {
        return [];
    }
    const pads = [];
    pads.push([x-1, y]);
    pads.push([x, y-1]);
    pads.push([x+1, y]);
    pads.push([x, y+1]);
    return pads.filter(pad => {
        return pad.every(isOnGridPad => {
            return isOnGridPad < size && isOnGridPad >=0;
        });
    });
}

