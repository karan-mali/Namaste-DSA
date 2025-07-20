var singleNumber = function(nums) {
    let hash = {};
    for(let i=0; i<nums.length; i++){
        if(!hash[nums[i]]){
            hash[nums[i]] = 1;
        }else{
            hash[nums[i]]++;
        }
    }
    console.log(hash);
    for(let i=0; i<nums.length; i++){
        if(hash[nums[i]] === 1){
            return nums[i];
        }
    }
};
console.log(singleNumber([2,2,1]));