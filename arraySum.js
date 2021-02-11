
/*var numbers = [45, 65, 78, 12, 3, 54, 65];

function getArrayTotal(numbers){
    var sum = 0;
    for (i = 0; i < numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
    
}

var result = getArrayTotal(numbers);
console.log(' Total Sum: ', result);*/


// var numbers = [1,2,3,4,5,6,7,8,9];
// function func(numbers){
//     var sum = 0;
//     for(i = 0; i < numbers.length; i++){
//         var element = numbers[i];
//         sum = element + sum;
//     }
//     return sum;
// }
// var result = func(numbers);
// console.log('Sum: ', result);

// function funcSum(numbers){
//     var sum = 0;
//     for(i = 0; i < numbers.length; i++){
//         var element = numbers[i];
//         sum = sum + element;
//     }
//     return sum;
// }
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var result = funcSum(numbers);
// console.log('Show the sum: ', result);

var friends = ["Alu", "Bulu", "culu", "dulu", "fulu"];
var allNames = '';
for (i = 0; i < friends.length; i++){
    var element = friends[i];
    allNames = allNames + element;
}
console.log(friends);