
function sumArguments(a) {
    return function (b){
        return a + b;
    };
}

console.log(sumArguments(5)(2));


