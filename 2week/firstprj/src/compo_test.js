export function performPlus(a, b) {
    return a+b
}

export const displaySymbol = "+"

export default function performMinus(a, b){
    return a-b
}

export const user = {
    firstName: '클레이튼',
    lastName: '커쇼'
}

export function printFullName(user){
    return user.firstName + user.lastName
}

var arrPrac02 = [1,2,3,4]
console.log(arrPrac02.length)
console.log(arrPrac02)
arrPrac02 = arrPrac02.concat([5,6])
console.log(arrPrac02.length)
console.log(arrPrac02)

arrPrac02.push(7)
arrPrac02.push(8)
console.log(arrPrac02.length)
console.log(arrPrac02)
arrPrac02.pop()
console.log(arrPrac02.length)
console.log(arrPrac02)

var person = {
    name: "neko",
    gender: "male"
};

console.log(person.name, person.gender);

var key1 = 'name', key2 = 'gender';
console.log(person[key1], person[key2]);

var object = { 
    a: 1,
    b: 2
 };

for(var key in object) {
    console.log( key + '=>' + object[key] );
}