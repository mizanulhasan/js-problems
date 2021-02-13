var ami = [17, 55, 65, 'blue'];
var ami2 = {
    age: 17,
    weight: 55,
    height: 65,
    color: 'blue'
}
var lookingFor = 'age'
var myAge = ami2[lookingFor];
ami2.weight = 95;
ami2['weight'] = 100;
ami2[lookingFor] = 95;
console.log(ami2);