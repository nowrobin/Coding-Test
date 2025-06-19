function solution(arr) {
    return lcmArray(arr)
}
// 최대 공약수(GCD) 구하는 함수
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// 최소 공배수(LCM) 구하는 함수
function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
}

// 배열의 최소 공배수 구하는 함수
function lcmArray(arr) {
    return arr.reduce((acc, num) => lcm(acc, num), 1);
}