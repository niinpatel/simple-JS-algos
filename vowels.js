function countVowels(string) {
    return string.match(/[aeiou]/ig).length;
}

console.log(countVowels("hello, my name is Nitin Patel. How are you? I am fine. "));