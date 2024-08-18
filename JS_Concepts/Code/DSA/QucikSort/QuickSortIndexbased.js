function qucikSort(arr,low,high){
  let partitionIndex=quickMerge(arr,low,high);
  quickSort(arr,low,partitionIndex-1,);
  quickSort(arr,partitionIndex+1,high);  
  quickMerge(arr,low,high);
  
}
function quickMerge(arr,low,high){
  let pivot=arr[low];
  while(low<high){
    if(arr[low]<=pivot){
      low++;
    }
    if(arr[high])
  }

}