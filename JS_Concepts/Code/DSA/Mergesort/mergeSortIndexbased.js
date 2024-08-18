
function merge(arr,low,high){
  if(low>=high){
    return
  }
 let mid=Math.floor((low+high)/2)
  merge(arr,low,mid);
  merge(arr,mid+1,high);
  mergeSort(arr,low,mid,high);
}
function mergeSort(arr,low,mid,high){
  let first=low;
  let second=mid+1;
  let List=[];

  while(first<=mid &&second<=high){
    if(arr[first]<=arr[second]){
      List.push(arr[first]);
      first++;

    }
    else{
      List.push(arr[second]);
      second++;
    }
  }
  while(first<=mid){
    List.push(arr[first]);
    first++;
  }
  while(second<=high){
     List.push(arr[second]);
    second++;

  }
  for(let i=low;i<=high;i++){
    array[i]=List[i-low];
  }
}
let array=[10,2,3,12,32,0,0,2,1,2,0,1,-1];
let intlow=0;
let inHigh=array.length-1;

merge(array,intlow,inHigh)
console.log(array);
