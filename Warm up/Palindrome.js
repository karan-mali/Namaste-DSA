function isPalindrome(n){
    let rev = "";
    for (let i = n.length-1; i>=0; i--){
        rev += n[i];
    }
    if(rev === n){
        return true;
    }else{
        return false;
    }
}

console.log(isPalindrome("12321"));