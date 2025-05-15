// function solution(n) {
//     let x = n.toString(2)
//     let value = n 
//     while (true){
//         let nextValue= value +1
//         if(
//         [...x].filter((value)=> value != 0).join('') ==
//         [...nextValue.toString(2)].filter((value)=> value != 0).join('')){
//             return nextValue
//         }
//         value = nextValue
//     }
// }

function solution(n) {
    let num = n.toString(2).split("1").length;
    while (true) {
      n++;
      if (n.toString(2).split("1").length === num) return n;
    }
  }