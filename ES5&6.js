// "use strict"
// a=5;
// console.log(a);


// var Fname="Alan";
// console.log(Fname.length);
// console.log(typeof(Fname));

// var data ="This is a txt message"
// // console.log(data.length);
// // console.log(data.indexOf('txt'));
// // console.log(data.replace("txt,text"));
// // console.log(data);
// // console.log(data.split(','));
// console.log(data)
// // console.log(data.length)
// // console.log(data.trim());
// console.log(data.trimStart())

// let fruits=["Apples","Mango","Orange","Grapes"]
// console.log(Array.isArray(fruits));//checking if the fruits is an array
// //foreach
// fruits.forEach(function(item){
//     console.log(item)
// });

// let numb=[20,30,40,50];
// numb.forEach(function(item,ind){
//     numb[ind]=item<50
// })
// console.log(numb)

// var obj ={"name":"Abina","age":3};
// console.log(obj)

// var obj1 =('{"name":"Abina","age":3}');
// console.log(obj1)

// var obj2 =JSON.parse('{"name":"Abina","age":3}');
// console.log(obj2)
// var obj3 = JSON.stringify(obj2);
// console.log(obj3)

// write a function to add two numbers

// function sum(a,b){
//     var s= a+b;
//     console.log(`The sum is ${s}`);
// }
// sum(10,20);


// var add= (c,d)=>{ //This is known as arrow function
//     console.log(`This sum is ${c+d}`);

// }
// add(10,6)


// var sub=(e,f)=>{
//     console.log(`The difference is ${e-f}`);
// }
// sub(34,20)

// //spread operator
// var a=[5,6,7,8,10];
// var b=[35,87];
// var c=[...a,...b];
// console.log(c);
// var d=[2,3,...b];
// console.log(d)

//Array destructuring
var[q,r,s]=[2,3,4];
console.log(r);
var [p,,w]=[2,5,8];
console.log(w);
var[h,,j,...l]=[1,2,3,4,5,6,7]
console.log(l);
