let user = "John Doe";
console.log(user);
let student = "Natallia";
console.log(student);
user = student;
// Переменная 'user' перезапишется
console.log(user);
console.log("-------")

let test = 1;
test+=1;
test+='1';
//21
console.log(test);

test-=1;
//20
console.log(test);

test= Boolean(test);
//true
console.log(test);
console.log("-------")


let a = [2, 3, 5, 8];
let mas1=0;
for(let i=0;i<a.length;i++){
    mas1+=a[i];
}
console.log(mas1);
console.log("-------")

let b = [2, 5, 8, 15, 0, 6, 20, 3];
for(let i=0;i<b.length;i++){
    if(b[i]>5 && b[i]<10){
        console.log(b[i])
    };
}

console.log("-------")
for(let i=0;i<b.length;i++){
    if(b[i]%2===0 && b[i]!=0){
        console.log(b[i])
    };
}

   // Дан массив [2, 5, 8, 15, 0, 6, 20, 3]. С помощью цикла for и оператора if выведите в консоль четные элементы массива.
