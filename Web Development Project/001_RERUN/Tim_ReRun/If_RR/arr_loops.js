let shoppingList = ["Eggs", "Milk", "Bread", "Cereal", "Soda"];

for (let item of shoppingList){
    console.log(item);
}

shoppingList.forEach(function(items, index){
    console.log(index + " " + items)
});