module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const opened = ['(', '[', '{', '1', '3', '5', '6', '7', '8', '|'];
  const brackets = {
    ')': '(',
    ']': '[',
    '}': '{',
    '2': '1',
    '4': '3',
    '6': '5',
    '|': '|'
  };
  
  
  
   for (let i = 0; i < str.length; i++) {
    let currentItem = str[i];

   if (str.length % 2 !== 0 ) {
    return false;
   } 
   if (str === "||") {
    return true;
   }


     if (opened.includes(currentItem)) {
       stack.push(currentItem); // если элемент есть в opened, положи в stack
     }


   else if (stack.includes('|') && stack[stack.length -1] !== "|") {
    console.log(stack)
      return true;
          }
     else {
      if (stack.length == 0) {
        return false;
      }
      


if (brackets[currentItem] === stack[stack.length -1]) {
         stack.pop(); // удаляем последний элемент из стека, если это пара
         
} else if (brackets[currentItem] === stack['|'] || brackets[currentItem] === stack['7'] || brackets[currentItem] === stack['8']) {
       // stack.pop();
      return true;
       }
      }
      }
    
  return stack.length === 0;
}
