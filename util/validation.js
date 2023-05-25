
const isNumber = (num) => {
    return !isNaN(num);
}

const isEmpty = (str) => {
    let bool = (str.trim() === "") ? true : false
    return bool;
}

const isGreaterThanZero = (num) => {
    return num > 0;
}

export {isEmpty,isNumber,isGreaterThanZero};