function print3DMatrix(m) {

    let stringOfMatrix = "";
    for(let i = 0; i < m.length; i++){
        let ithRow = "";
        for(let j = 0; j < m[i].length; j++ ){
            ithRow += m[i][j] + "  "
        }
        stringOfMatrix += ithRow + '\n'
    }

    console.log(stringOfMatrix);
}

let a = [[1,2,3],[1,2,3],[1,2,3]];

print3DMatrix(a);