const organizeMatrix = (arr) => {
    let startCol = 0;
    if (matrix.length === 0) return []
    if (matrix.length === 1) return matrix[0]
    let endCol = matrix[0].length;
    let startRow = 0;
    let endRow = matrix.length;
    const r = [];
    let flag = endCol > endRow ? endRow : endCol
    while (flag >= 1) {
        for (let i = startCol; i < endCol; i++) {
            
            if (!r.includes(matrix[startRow][i])) r.push(matrix[startRow][i])
        }
        for (let i = startRow; i < endRow; i++) {
             if (!r.includes(matrix[i][endCol - 1])) r.push(matrix[i][endCol - 1])
        }
        
        for (let i = endCol - 1; i > -1; i--) {
            if (!r.includes(matrix[endRow - 1][i])) r.push(matrix[endRow - 1][i])
        }
        
        for (let i = endRow - 1; i > -1; i--) {
            if (!r.includes(matrix[i][startCol])) r.push(matrix[i][startCol])
        }
        console.log(r)
        startCol += 1;
        startRow += 1;
        endCol -= 1;
        endRow -= 1;
        flag -= 2;
    }
    return r
}