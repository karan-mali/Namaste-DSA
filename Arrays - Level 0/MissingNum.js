var missingNumber = function(nums) {
    let n = nums.length;
    let totalSum = n*(n+1)/2;
    let partialSum = 0;
    for(let i=0; i<n; i++){
        partialSum += nums[i];
    }
    return(totalSum-partialSum);
};
console.log(missingNumber([2,0,1]));