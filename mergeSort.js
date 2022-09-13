const mergeSort = (arr) => {
    if(arr.length < 2 ) return arr;
    const midIndex = Math.floor(arr.length/2);
    const leftArr = arr.slice(0,midIndex);
    const rightArr = arr.slice(midIndex, arr.length);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

const merge = (leftArr, rightArr) => {
    const resultArr = [];
    let leftArrIndex = 0, rightArrIndex = 0;
    while(leftArrIndex < leftArr.length && rightArrIndex < rightArr.length){
        if(leftArr[leftArrIndex] < rightArr[rightArrIndex]){
            resultArr.push(leftArr[leftArrIndex]);
            leftArrIndex++;
        } else {
            resultArr.push(rightArr[rightArrIndex]);
            rightArrIndex++;
        }
    }
 while(leftArrIndex<leftArr.length){
     resultArr.push(leftArr[leftArrIndex++]);
 }
 while(rightArrIndex < rightArr.length){
     resultArr.push(rightArr[rightArrIndex++]);
 }
 return resultArr;
}
console.log(mergeSort([1,56,13,4]));