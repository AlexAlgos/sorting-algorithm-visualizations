/**
 * Function that is comparison based sorting algorithm on adjacent elements from least to greatest.
 * @param arr - The array to be sorted.
 * @returns - The sorted array from least to greatest.
 */
 export default function bubbleSort(arr) {
    const arrBars = arr.slice();
    const n = arrBars.length;
    const sortedArray = [];
    
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < (n - i - 1); j++) {
            sortedArray.push([j, j + 1]);       // append comparison results in the color yellow
            if (arrBars[j] > arrBars[j + 1]) {
                const temp = arrBars[j];
                arrBars[j] = arrBars[j+1];
                arrBars[j+1] = temp;
                sortedArray.push([j, j + 1, arrBars.slice()]); // append swapping results in the color red
            }
        }
        sortedArray.push([null, null, null, j]); // append sorted results in the color green
    }
    return sortedArray;
}