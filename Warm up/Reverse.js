function reverse(x) {
    let sign = x>0 ? 1:-1;
    let n = Math.abs(x);
    n = n.toString();
    let rev = "";
    for (let i = n.length-1; i>=0; i--){
        rev += n[i];
    }
    rev = parseInt (rev);
    return (rev> 2**31 -1 ? 0 : rev*sign);
};
console.log(reverse(-123));