// Create for loop 

for (let i = 1; i <= 5; i++) {
    if (i == 2) {
        continue;
    }
    if (i == 3) {
            for (let i = 1; i <= 3; i++) {
                console.log("inner")
            }
        }
        if (i != 3) {console.log(`Its now ${i}`)
        }
}

console.log("post")