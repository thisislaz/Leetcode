// YOUR CODE
const zooInventory = (multiDimensionalArray) => {
  returnedArr = []
  for (i=0;i<multiDimensionalArray.length;i++){
      if (Array.isArray(multiDimensionalArray[i])){
          returnedArr.push(`${multiDimensionalArray[i][0]} the ${multiDimensionalArray[i][1][0]} is ${multiDimensionalArray[i][1][1]}.`)
      } 
  }
  return returnedArr
}

let myZoo = [
['King Kong', ['gorilla', 42]],
['Nemo', ['fish', 5]],
['Punxsutawney Phil', ['groundhog', 11]]
];

console.log(zooInventory(myZoo));
/* => ['King Kong the gorilla is 42.',
     'Nemo the fish is 5.'
     'Punxsutawney Phil the groundhog is 11.']
*/
// DO NOT EDIT BELOW
