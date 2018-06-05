function convertToRoman(num) {

    if(num < 4){
        return "I".repeat(num)
    }

    if(num < 9){
        if(num < 5){
            return "IV"
        }
        else {
            return "V" + convertToRoman(num%5)
        }
    }

    if(num < 40){
        if(num < 10){
            return "IX"
        }
        else {
            return "X".repeat(Math.floor(num/10)) + convertToRoman(num%10)
        }
    }

    if(num < 90){
        if(num < 50){
            return "XL" + convertToRoman(num%40)
        }
        else {
            return "L".repeat(Math.floor(num/50)) + convertToRoman(num%50)
        }
    }

    if(num < 400){
        if(num < 100){
            return "XC" + convertToRoman(num%90)
        }
        else {
            return "C".repeat(Math.floor(num/100)) + convertToRoman(num%100)
        }
    }


    if(num < 900){
        if(num < 500){
            return "CD" + convertToRoman(num%400)
        }
        else {
            return "D".repeat(Math.floor(num/500)) + convertToRoman(num%500)
        }
    }

    if(num < 4000){
        if(num < 1000){
            return "CM" + convertToRoman(num%900)
        }
        else {
            return "M".repeat(Math.floor(num/1000)) + convertToRoman(num%1000)
        }
    }

    return "Could not generate roman numeral for the given input";

}

console.log(convertToRoman(900));
console.log(convertToRoman(99));
console.log(convertToRoman(990));