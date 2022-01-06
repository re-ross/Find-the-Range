let array = [28, 43, -12, 30, 4, 0, -36]
let largest = array[0];
let smallest = array[0];

for (i = 0; i < array.length; i++) {
    if (array[i] > largest) {
        largest = array[i]
    } else if (array[i] < smallest) {
        smallest = array[i]
    }
}
console.log(largest, smallest);