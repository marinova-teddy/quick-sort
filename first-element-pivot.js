let buf;
let sortedNums;
let checks=0;

function quicksort(nums, first, last, pivot) {
  let ans = [];
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
      if (i<j) {
        buf=nums[i];
        nums[i]=nums[j];
        nums[j]=buf;
      }
    }
  }
  
  checks++;
  if (i!=p) {
    buf=nums[i];
    nums[i]=nums[p];
    nums[p]=buf;
  }
  
  front = quicksort(nums, first, i-1, pivot);
  back = quicksort(nums, i+1, last, i+1+pivot-first);
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

function main(arr) {
  let p=0;
  quicksort(arr,0,arr.length-1,p);
  console.log(checks);
  return sortedNums;
}
