for(let i = 0; i < 5; i++){
    console.log(`The loop ran ${i+1} times`)
}

// running backwards, remember upto, but not including still applies.
console.log("")
for(let i = 5; i > 0; i--){
    console.log(`The loop ran ${i} times`)
}

console.log()
for(let i = 1; i <=5; i++){
    console.log()
    for(let i = 1; i <=3; i++){
        console.log(`The inner loop has run ${i} times`)
    }
    console.log(`The outer loop has run ${i} times`)
}

// lol