function solution(s)
{
    let stack = []
    for(let i = 0; i < s.length; i++){
        if(!stack.length == 0 && stack[stack.length - 1] === s[i]) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return stack.length === 0 ? 1 : 0;
}

// function solution(s) {
//   const stack = [];
//   for (let i = 0; i < s.length; i++) {
//     const curr = s.charAt(i);
//     if (stack[stack.length - 1] === curr) {
//       stack.pop();
//     } else {
//       stack.push(curr);
//     }
//   }
//   return stack.length === 0 ? 1 : 0;
// }
