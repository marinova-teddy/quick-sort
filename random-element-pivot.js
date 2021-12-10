// let set1 = [2148, 9058, 7742, 3153, 6324, 609, 7628, 5469, 7017, 504];
// let ex = [44, 88, 77, 22, 66, 11, 99, 55, 00, 33];
let buf;
let sortedNums;
let checks=0;

function quicksort(nums, first, last, pivot) {
  let p=pivot, i=first-1, j=i+1;
  if (p<first || p>last) {
    p=first+p%(last-first+1);
  }
  
  let ans = [];
  if (first==last) {
    checks++;
    return [nums[first]];
  }
  if (first>last || first<0 || last<0 || first>(nums.length-1) || last>(nums.length-1)) {
    checks++;
    return [];
  }

  if (p==first) {
    i++; j++;
  }
  for (;j<=last;j++) {
    if (p==last && p==j) continue;
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
  if (p!=first) i++;

  checks++;
  if (i!=p) {
    buf=nums[i];
    nums[i]=nums[p];
    nums[p]=buf;
  }

  front = quicksort( nums, first, i-1, pivot);
  back = quicksort( nums, i+1, last, pivot);
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
  let p, avChecks;

  for (let k=0;k<10;k++) {
    p=Math.floor(Math.random()*arr.length);
    if (p==arr.length) p--; //very rare
    quicksort(arr,0,arr.length-1,p);
    if (k==0) {
      avChecks=checks;
    } else {
      avChecks=Math.ceil((avChecks+checks)/2);
    }
    checks=0;
  }
  
  console.log(avChecks);
  return sortedNums;
}

// main([44, 88, 77, 22, 66, 11, 99, 55, 00, 33])
// main([2148, 9058, 7742, 3153, 6324, 609, 7628, 5469, 7017, 504]) 
