const nums = [0,1,0,3,12];
 
const notZero = [];
const zero = [];
 
for (let i=0; i<nums.length; i++){
    if ((nums[i]) == 0) {
        zero.push(nums[i]);
    } else {
        notZero.push(nums[i]);
    }
}
notZeroSorted = notZero.sort(function(a, b){return a - b});
console.log(notZeroSorted.concat(zero));