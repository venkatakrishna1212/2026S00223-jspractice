console.log("Hello World!");

console.log(2+2);
console.log("hello World");
console.log(3*2);
const a=10;
const b=20;
console.log(a+b);

let v=20;
let d=10;
console.log(v*d);

score=100+200+300;
console.log(score);

venkat=20;
abhinav=30;
console.log(venkat+abhinav);

 const name="venkat";
 let age=20;
 const is_student=true;
 let city=null;
 let village=null;
 console.log(typeof name);
 console.log(typeof age);
 console.log(typeof is_student);
 console.log(city);
 console.log(village);  

 console.log(`My Name Is ${name} and I am ${age}`);
 console.log(`I am From ${city} `);
 console.log(`next Year is ${2026+1}`);
 console.log(`I am a Avarage Student ${is_student}`);

 const nani=10;
 const pandu=20;
 console.log(nani+pandu);
 console.log(nani*pandu);
 console.log(nani/pandu);    
 console.log(nani-pandu);
 console.log(nani%pandu);   

 const c="5";
 const e=5;
 const f=5;
 const h=5;

 console.log(c===e);
 console.log(e===c);
 console.log(c===h);
 console.log(f==e);
 console.log(h==e);
 console.log(f!==e);
 console.log(e!=h);

//  let raining=true;

//  if(raining){console.log("umberella needed");}

//  else{console.log("no umberella  needed");}

//  let points = 72;
//   if (points >= 90) { console.log("Grade: A");
// }
// else if (points >= 75) {
//     console.log("Grade:B");
// }
// else if(points >=78){console.log("Grade:C");}
//  else{ console.log("Grade:F" );}

//  let username="venkat";
//  if (username){
//     console.log("welcome");
//  }
//  else{ console.log(" please enter your name");}

// //  let weight="20";
// //  if (weight){
// //     console.log("Age");
// //  }
// // else{ console.log("please enter your weight");}

// let number=10;
// let chinni=number%2===0? "even":"odd";
// console.log(chinni);

// let visiterAge=15;
// console.log(`your ticket price
//      is ${visiterAge >18 ? 100 : 200 }.`);

//      console.log(`your Age is
//          ${visiterAge >14 ? 100: 200}.`);

// const num = 5;       
// for(i=1; i<=5; i++ )
// {console.log(i);}

// const fah = 7;
// for (i=1; i<=10; i++)
// {console.log(fah*i);}

// const ma = 10;
// for (i=1; i<15; i++)
// { console.log(ma-i);}

// let count = 0;
// while (count < 5){
//     console.log(`count is ${count}`);
//     count ++;
// }  

// for (let i= 1; i<=10; i++){
//     if (i == 6){
//         break; //stop the loop entirely once i is 6
//     }
//     console.log(i); 

// }
// let counts = 5;
// while (count >= 1){
//     console.log(count);
//     count --;

// console.log("go!");}

// for (let i=1; i<=20; i++){

//     if(i % 3 ===0)
//     {continue;}
// console.log(i);

// }
// console.log("aa")
// for(let i=1; i<=100; i++) {
//     if(i >20 && i%5 ===0) {
//          console.log(i)
//         break;
//     }
    
// }

// function Student(name) {
//     return `hello this is, ${name}!`;

// }
// console.log(Student("venkat"));
// console.log(Student("nani"));

// const x=10;
// const y=20;
// function add(x,y)
// {
//     return x+y;
// }
// const result=add(10,20);
// console.log(result)

// function square(num){
//     return num**2
//     return num*num
// }
// console.log(square(10));
// function numbers(n) {
//     if(n%15 === 0){
//         return "hello";
//     }    
//     else if(n%5 === 0){
//         return "hii";
//     }
//    else if(n % 3 === 0){
//         return "welcome";

//     }else{
//         return String(n);
//     }
// }
// for(let i=1; i<=20; i++){
//     console.log(numbers(i)); 
// }
 function student(name) {
   return `${name}`;
    
}
console.log(student("student name:venkat"));

// console.log("marks:80");
let marks=80;

function student1(marks1){


if (marks1 >=75)
{
   return "Grade: A"
        
    }

    else if(marks1 >=60)
        {
        return "Grade:B"
    }
    else if(marks1 >=40)
        {
         return "Grade: C"
    
    }
    else{
         return "Grade: F "
       
    }
}
console.log(student1(marks));
console.log(`marks:${marks}`);


let Attendence=80;
function regular(Attendence){

    if(Attendence >= 50){
        
        return "Attendance:satisfied"
    }

else if(Attendence <= 49){
    return "Attendance:unsatisfied"

}

}

console.log(regular(Attendence));
console.log(`Attendence:${Attendence}`);

// function double (n){
//     return n*2;
// }
// console.log(double(5));
// console.log(double(10));
// console.log(double(20));

// const multiply=(n) => n*2;
// console.log(multiply(200));

// const addition=(n) => n+5;
// console.log(addition(5));

// const sub=(n) => n-10;
// console.log(sub(3));

// const greetuser = (name) => {
//     return `welcome, ${name}!`;
// }
// console.log(greetuser("krishna"));

// function shout(message){
//     return message.toUpperCase();
// }
// console.log(shout("hi, hello!"));

// function gettingname (Fn,Ln){
//     return Fn+Ln
// }
// console.log(gettingname("aravind", "anil"));

const cleanSpaces =text => text.trim();
const fixWord     =(text,oldW,newW) => text.replace(oldW,newW);
const fixAllWords =(text,oldW,newW) => text.replaceAll(oldW,newW);   
const cutText     =(text,start,end) => text.slice(start,end);

console.log(cleanSpaces("clean me"));
console.log(fixWord("good day","bad","good"));
console.log(fixAllWords("bad day","bad","good"));
console.log(cutText("Javascript",4,10));

////// ******** Function With Multiple Parameter ********** //////

const add = (a,b) => a+b;
console.log(add(5,10));

 const multiply = (x,y) => x*y;
console.log(multiply(3,2));

function getFullname (Fn,Ln){
    return `${Fn} ${Ln}`;
}
console.log(getFullname("Hello! This is Venkat.", "and I am from Vijayawada"));

function greet(name = "friends"){
    return `hello, ${name}!`;
}
console.log(greet());
console.log(greet("venkat"));
console.log(greet(""));

////******** Nested validation ********////

// function purchase(balance,price){
//     if(balance < 0){
//         return `no balance`
//     }
//     if(price <=0){
//         return`invalid price`
//     }
//     if(balance < price){
//         return`insufficent balance`
//     }
// }
// console.log(purchase(100,0));
// console.log(purchase(100,200));
// console.log(purchase(0,200));
// console.log(purchase());
// console.log(purchase(-1,200));

// function purse(balance,price){
//     if(balance !== undefined && price !== undefined){
//         (balance >=0) 
//             if(price >=0){
//                 if(balance >= price){
//                     return "purchase successfull";
//                 }else {return "Insufficent balance";}
//             }else{return "Inavalid price";}
        
    
// }else {return "no balance";}
// }
// console.log(purchase(100,0));
// console.log(purchase(100,200));
// console.log(purchase(0,200));
// console.log(purchase());
// console.log(purchase(-1,200));

function bookTicket(age,rating){
    if(age === undefined && rating === undefined){
        return "Missing arguments"}
        if(age<0){return "invalid age";}

        if(age >=20 && rating ==="A"){
            return "ticket booked";}

        if(age <=20 && rating ==="U"){
            return "ticket booked";}
        
        return "not allowed";
           
        
}
console.log(bookTicket(20,"A"));
console.log(bookTicket(15,"A"));
console.log(bookTicket(15,"U"));
console.log(bookTicket());
console.log(bookTicket(-1,"U"));

function purse(balance,price){
    if(balance < 0){
        return `no balance`
    }
    if(price <=0){
        return`invalid price`
    }
    if(balance < price){
        return`insufficent balance`
    }
    return`purchase successfull`
}
console.log(purse(100,0));
console.log(purse(100,200));
console.log(purse(0,200));
console.log(purse());
console.log(purse(-1,200));

////****** Function into Function *******//// 

function applyDiscount(amount){
    return amount - amount *0.10;
}
function addGST(amount){
    return amount+amount *0.05; 
}
function finalBill(amount){
    let afterdiscount = applyDiscount(amount);
    let total = addGST(afterdiscount);
    return total;
}
console.log(finalBill(2000)); 











