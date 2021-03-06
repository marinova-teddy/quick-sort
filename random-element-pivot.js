const fs = require("fs");
let arr;
let checks=0;

fs.readFile('./data-sets/Quick_Sort_Test_Data_Set_0.txt', "utf8", function(err, data) {
  arr = data.split("\n").slice(0, -1).map(a => parseInt(a));
  main(arr);
});


function swap(nums, a, b) {
  let buf = nums[a];
  nums[a] = nums[b];
  nums[b] = buf;
}

function quicksortFirst(nums, first, last) {
  let ans = [], pivot = first;
  if (first==last) {
    checks++;
    return [nums[first]];
  }
  if (first>last || first<0 || last<0 || first>(nums.length-1) || last>(nums.length-1)) {
    checks++;
    return [];
  }

  let p=pivot, i=first;
  for (let j=i+1;j<=last;j++) {
    checks++;
    if (nums[j]<nums[p]) {
      i++;
      if (i<j) swap(nums, j, i);
    }
  }
  
  checks++;
  if (i!=p) swap(nums, i, p);

  front = quicksortFirst(nums, first, i-1);
  back = quicksortFirst(nums, i+1, last);
  for (let k=0;k<front.length;k++) {
    ans.push(front[k]);
  }
  ans.push(nums[i]);
  for (let k=0;k<back.length;k++) {
    ans.push(back[k]);
  }

  return ans;
}

function quicksort(nums, first, last, pivot) {
  swap(nums, pivot, 0)

  quicksortFirst(nums, first, last);
  return nums;
}

function consoleLog(arr)  {
  let printedArr = arr[0];
  for (let i=1;i<arr.length; i++) { 
    printedArr+=(", "+ arr[i]);
  }
  console.log("Sorted array: " + printedArr);
}

function main(arr) {
  let copyArr = arr.slice(0);
  consoleLog(quicksort(copyArr, 0, copyArr.length-1, copyArr.length - 1));
  console.log("Checks: " + checks);
}
