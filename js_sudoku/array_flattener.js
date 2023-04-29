// YOUR CODE
const arrayFlattener = (twoDimensionalArray) => {
  newArr = []
  
  for (i=0;i<twoDimensionalArray.length;i++){
      if (Array.isArray(twoDimensionalArray[i])){
          for (j=0;j<twoDimensionalArray[i].length;j++){
              newArr.push(twoDimensionalArray[i][j])
          }
      } else  {
          newArr.push(twoDimensionalArray[i])
      }
  }
  return newArr
}

console.log(arrayFlattener([1,[2, 3], 4]))
console.log(arrayFlattener(['Hi','lazaro','love','kori',['tricky','huh']]))
; // => [1, 2, 3, 4]
// DO NOT EDIT BELOW
