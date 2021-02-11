// var name = [3, 6, 2, 7, 2, 3, 7, 6, 3, 4, 4,]
// var uniqueName = [];

for(i = 0; i < name.length; i++){
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if(index  == -1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);

// function add(a, b){

//     return a + b;

// }

// console.log(add("adam" + "eve"));