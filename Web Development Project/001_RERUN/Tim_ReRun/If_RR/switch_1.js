// Variable to hold number called num
let num = 31; 

// this looks if case is true
switch (true) {
    case num == 1: 
        console.log("Its 1")
    break;
    case num == 2:
        console.log("Its 2")
    break;
    case num == 3:
        console.log("Its 3")
    break;
    case num == 4: 
        console.log("Its 4")
    break;
    case num > 40:
        console.log("Its not 1-4, and its greater than 40");
    break;
    default: 
    console.log("Its not 1, 2, 3, or 4 for sure..")
}

// its a little different, this looks if num is case
switch (num) {
    case 1:
        console.log("its 1!!")
    break;
    case 3:
        console.log("its 3!!")
    break;
    default: 
        console.log(`xxx: its ${num}`)
}