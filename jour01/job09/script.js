function tri(numbers, order) {
    if (order === "asc") {
        return numbers.toSorted();
    } else if (order === "desc") {
        return numbers.toSorted().toReversed();
    }
}