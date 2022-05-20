let sortedArray = []; // Global array storing the results.

/**
 * This function merges the sub arrays.
 * @param arrBars - The copy of the array
 * @param left - The left sub array
 * @param mid - The middle of an array
 * @param right - The right sub array
 */
function merge(arrBars, left, mid, right) {
    let i = left;
    let j = mid + 1;
    const arr = [];

    // Compares both side of the array
    while((i <= mid) && (j <= right)) {
        sortedArray.push([i, j]);
        if(arrBars[i] <= arrBars[j]) {
            arr.push(arrBars[i++]);
        } else {
            arr.push(arrBars[j++]);
        }
    }

    // Check if there are remaining elements in array and push to sorted array.
    while(i <= mid) {
        sortedArray.push([i]);
        arr.push(arrBars[i]);
        i++;
    }

    while(j <= right) {
        sortedArray.push([null, j]);
        arr.push(arrBars[j]);
        j++;
    }
    
    // Swap elements and push the copy of the resulting swapped array
    for(i = left; i <= right; i++) {
        arrBars[i] = arr[i - left];
        sortedArray.push([i, null, arrBars.slice()]); 
    }
}

/**
 * Utility function to compute mergesort
 * @param arrBars - The copy of the array.
 * @param left - The left sub array.
 * @param right - The right sub array.
 */
function mergeSortHelper(arrBars, left, right) {
    if(left >= right) {
        return;
    }
    const mid = Math.floor((left + right) / 2);

    mergeSortHelper(arrBars, left, mid);
    mergeSortHelper(arrBars, mid + 1, right);
    
    merge(arrBars, left, mid, right);
}

/**
 * Function that displays the sorted results of Merge Sort.
 * @param arr - The array.
 * @returns - The sorted array.
 */
export default function mergeSort(arr) {
    sortedArray = [];
    const arrBars = arr.slice();
    const n = arrBars.length - 1;
    
    mergeSortHelper(arrBars, 0, n);
    
    for (let i = 0; i < arrBars.length; i++) {
        sortedArray.push([null, null, null, i]);
    }
    return sortedArray;
}