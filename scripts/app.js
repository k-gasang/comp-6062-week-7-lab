console.log('JS loaded!!');

let inputNum = document.querySelector("#numberInput");

inputNum.addEventListener("input", function(){
    if(inputNum.value <= -10 || inputNum.value >= 10)
    {
        alert("The number should be between -10 and 10");    
    }

});

const fruit = {
    name: "Mango",
    color: "Yellow",
    taste: "Sweet",
};

let nameFruit = document.querySelector("#fruitName");
let colorFruit = document.querySelector("#fruitColor");
let tasteFruit = document.querySelector("#fruitTaste");

nameFruit.innerHTML = `Name: ${fruit.name}`;
colorFruit.innerHTML = `Color: ${fruit.color}`;
tasteFruit.innerHTML = `Taste: ${fruit.taste}`;