// CHALLENGE!! 

let sum = 0
for (let i = 1; i <= 10; i++) {
    let product = i * 5
    console.log(product)
    sum += product
}

console.log(sum)

let sum2 = 0
for (let i = 1; i <= 10; i++) {
    if (i != 4 && i != 7) {
        let product = i * 5
        console.log(product)
        sum += product
        }
}

console.log(sum2)