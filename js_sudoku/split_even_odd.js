// YOUR CODE
const evenAndOdd = (arr) => {
  evenNumsArr = []
  oddNumsArr = []
  joined = []
  for (i=0;i<arr.length;i++){
      if (arr[i] % 2 === 0){
          evenNumsArr.push(arr[i])
      } 
      else if (arr[i] % 2 !== 0){
          oddNumsArr.push(arr[i])
      }
  }
  joined.push(evenNumsArr)
  joined.push(oddNumsArr)
  return joined
}

console.log(evenAndOdd([1, 2, 3, 4, 5, 6]))

// DO NOT EDIT BELOW
