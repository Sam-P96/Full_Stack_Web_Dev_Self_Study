let test = true;

let counter = 0;

do{
    if (counter == 3){
        test = false;
        break;
    }
    console.log(counter)
    counter += 1
} while(test)