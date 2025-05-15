function solution(s) {
    var answer = [0,0];
    
    function cur (string){
    // if(string == '1'){
    //     return
    // }else{
    //     loop += 1
    //     zero += string.length- string.split('0').join('')
    //    return  cur(string.toString(2), loop,zero)
    // }
        if (string === '1') return;
        answer[0] += 1;
        const removed = string.replace(/0/g, '');
        answer[1] += string.length - removed.length;
        cur(removed.length.toString(2));
    }
    cur(s)
    return answer;
}

