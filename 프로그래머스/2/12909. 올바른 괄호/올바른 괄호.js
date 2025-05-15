function solution(s){
    var answer = true;
    let a = [...s]
    let stack = [] 
    for(let i in a ){
        if(a[i] == "("){
            stack.push("(")
        }
        else if(a[i]== ")"){
            if(stack.length== 0){
                return false
            }
            stack.pop("(")
        }
    }
    if(stack.length !== 0){
        answer = false
    }
    return answer;
}