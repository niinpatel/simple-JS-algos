function romanToDecimal(roman) {

    let number = 0;

    let values = {
        "X":10,
        "V":5,
        "I":1,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    };

    for(let i = roman.length - 1; i >= 0; i--){
        if(values[roman[i+1]] > values[roman[i]])
            number -= values[roman[i]]
        else number += values[roman[i]]
    }
    
    return number
}


console.log(romanToDecimal("MMMCMXCIX"))
console.log(romanToDecimal("XCIX"))
console.log(romanToDecimal("CMXC"))