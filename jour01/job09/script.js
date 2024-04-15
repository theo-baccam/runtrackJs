function tri(numbers, order) {
    if (order === "asc") {
        return numbers.toSorted(function(a, b) {
            return a - b
        });
    } else if (order === "desc") {
        return numbers.toSorted(function(a, b) {
            return b - a
        })
    }
}

let array = [92, 51, 526, 13, 624]
console.log(tri(array, "asc"))
console.log(tri(array, "desc"))