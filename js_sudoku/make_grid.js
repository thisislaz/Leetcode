// YOUR CODE
const makeGrid = (numColumns,numRows) => {
  mainArr = []
  firstArr = []
  secondArr = []
  for (i=1;i<=numColumns;i++){
      firstArr.push(i)
  }
  for (i=0;i<numRows;i++){
      mainArr.push(firstArr)
  }  
  return mainArr  
}

console.log(makeGrid(3,4));
/* => [[1, 2, 3],
     [1, 2, 3],
     [1, 2, 3],
     [1, 2, 3]]
*/
// DO NOT EDIT BELOW
