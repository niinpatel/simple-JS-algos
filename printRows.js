/**
 * Prints pattern -
 * #
 * ##
 * ### and so on..
 * @param n
 */
function printStairs(n) {

    for(let i = 1; i <= n; i++){

        console.log("#".repeat(i));

    }

}

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


printStairs(7);
printPyramid(7);
