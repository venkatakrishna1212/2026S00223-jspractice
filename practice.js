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

// const cleanSpaces =text => text.trim();
// const fixWord     =(text,oldW,newW) => text.replace(oldW,newW);
// const fixAllWords =(text,oldW,newW) => text.replaceAll(oldW,newW);   
// const cutText     =(text,start,end) => text.slice(start,end);

// console.log(cleanSpaces("clean me"));
// console.log(fixWord("good day","bad","good"));
// console.log(fixAllWords("bad day","bad","good"));
// console.log(cutText("Javascript",4,10));

// ////// ******** Function With Multiple Parameter ********** //////

// const add = (a,b) => a+b;
// console.log(add(5,10));

//  const multiply = (x,y) => x*y;
// console.log(multiply(3,2));

// function getFullname (Fn,Ln){
//     return `${Fn} ${Ln}`;
// }
// console.log(getFullname("Hello! This is Venkat.", "and I am from Vijayawada"));

// function greet(name = "friends"){
//     return `hello, ${name}!`;
// }
// console.log(greet());
// console.log(greet("venkat"));
// console.log(greet(""));

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

// function bookTicket(age,rating){
//     if(age === undefined && rating === undefined){
//         return "Missing arguments"}
//         if(age<0){return "invalid age";}

//         if(age >=20 && rating ==="A"){
//             return "ticket booked";}

//         if(age <=20 && rating ==="U"){
//             return "ticket booked";}
        
//         return "not allowed";
           
        
// }
// console.log(bookTicket(20,"A"));
// console.log(bookTicket(15,"A"));
// console.log(bookTicket(15,"U"));
// console.log(bookTicket());
// console.log(bookTicket(-1,"U"));

// function purse(balance,price){
//     if(balance < 0){
//         return `no balance`
//     }
//     if(price <=0){
//         return`invalid price`
//     }
//     if(balance < price){
//         return`insufficent balance`
//     }
//     return`purchase successfull`
// }
// console.log(purse(100,0));
// console.log(purse(100,200));
// console.log(purse(0,200));
// console.log(purse());
// console.log(purse(-1,200));

////****** Function into Function *******//// 

// function applyDiscount(amount){
//     return amount - amount *0.10;
// }
// function addGST(amount){
//     return amount+amount *0.05; 
// }
// function finalBill(amount){
//     let afterdiscount = applyDiscount(amount);
//     let total = addGST(afterdiscount);
//     return total;
// }
// console.log(finalBill(2000)); 

// function strikeRate(runs,balls){
//     return runs/balls *100;

// }
// function playerType(runs,balls){
//     if (runs === undefined || balls === undefined){
//         return "misssing Arguments";
//     }
//     if (runs < 0 || balls <=0){
//         return "Invalid input";
//     }

//     let rate = strikeRate(runs,balls);{

//     }
//     if(rate >=150){
//         return "power hitter"
//     }
//     else if(rate >=100){
//         return "steady batter"
//     }
//     else{
//         return "slow starter"
//     }

// }
// console.log(playerType(60,30));
// console.log(playerType(45,40));
// console.log(playerType(20,40));
// console.log(playerType(10,0));
// console.log(playerType());


// function damage(attack,shield){
//     return (attack-shield);
// }
// function healthlife(health,attack,shield){
//     return (health-damage(attack,shield));
// }
// function battleresult(health,attack,shield){
//     let game = healthlife(health,attack,shield);
//     if (game < 0){

//     }
// }

////*********Array *********////

const fruits =["mango","banana","apple"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits.length);

const weekdays =["monday","tuesday","wednesday","thusday","friday","saturday","sunday"];
console.log(weekdays);
console.log(weekdays[0]);
console.log(weekdays[1]);
console.log(weekdays[2]);
console.log(weekdays[3]);
console.log(weekdays[4]);
console.log(weekdays[5]);
console.log(weekdays[6]);
console.log(weekdays[7]);
console.log(weekdays.length-6);

const present = ["asha","ravi","meena","john","fatima"];
console.log(`total present: ${present.length}`); 

const cart =["pen","notebook"];
console.log(cart);
cart.push("eraser");
console.log(cart);

/////******pop*******/////
/////******const removed = arrayName.pop(); => remove from the end **********/////

const removed = cart.pop();
console.log(removed);
console.log(cart);

const tiffins = [];
console.log(tiffins);
tiffins.push("idly", "dosa","coffee",);
console.log(tiffins);

const back = tiffins.pop();
console.log(back);
console.log(tiffins);

tiffins.push("tea");
console.log(tiffins); 

///////******Foreach*******///////
// arrayName.forEach((item,index)=>{
//     //code goes here
// })

// const names=["venkat","abhinav","sameer","hruday","akram"];
// console.log(names);

// names.forEach(function(names) {
//     console.log(`hi,hello ${names}`)
// })


// const prices =[120,45,80,250];
// console.log(prices);

// prices.forEach(function(prices,index){
//     console.log(`item ${index +1}:Rs. ${prices}`)
// })

//////*******Map*******///////

// const withTax = prices.map((prices)=> prices *1.18);
// console.log(prices);
// console.log(withTax);

//      /////**problems**//////
//      const celsius =[0,25,30,37,100];
//     //  console.log(celsius);
//      const temp = celsius.map((celsius)=>celsius *9/5+32);
//      console.log(celsius);
//      console.log(temp);

       ///////********Filter********///////

       const ages = [19,25,17,45,15];
       const adults = ages.filter((age)=>age >=18);
       console.log(adults);

       const seniors = ages.filter((age)=>age >=60);
       console.log(seniors);
       console.log(ages);
           
             /////problem///////

    //    const password = ["abc123","sunshine99","qwerty","MyPass@2026","letmein!"];
    //    const strong = password.filter((n)=>n.length>=8);
    //    console.log(strong);

    //     const weak = password.filter((n)=>n.length<8);
    //     console.log(weak);

        /////////*******Find*******////////
       
    //    const password = ["abc123","sunshine99","qwerty","MyPass@2026","letmein!"];
    //    const strong = password.find((n)=>n.length>=8);
    //    console.log(strong);

    //    const weak = password.find((n)=>n.length<8);
    //    console.log(weak);

    //    const books = ["python basics","learn javascript","eloquent javascript","c programming"];
    //    const java= books.find((v)=>v.includes ("javascript"));
    //    console.log(`found:${java}`);

    //    const basics= books.find((v)=>v.includes ("rust"));
    //    console.log(basics);


       /////////******Object*******////////

       const students = {
        name:"venkat",
        age:20,
         course:"javascript",
        ishosteller:true,
        skills:["HTML","CSS"]
    }
    console.log(students.name);


    const id={
        name:"Venkat",
        rollno:12,
        dept:"CSE",
        year:2,
        Hostel:true
    }

    console.log(id);
    console.log("----------ID CARD----------");
    console.log(`name:${id.name}`);
    console.log(`rollno:${id.rollno}`);
    console.log(`dept:${id.dept}`);
    console.log(`year:${id.year}`);
    console.log(`Hostel:${id.Hostel}`);
    console.log("*-------------------------------------*")
      
    ///////*******objecct*******////////

     const studentss =[
        {name:"venkat",age:20,course:"javascript"},
        {name:"abhinav",age:21,course:"python"},
        {name:"hruday",age:22,course:"html"},
        {name:"akram",age:23,course:"css"},
     ]

     console.log(studentss);
     console.log(studentss[0].name);
     console.log(studentss[0].age);
     console.log(studentss[0].course);

     studentss.forEach((s)=>console.log(`${s.name} ${s.age} ${s.course}`));

     const  product=[
        {name:"godday",price:10,category:"food"},
        {name:"chair",price:1000,category:"funiture"},
        {name:"phone",price:10000,category:"electronics"},
        {name:"bat",price:100,category:"game"},
        {name:"soap",price:20,category:"bath"},
    
     ]
     product.forEach((a)=>console.log(`${a.name} ${a.price} ${a.category}`));
     
     const obb =product.filter((n)=>n.price>=500);
     console.log(obb);
     
     const opp= product.filter((n)=>n.price<=500);
     console.log(opp);

     const opps = product.map((n)=>n.name);  
     console.log(opps);
     
    //  console.log(product);
    







       




















