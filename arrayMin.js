var num = [12, 45, 65, 21, 6, 68];
var small = num[0];
for(i=0; i<num.length; i++){
    var result = num[i];
        if( result < small){
            small = result;
        }
}
console.log(small);

// var numbers = [12, 45, 65, 21, 6, 68];

// var smallest = numbers[0];

// for(var i = 0; i < numbers.length; i++){

//     var num = numbers[i];

//     if(num < smallest){

//         smallest = num;

//     }

// }

// console.log(smallest)