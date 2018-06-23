
function wordNum(num) {

    let oneTo19 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'
                    , 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['','','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if(num === 0){
        return 'zero'
    }

    if(num <= 19){
        return oneTo19[num]
    }

    if(num < 100){
        return tens[Math.floor(num/10)] + ' ' + oneTo19[num % 10]
    }

    if(num < 1000) {
        return oneTo19[Math.floor(num/100)] + ' hundred ' +  ((num % 100 !== 0)? wordNum(num % 100) : '')
    }

    if(num < 1000000){
        return wordNum(Math.floor(num/1000)) + ' thousand ' + ((num % 1000 !== 0)? wordNum(num % 1000) : '')
    }

    if(num < 1000000000) {
        return wordNum(Math.floor(num/1000000)) + ' million ' + ((num % 1000000 !== 0)? wordNum(num % 1000000) : '')
    }

    if(num < 1000000000000) {
        return wordNum(Math.floor(num/1000000000)) + ' billion ' + ((num % 1000000000 !== 0)? wordNum(num % 1000000000) : '')
    }

    return 'Input should be less than 1000000000000'
}


for(let i = 0; i < 100000; i++){
    console.log(wordNum(i))
}

