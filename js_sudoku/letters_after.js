// YOUR CODE
const lettersAfter = (haystack,needle,limit) => {
  let newStr = ""
  for (let i=0;i<=haystack.length;i++){
      if (haystack[i] === needle){
          for (let j = 0; j < limit; j++){
                  if (newStr.length > i+j){
                      break
                  } else{
                      newStr += haystack[i+j +1]
                  }
              }
          return newStr
          }
      }
  }

// i i 5
console.log(lettersAfter('hello', 'e', 2)) // => ll
console.log(lettersAfter('hello', 'h', 1)) // => e
console.log(lettersAfter('indefatigable', 'a', 4))// => tiga


// DO NOT EDIT BELOW
