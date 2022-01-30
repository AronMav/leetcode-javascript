/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for(let index = 0; index < nums.length; index++){
      for(let indexIn = 0; indexIn < nums.length; indexIn++){
        if (index == indexIn){
          continue    
        } 
          
        if (nums[index] + nums[indexIn] == target){
          return [index, indexIn]    
        }
      }            
    }      
  }