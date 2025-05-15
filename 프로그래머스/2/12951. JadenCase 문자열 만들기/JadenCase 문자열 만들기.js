// function solution(s) {
//     var answer = '';
//     let a = s.split(" ")
//     let b = []
//     for(let i in a){
//         let lower = a[i].toLowerCase() 
//         let x = [...lower]
//         x[0]= x[0].toUpperCase();
//         b.push(x.join(""))
//     }
//     return b.join(" ");
// }

function solution(s) {
      const words = s.split(' ')
        .map(word => word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase());

    return words.join(' ');
}    