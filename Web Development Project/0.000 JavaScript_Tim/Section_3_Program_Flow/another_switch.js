let temp = 500

switch(temp){
    case 100:
        console.log("Its 100")
    break;
    case 200:
        console.log("Its 200")
    break;
    case 300:
        console.log("Its 300")
    break;
    default:
        console.log("Its not 100, 200, or 300")
    break;
}

switch(true){
    case temp > 1000:
        console.log("Its more than 1000")
    break;
    case temp > 500:
        console.log("Its more than 500")
    break;
    case temp > 300:
        console.log("Its more than 300")
    break;
    default:
        console.log("Its somewhere between 0 and 300.")
    break;
}