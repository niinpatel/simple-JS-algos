function checkAnagrams(string1, string2) {

    // step one: remove all non-alphabets and make all characters lowercase.
    string1 = string1.replace(/\W/g, '').toLocaleLowerCase();
    string2 = string2.replace(/\W/g, '').toLocaleLowerCase();

    // now if two strings have different lengths, they're obviously not anagrams.
    if(string2.length !== string1.length){
        return false;
    }

    //sort two strings
    string1 = string1.split('').sort();
    string2 = string2.split('').sort();

    for(let i in string1){
        if( string1[i] !== string2[i] ){
            return false;
        }
    }
    return true;
}

console.log(checkAnagrams("William Shakespeare","I am a weakish speller"));

console.log(checkAnagrams("nitin","nitis"));

console.log(checkAnagrams("dormitory", "dirty room"));

longAnagram1 = "Jabberwocky \n" +
    "\n" +
    "`Twas brillig, and the slithy toves \n" +
    "Did gyre and gimble in the wabe; \n" +
    "All mimsy were the borogoves, \n" +
    "And the mome raths outgrabe. \n" +
    "\n" +
    "`Beware the Jabberwock, my son! \n" +
    "The jaws that bite, the claws that catch! \n" +
    "Beware the Jubjub bird, and shun \n" +
    "The frumious Bandersnatch!' \n" +
    "\n" +
    "He took his vorpal sword in hand: \n" +
    "Long time the manxome foe he sought -- \n" +
    "So rested he by the Tumtum tree, \n" +
    "And stood awhile in thought. \n" +
    "\n" +
    "And as in uffish thought he stood, \n" +
    "The Jabberwock, with eyes of flame, \n" +
    "Came whiffling through the tulgey wood, \n" +
    "And burbled as it came! \n" +
    "\n" +
    "One, two! One, two! And through and through \n" +
    "The vorpal blade went snicker-snack! \n" +
    "He left it dead, and with its head \n" +
    "He went galumphing back. \n" +
    "\n" +
    "`And has thou slain the Jabberwock? \n" +
    "Come to my arms, my beamish boy! \n" +
    "O frabjous day! Callooh! Callay! \n" +
    "He chortled in his joy. \n" +
    "\n" +
    "`Twas brillig, and the slithy toves \n" +
    "Did gyre and gimble in the wabe; \n" +
    "All mimsy were the borogoves, \n" +
    "And the mome raths outgrabe.\n" +
    "\n";

longAnagram2 = "The author Charles Lutwidge Dodgson, \n" +
    "Better known by the name Lewis Carroll, \n" +
    "Though vehement mathematician, church theologist, logician, \n" +
    "Misbehaved, exhibiting bawdy photos controversial. \n" +
    "\n" +
    "By the way, he suffered mammoth headaches \n" +
    "Thought to have befuddled consciousness, \n" +
    "Blackout, even stem hemorrhage, that led to a wobbly shake, \n" +
    "And baffling bouts of jittery nervousness. \n" +
    "\n" +
    "By the way, that man was the Father of Wordplay; \n" +
    "When with brain whims he'd dabble, \n" +
    "He'd outwit mates at what's known as 'Word Ladder' today, \n" +
    "Then hatched that jolly new game - 'Scrabble'. \n" +
    "\n" +
    "Meanwhile, the gem 'Alice in Wonderland, \n" +
    "The jewel 'Through the Looking Glass', \n" +
    "Brimming with bedtime sojourns to a new distant land, \n" +
    "Mummy's Mother Goose habit had by far surpassed. \n" +
    "\n" +
    "By the way, the through-the-bedchamber-mirror book \n" +
    "Awakened high joyous jubilation, \n" +
    "Though the jibber-jabbered gobbledygook \n" +
    "Just stalemated clarification!\n" +
    "\n";

console.log(checkAnagrams(longAnagram1, longAnagram2));  // example from http://www.anagrammy.com/literary/dk/poems-dk8.html