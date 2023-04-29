// PROVIDED FOR YOU. DO NOT CHANGE puzzle or puzzleTwo

//puzzle
let puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
              [ 2,7,1,   9,6,3,   4,8,5 ],
              [ 4,6,3,   5,8,1,   7,9,2 ],

              [ 9,3,4,   6,1,7,   2,5,8 ],
              [ 5,1,7,   2,3,8,   9,6,4 ],
              [ 6,8,2,   4,5,9,   3,7,1 ],

              [ 1,5,9,   8,7,4,   6,2,3 ],
              [ 7,4,6,   3,2,5,   8,1,9 ],
              [ 3,2,8,   1,9,6,   5,4,7 ]];


//puzzle 2
let puzzleTwo = [[ 8,9,5,7,4,2,1,3,6 ],
                [ 8,7,1,9,6,3,4,8,5 ],
                [ 4,6,3,5,8,1,7,9,2 ],
                [ 9,3,4,6,1,7,2,5,8 ],
                [ 5,1,7,2,3,8,9,6,4 ],
                [ 6,8,2,4,5,9,3,7,1 ],
                [ 1,5,9,8,7,4,6,2,3 ],
                [ 7,4,6,3,2,5,8,1,9 ],
                [ 3,2,8,1,9,6,5,4,7 ]];

//DO NOT EDIT ABOVE

function getRow(puzzle, row) {
    numbersInRow = []
    for (i=0;i<puzzle[row].length;i++){
        numbersInRow.push(puzzle[row][i])
    }
    return numbersInRow
}

function getColumn(puzzle, col) {
    numbersInColumn = []
    for (i=0;i<puzzle.length;i++){
        numbersInColumn.push(puzzle[i][col])
    }
    return numbersInColumn
}

function getSection(puzzle, x, y) {
    const numbersInSection = [];
    const startX = y * 3;
    const startY = x * 3;
  
    for (let i = startX; i < startX + 3; i++) {
        for (let j = startY; j < startY + 3; j++) {
            numbersInSection.push(puzzle[i][j]);
        }
    }
  return numbersInSection;
}

function includes1To9(arr) {
    for (let i = 1; i <= arr.length; i++){
        if (!arr.includes(i)){
        return false
        }
    }
    return true
}

function sudokuIsValid(puzzle) {
    let row
    let col
    let sec
    let isValid = true
    for (i=0;i<puzzle.length;i++){
        row = puzzle[i]
        col = getColumn(puzzle,i)
        if (!includes1To9(row) || !includes1To9(col)){
            isValid = false
            break
        }
    }
    for (i=0;i<puzzle.length/3;i++){
        for (j=0;j<puzzle.length/3;j++){
            sec = getSection(puzzle,i,j)
            if (!includes1To9(sec)){
                isValid = false
                break
            }
        }
        if (!isValid){
            break
        }
    }
    return isValid
}


// console.log(getRow(puzzle,8))
// console.log(getRow(puzzle,0))
// console.log(getColumn(puzzle,0))
// console.log(getColumn(puzzle,8))
// console.log(getSection(puzzle,0,0))
// console.log(getSection(puzzle,1,0))
// console.log(includes1To9([1,2,3,4,5,6,7,8,9]))
// console.log(includes1To9([1,1,2,3,4,5,6,7,8]))
console.log(sudokuIsValid(puzzle))
console.log(sudokuIsValid(puzzleTwo))

