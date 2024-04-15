function fizzbuzz() {
    for (let i = 0; i <= 151; i++) {
        let output = "";

        if (i % 3 == 0) {
            output = output + "Fizz"
        }
        if (i % 5 == 0) {
            output = output + "Buzz"
        }
        if (output === "" || i === 0) {
            output = i
        }
        
        console.log(output)
    }
}

fizzbuzz()