// function countVowels(string) {
//     return string.match(/[aeiou]/ig).length;
// }
//
// console.log(countVowels("hello, my name is Nitin Patel. How are you? I am fine. "));


function vowles(str){
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

console.log(vowles('aeouuvgvaaa'));
