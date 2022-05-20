/**
 * Function that is comparison based sorting algorithm on the current key element
 * compared to the previous elements from least to greatest.
 * @param arr - The array to be sorted.
 * @returns - The sorted array from least to greatest.
 */
 export default function insertionSort(arr) {
    const arrBars = arr.slice();
    const sortedArray = [];
    const n = arrBars.length;
    
    var key;
    for (var i = 1; i < n; i++) {
        key = arr[i];
        var j = i - 1;
        while (j >= 0 && arrBars[j] > key) {
            const temp = arrBars[j];
            arrBars[j] = arrBars[j+1];
            arrBars[j+1] = temp;
            sortedArray.push([j, j + 1]);           
            sortedArray.push([j, j + 1, arrBars.slice()]);
            j -= 1;
        }
        arr[j+1] = key;
    }
    for (i = 0; i< n; i++) {
        sortedArray.push([null, null, null, i]);
    }
    return sortedArray;
}