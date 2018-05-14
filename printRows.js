/**
 * Prints pattern -
 * #
 * ##
 * ### and so on..
 * @param n
 */
function printStairs(n) {

    for(let row = 0; row <= n; row++){
        let hashes = "";

        for(let col = 0; col < row; col++){
            hashes = hashes + "#"
        }

        console.log(hashes);

    }

}


printStairs(5);


/**
 * Prints pattern -
 *   #
 *  ##
 * ####
 *######
 */
function printPyramid(n){

    for (let spaces = n - 1, hashes = 1; spaces >= 0; spaces--, hashes += 2){

        console.log(" ".repeat(spaces) + "#".repeat(hashes));
    }
}

printPyramid(5);
