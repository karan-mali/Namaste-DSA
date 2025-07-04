function reverseString(s) {
    let n =s.length-1;
    for(let i=0; i<n/2; i++){
        [s[i],s[n-i]] = [s[n-i],s[i]];
    }
    return s;
};

console.log(reverseString(["h","e","l","l","o"]));