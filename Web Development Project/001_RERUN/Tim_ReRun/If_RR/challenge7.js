function ATM(name, oBalance){
    let accountName = name
    let balance = oBalance
    return {
        deposit: function(money){
            if (money > 0){
                balance += money
            } else {
                console.log("Not enough money")
            }
           
        },
        withdraw: function(money){
            if (money < balance){
                balance -= money
            } else {
                console.log("Trying to take too much. " + `You only have ${balance}`)
            } 
        
        },
        getAccInfo: function(){
            console.log(`Account Name: ${accountName}`)
            console.log(`Balance ${balance}`)
        }
    }
}

let Gemma = ATM("James", 0)
Gemma.getAccInfo()
Gemma.deposit(100)
Gemma.getAccInfo()
Gemma.deposit(0)
Gemma.withdraw(900000)
Gemma.withdraw(5)
Gemma.getAccInfo()