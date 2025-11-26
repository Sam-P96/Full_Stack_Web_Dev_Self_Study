function add(num1){
    return function(num2){
        return num1 + num2
    }
}

let add4 = add(4);
console.log(add4(6));

console.log(add4(13));