
function sum1(a) {
    return function (b){
        return a + b;
    };
}

console.log(sum1(5)(2));


