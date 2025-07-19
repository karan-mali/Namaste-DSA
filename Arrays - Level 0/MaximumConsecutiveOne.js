var findMaxConsecutiveOnes = function(nums) {
    let acc = 0;
    let curr = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] != 0){
            curr++;
        }else if(acc < curr){
            acc = curr;
            curr = 0;
        }else{
            curr = 0;
        }
    }
    return(curr>acc ? curr : acc);
};
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]));