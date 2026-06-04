/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = []
    let x
    for (let i = 0; i < nums.length; i++) {
        x = target - nums[i]
        if(map[x] !== undefined) return [i, map[x]]
        map[nums[i]] = i
    }
};