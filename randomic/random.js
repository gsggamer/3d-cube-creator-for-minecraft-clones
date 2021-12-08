function randomNum(min = 0, max = 100, mathFloor = true) {
    if(mathFloor === true) {
        return Math.floor(Math.random() * ((max - min) + 1) + min)
    } else if(mathFloor === false) {
        return Math.random() * (max - min) + min
    }
}

function randomArr(array) {
    return array[randomNum(0, (array.length - 1))];
}