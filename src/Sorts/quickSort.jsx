let sortedArray = []; // // Global array storing the results.

/**
 * Function that take the left most element as the pivot and places
 * the pivot element to the correct location in the sorted array.
 * @param arrBars - The copy of the array.
 * @param low - The lowest index element.
 * @param high - The highest index element.
 * @returns - The pivot.
 */
function partition(arrBars, low, high) {
    const pivot = low;
    let j = low;

    for (let i = low + 1; i <= high; i++) {
        sortedArray.push([i, pivot]);
        if(arrBars[i] < arrBars[pivot]) {
            j += 1;
            const temp = arrBars[i];
            arrBars[i] = arrBars[j];
            arrBars[j] = temp;
            sortedArray.push([i, j, arrBars.slice()]);
        }
    }
    const temp = arrBars[pivot];
    arrBars[pivot] = arrBars[j];
    arrBars[j] = temp;

    sortedArray.push([pivot, j, arrBars.slice()]);
    sortedArray.push([null, null, null, j]);

    return j;
}

/**
 * Utility function that computes quick sort.
 * @param arrBars - The copy of the array.
 * @param low - The lowest index element.
 * @param high - The highest index element.
 */
function quickSortHelper(arrBars, low, high) {
    if(low >= high) {
        if(low === high) {
            sortedArray.push([null, null, null, low]);
        } else {
            return;
        }
    } 
    const pivot = low + Math.floor(Math.random() * (high - low));

    const temp = arrBars[low];
    arrBars[low] = arrBars[pivot];
    arrBars[pivot] = temp;
    sortedArray.push([low, pivot, arrBars.slice()]);

    const index = partition(arrBars, low, high);

    quickSortHelper(arrBars, low, index - 1);
    quickSortHelper(arrBars, index + 1, high);
}

/**
 * Function that displays the sorted results of Quick Sort.
 * @param arr - The array.
 * @returns - The sorted array.
 */
export default function quickSort(arr) {
    const arrBars = arr.slice();
    const n = arrBars.length - 1;
    sortedArray = [];
    
    quickSortHelper(arrBars, 0, n);
    
    return sortedArray;
}