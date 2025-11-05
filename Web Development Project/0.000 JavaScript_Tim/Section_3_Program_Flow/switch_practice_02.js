let num = 33;

//switch structure
switch (true) {
    case num === 1:
        console.log("The number is 1");
    break;
    case num === 2:
        console.log("Its 2!")
    break;
    case num === 3:
    console.log("Its 3!")
    break;
    case num === 4:
        console.log("Its 4!")
    break;
    case num > 30:
        console.log("The number is greater than 30")
    break;
    default:
        console.log(`Its ${num}`)
}