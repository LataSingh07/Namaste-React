let binarysearch=function (arr,start,end,target){
    if(start>end){
        return false;
    }
     let mid=Math.floor((start+end)/2);
       if(arr[mid]==target) return true;
       else if(arr[mid]<target){
        return binarysearch(arr,mid+1,end,target)
       }
       else {
        return binarysearch(arr,start,mid-1,target)
    }
 
 }
 let arr=[1,2,3,4,5,6,7];
 let target=0;
 if(binarysearch(arr,0,arr.length-1,target)){
     console.log("found element");
 }
 else {
     console.log("Element not found!");
 }

 target =6;
 
 if (binarysearch(arr,0,arr.length-1,target)) {
     console.log("Element found!");
 }
 else {
     console.log("Element not found!");
 }
 /////time complexity=0(log2n)