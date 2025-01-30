let binarysearch=function (arr,target){
   let start=0, end=arr.length-1;
   while(start<=end){
    let mid=Math.floor((start+end)/2);
      if(arr[mid]==target) return true;
      else if(arr[mid]<target) {
        start=mid+1;
    } 
      else {
        end=mid-1;
   }
}
     return false;
}
let arr=[1,2,3,4,5,6,7];
let target=6;
if(binarysearch(arr,target)){
    console.log("found element");
}
else {
    console.log("Element not found!");
}

target = 8;

if (binarysearch(arr, target)) {
    console.log("Element found!");
}
else {
    console.log("Element not found!");
}