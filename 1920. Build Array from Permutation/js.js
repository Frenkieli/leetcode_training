/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  return nums.map(a=>nums[a]);
  // let arr = [];
  // nums.forEach((data, i) => {
  //   arr[i] = nums[nums[i]];
  // });
  // return arr;
};

console.log(buildArray([0, 2, 1, 5, 3, 4]));
