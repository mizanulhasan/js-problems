function animal(depth){
var depth = 22;
var animal = 0;
if(depth <= 10){
    animal = depth * 50;
    }else if(depth <= 20){
        var firstPart = 10 * 50;
        var remaining = depth - 10;
        var secondPart = remaining * 100;
        animal = firstPart + secondPart;
    }else{
        var firstPart = 10 * 50;
        var secondPart = 10 * 100;
        var remaining = depth - 20;
        var thridPart = remaining * 300;
        animal = firstPart + secondPart + thridPart;
    } return animal;

}

var result = animal(22);
console.log(result);