let welcome = function(firstName, lastName) {
    console.log(`Welcome, ${firstName}, or should I call you Mr. ${lastName}?`)
}

welcome("Sam", "Smith")
welcome("John", "Dicks")

let sum = function(num1, num2){
    console.log(num1 + num2)
}

sum(2, 3)

let mi_km = function(mi){
    let km = mi / 0.62137
    console.log(`${mi} mi is ${km} km`)
}

mi_km(60)
mi_km(30)

function run(number){
    for (let i = 1; i <= number; i++){
        console.log(`${i} out of ${number}`)
    }
}

run(6)