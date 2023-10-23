function bubbleSort(arr) {
    const len = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                
                // Swap the elements
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

//Test
const testArray = [5, 2, 9, 3, 6];//unsorted
const sortedArray = bubbleSort(testArray);

console.log("Sorted Array:", sortedArray);
  