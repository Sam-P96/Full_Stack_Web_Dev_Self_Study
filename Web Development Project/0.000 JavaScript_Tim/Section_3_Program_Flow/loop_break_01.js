for(let i = 1; i <= 5; i++){
    if(i == 3){
        continue; //this is the same as python's loop
    }
    console.log(`This is loop number ${i}`)
}

console.log()

for(let i = 1; i <= 5; i++){
    if(i == 3){
        break; //this is the same as python's loop
    }
    console.log(`This is loop number ${i}`)
}

// console.log(i) you cannot do this cus i is created and destroyed in the loop. 