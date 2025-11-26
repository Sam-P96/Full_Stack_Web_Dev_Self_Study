let calculation = (num1) => {
    let result = num1;
    return{
        add: function(num2){
            result += num2;
        },
        subtraction: function(num2){
            result -= num2;
        },
        multiplication: function(num2){
            result *= num2;
        },
        division: function(num2){
            result /= num2;
        },
        getResult: function(){
            return result;
        }
    }
}

let myCalc = calculation(0);
myCalc.add(43)
console.log(myCalc.getResult());
myCalc.multiplication(1010)
console.log(myCalc.getResult())