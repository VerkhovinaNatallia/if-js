/*let user = "John Doe";
console.log(user);
let student = "Natallia";
console.log(student);
user = student;
// Переменная 'user' перезапишется
console.log(user);

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



let a = [2, 3, 5, 8];
let mas1=0;
for(let i=0;i<a.length;i++){
    mas1+=a[i];
}
console.log(mas1);


let b = [2, 5, 8, 15, 0, 6, 20, 3];
for(let i=0;i<b.length;i++){
    if(b[i]>5 && b[i]<10){
        console.log(b[i])
    };
}


for(let i=0;i<b.length;i++){
    if(b[i]%2===0 && b[i]!=0){
        console.log(b[i])
    };
}
*/



function palindrome(string){
    string= string.toLowerCase();
    return string===string.split("").reverse().join("")
}



const min = function (a,b){
    if(a>b){
        return b
    }
    else{
        return a
    }
};

const max = function (a,b){
    if(a<b){
        return b
    }
    else {
        return a
    }
};

const minT =(a,b)=> a > b ? b : a;

const maxT =(a,b)=> a > b ? a : b;





let random =[7,10,23,40,54,60,67,70,88,100];

const zero = function (){
    for(let i=0; i<random.length; i++){
        if(random[i]%10===0 && random[i]%100!==0){
            random[i]=(random[i]/10)+'zero';
        }
        else if(random[i]%100===0){
            random[i]=(random[i]/100)+'zerozero';
        }
        else{
            random[i]=random[i];
        }
    }
}

zero(random);
console.log(random);

