//화살표 함수 사용법 연습
let a = function () { 
    return new Date()
}

a = () => {
    return new Date()
}

a = () => new Date()


let b = function (a) { 
    return a * a
}

b = (a) => {
    return a * a
}

b = (a) => a * a


let c = function(a, b) {
    return a + b
}
 
c = (a,b) => {
    return a + b
}

c = (a,b) => a + b


let d = function(a, b) {
    console.log(a + b)
}

d = (a, b) => {
    console.log(a+b)
}

d(1,2)

// 직관적이고 this 사용에 있어서 장점이 있다