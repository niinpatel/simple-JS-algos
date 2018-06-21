function isNarc(number) {

    number = number + "";
    let length = number.length;

    let sum = 0;
    for(let i = 0; i < length; i ++ ){
        sum += number.charAt(i)**length
    }

    return sum == number

}

console.log(isNarc(93085));