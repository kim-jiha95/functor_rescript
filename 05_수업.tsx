// 1~n까지의 합
function f(n: number) {
    if (n <= 1) {
        return 1
    }
    return n + f(n - 1)
}
console.log(f(3));

//문자열 뒤집기
function strReverse(str: string) {
    if (str.length == 1) {
        return str
    }
    return str[str.length - 1] + strReverse(str.slice(0, str.length - 1)) //순서 더하는 순서
}
console.log(strReverse('kimjiha'));

// 유클리드 호재법(최대공약수) -  인자로 주어진 두 수의 최대공약수를 찾는 함수를 재귀함수로 만들어 보라
function gcd(a: number, b: number) {
    const remainder = a % b;
    if (remainder === 0) return b;
    // 어떤 수를 자신보다 더 큰수로 나누게 되면 몫이 0이 되고 그 자신이 나머지가 됨
    return gcd(b, remainder);
}

console.log(gcd(1, 5));

