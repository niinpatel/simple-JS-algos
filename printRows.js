/**
 * Prints pattern -
 * #
 * ##
 * ### and so on..
 * @param n
//  */
// function printStairs(n) {
//
//     for(let i = 0; i <= n; i++){
//         let hashes = "";
//
//         for(let j = 0; j < i; j++){
//             hashes = hashes + "#"
//         }
//
//         console.log(hashes);
//
//     }
//
// }
//
//
// printStairs(5)






/**
 * Prints pattern -
 *   #
 *  ##
 * ####
 *######
 */
function printPyramid(n){

    for (let i = n - 1, j = 1; i >= 0; i--, j += 2){

        console.log(" ".repeat(i) + "#".repeat(j));
    }
}

printPyramid(5);
