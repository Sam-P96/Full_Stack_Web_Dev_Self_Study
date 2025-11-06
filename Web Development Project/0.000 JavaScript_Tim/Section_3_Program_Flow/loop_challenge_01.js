let sum = 0

for (let i = 1; i <=10; i++){
    let product = i * 5
    console.log(`${i} x 5 = ${product}`)
    sum += product
}
console.log(sum)

console.log()
for (let i = 1; i <= 10; i++){
    if ((i === 4) || (i === 7)){
        console.log("Not You.")
        continue;
    }
    else {
        console.log(`This is loop ${i}`)
    }
}