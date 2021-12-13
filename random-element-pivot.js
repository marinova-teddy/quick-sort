let sortedNums;
let checks=0;

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
      if (i<j) swap(nums, j, i)
    }
  }
  
  checks++;
  if (i!=p) swap(nums, i, p)

  front = quicksortFirst(nums, first, i-1);
  back = quicksortFirst(nums, i+1, last);
  for (let k=0;k<front.length;k++) {
    ans.push(front[k]);
  }
  ans.push(nums[i]);
  for (let k=0;k<back.length;k++) {
    ans.push(back[k]);
  }

  sortedNums=nums;
  return ans;
}

function quicksort(nums, first, last, pivot) {
  swap(nums, pivot, 0)

  quicksortFirst(nums, first, last);
  return nums;
}

function main(arr) {
  let copyArr = arr.slice(0);
  for (let i=0;i<copyArr.length;i++) {
    console.log(quicksort(copyArr, 0, copyArr.length-1, i));
    copyArr=arr.slice(0);
  }
  return sortedNums;
}

// main([44, 88, 77, 22, 66, 11, 99, 55, 00, 33])
// main([2148, 9058, 7742, 3153, 6324, 609, 7628, 5469, 7017, 504]) 
