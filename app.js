//  primitive data-types in JavaScript


// primitive data-types in number

// let num = 34;
//  let num1 = 90.45;

// console.log("value of num" ,  num );
// console.log("value of num" ,  num1);

// To check the data type 
// console.log( typeof(num1));



// primitive data-types in  string
 
// let name = "asfi";
// let name1 = "hafsa";

// console.log("value of num" ,  name );
// console.log("value of num" ,  name1);




// primitive data-types in  undefined
// let x ;
// console.log(x);



// primitive data-types in  null
// let y  = null;
// console.log(y);


// primitive data-types in  Boolean

// let isclick = (false)
//  console.log(isclick)
// // To check the data type 
// console.log( typeof(isclick));



// primitive data-types in  BigInit

// let bigNum = 123422222222222222222222222222222222222n
// console.log(bigNum)



// primitive data-types in  symbols

// let sym = Symbol("Hello");
// console.log(sym);


// Non-primitive Data Types

// const student = {  
//       stdName  : "Asfiya" ,
//       FName  : "Hussain" ,
//       RollNo : 2345 ,
//       Coruse : "Web development"};

// console.log(student);

// //  To change any key value 
//   student["stdName"] = "hafsa";
//   console.log(student["stdName"]);




//  This is use for singal line Comment
/*  This is USE  for multiple line line Comment*/




// use for new line
// alert("happy coding!\n prevent this page from creating additional dialogs");

//  in documte.write we use <br> for new line
// document.write("Happy coding <br> hello javascript")

// class 5 

// Operaters In Js

// let num1 = 2; 
// let num2 = 10; 
// let num3 = 6;
// sum of Number
// console.log("sum of number =" , num1+num2+num3);
// sub of Number
// console.log("sub of number =" , num1-num2-num3)
// Multiply of Number
// console.log("multiply of number =" , num1*num2*num3);
// Divide of Number
// console.log("divide of number =" , num1/+num2/num3);
// Percentage of Number
// console.log("percentage of number =" , num3%num1);
// module of Number
// console.log( "power of num1 and num2 =",num3**num1 );

// increment & decrement
// let a = 10 ;
 // in mathmactic concept
// a = a+2; 12
 // a = a-2; 10
 // console.log(a)

// in javascript for add one we write
// let x = 20;
// x--;
// x++
// console.log(x);


// let a = 20 ;
// a++
// console.log(a); // 21
// console.log(++a);//22
// console.log(a--);//22
// console.log(a);//21


// let x = 49 ;
// console.log(x++); //49
// console.log(--x); //49 



//  let r = 12; 
//  r = r++; 
//  r--; 
//  console.log(--r); //10


//  LOOP
// for( let a=0; a<=10; a++){
//     document.write("hanadi", "<br/>")
// }

// for( let a=0; a<=20; a++){
//     if(a%2==0){
// console.log(a, " The number is even");
// }

// else{
//     console.log("The number is odd");
// }
// }


// for( let a=200; a>=0; a--){
//     if(a%2==0){
//         console.log(a, " The number is even");
//     }
//         else{
//             console.log(a, "The number is odd");
// }
// }


// for( let a=1; a<=10; a++){
// console.log(a**3);
// }


// let a= confirm("Are you sure ?");
// document.write(a);

// let Course = prompt("Enter your course name");
// let Campus = prompt("Enter your campus name");

// if(Course == "web and app development" || Course == "WMA"){
//   if (Campus == "numaish"  || Campus == "Numaish"){
//   confirm("Congratulations ! You are enrolled for this course");
//   }}


// let  course = prompt("Enter your Course name!");
// let  camp = prompt("Enter your Campus!");

// if (course=="web and app Development"|| course=="WMA") {
//     if(camp =="Numaish" || camp =="numaish" ){
//         confirm("congratsgulation !! you are enrolled in web and app development course")
//     } 
//





// array
// let arry =[1,2,3,4,5,6,7,8,9,10];
// console.log(arry[0]);



//  let student_data =["Asfiya" , "hussain" , "female" ,1234  ]
// //  console.log(student_data[0] , student_data[3]);
//  student_data.push("web and app development");
// // console.log(student_data)
// // console.log(student_data[4]);
// // console.log(student_data.length);




// let age =[]
// age[0]=23;
// age[1]=26;
// age[2]=27;
// age[3]=30
// console.log(age[2]);


//lenght to know array value
// let num =[1,2,3,4,5,6];
// document.write(num.length);

//push : add value in last of array
// let num =[1,2,3,4,5];
// (num.push(6,7));
// document.write(num);



//pop : to remove last  value
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop();
// console.log(fruits);



// let student_data =["Asfiya" , "hussain" , "female" ,1234  ];
// (student_data.pop());
// console.log(student_data);


//shift Remove first  value in array
// let num =[1 , 2 , 3 , 4 , 5];
// num.shift();
// console.log(num);


//unshift add value in start of array
// let num =[2,3,4,5,6,];
// num.unshift(1);
// console.log(num)

//Remove item
//Splice
// let cars = [ 'audi' , 'BMW', 'Bigo' , 'Civic' , 'prado'];
// cars.splice(2,1);
// console.log(cars);



// let student = ['asfiya' , 'web development' , 18 , 'fizza' ,1256 ];
// student.splice(3 , 1);
// console.log(student);


// let fruit =['apple' , 'mango' , 'orange' , 'kiwi' ,'watermelon'];
// let remove = fruit.splice(3,1);
// console.log(remove);
// console.log(fruit);

 
//Add item

//  let fruit =['apple' , 'mango' , 'orange' , 'kiwi' ,'watermelon'];
//  fruit.splice(2,1 , 'stawberry');
//  console.log(fruit);

//slice updating array
//  let animals = ['fly' , 'dog' , 'cat' ,'fox' , 'wolf'];
//  let pet = animals.slice(1,3);
//  console.log(pet);






















// Nested Lopp

// let firstName = [" Asfiya " ,"fizza " , "ayesha " , "amna " , "anaya "];
// let lastName =["hussain" , "pervaiz" , "hameed" , "dawood" , "hasnain"];
//  let fullName =[];
//  for(let i =0 ; i<firstName.length; i++){
//     for(let j=0 ;j < lastName.length ; j++){
//         fullName.push(firstName[i]+lastName[j] +"<br>");
//     }
//  }
 
//  document.write(fullName.join(" "));

// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "]; 
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullNames = [];
// for (var i = 0; i < firstNames.length; i++) { 
// for (var j = 0; j < lastNames.length; j++) {
// fullNames.push(firstNames[i] + lastNames[j] + "<br>");

// }
// }

// for (let k = 0; k < fullNames.length; k++) {
//     document.write(fullNames[k] +  "<br>");
  
    
//     }
  

// let fruit = ['mango' , 'banna' , 'cheery']
// document.write(fruit.join(" "));
// document.write(fruit.join( ));

// document.write("ITEMS " + ": " + "PRICE " +"<br>");
// document.write("============" +"<br>")

// let shoppingItem = ["Heels ", "Purse", "Jewellery", "Outfits", "Rings", "shoes"];
// let price = [ 2000 ,  3000 , 4000 , 5000 , 1000 , 4000];

// for (let i = 0; i < shoppingItem.length; i++) {
//     document.write(shoppingItem[i] + " : " + price[i] + "<br>");
// }

// document.write("Total : "  ,  2000 + 3000 + 4000+ 5000 +1000+4000);



// let str = "Saylani Mass It Traning";
//  console.log(str);
// str = str.slice(0,7);
// console.log(str); //saylani




// let str = "Saylani Mass It Traning";
// console.log(str);
// console.log(str.slice(8,15));



// let day = prompt("What day is today!");
//  day = day.toLowerCase();
// if ( day=='monday' ||day=='tuesday' || day=='wednesday' ||day=='thursday' || day=='friday'){
//     console.log("Working Day")
    
// }
// else if(day=='saturday' || day=='sunday'){
//     console.log('Weekened day')
// }


// let day = prompt("What day is today!");
// day = day.toUpperCase();
// if ( day=='MONDAY' ||day=='TUESDAY' || day=='WEDNESDAY' ||day=='THURSDAY' || day=='FRIDAY'){
//     console.log("Working Day")
    
// }
// else if(day=='SATURDAY' || day=='SUNDAY'){
//     console.log('Weekened day')
// }



// let month = prompt("enter the month name");
// let charInMonth = month.length;
// console.log(charInMonth);
// if(charInMonth>3 ){
//     console.log(month.slice(0,3));
// }

// Length
// var str = prompt("Enter some text"); 
//  var numChars = str.length;
//  document.write(str , numChars)

//  for (var i = 0; i < numChars; i++) { 
// if (str.slice(i, i + 2))
//  {    document.write(str);  }


// break;
//  }

//   var str = prompt("Enter some text");
//   var numChars = str.length;
//    for (var i = 0; i < numChars; i++) { 
//        if (str.slice(i, i + 2) === " ") {   
//           alert("No double spaces!"); 
//              break; }
// else{
//     alert("double space")
// }

//        }



// 4 nov 2024 (monday)

//  INDEX OF

// / let str ="hello world";
// // console.log(str);
// // console.log(str.indexOf('world'));//OUTPUT 6



// // let str ="hello world";
// // console.log(str);
// // console.log(str.indexOf('World')); //OUTPUT -1


// // let str ="hello world javascript world";
// // console.log(str);
// // console.log(str.lastIndexOf('world')); //OUTPUT 23


// //  TO String 

// // let num = 56;
// // console.log(num +2 );
// // console.log(num.toString()+2);



// // let bool = false;
// // console.log(bool);
// // console.log(bool.toString());



// // let fruit = ['apple' , 'bannana' , 'mango'];
// // console.log(fruit);
// // console.log(fruit.toString());



// // Concat 

// // let fruits = ["apple " , " mango " , "cherry " ];
// // let vegies = ["patato " , 'onion ' , "tomato "];
// // let packFood = ['nuggets ' , "fries "];
// // console.log(fruits+ vegies + packFood);
// // let list  = fruits.concat(vegies , packFood) ;
// // console.log(list);


// // Greeting APP

// // let greet = "Assalam O Alikum ";
// // let name1 = prompt("Enter Your Name:");
// // let gender = prompt("Enter your Gender:");
// // gender = gender.toLowerCase();

// // if (gender === 'female') {
// //     document.write(greet.concat(" madam ", name1));
// // } else if (gender === 'male') {
// //     document.write(greet.concat(" sir ", name1));
// // } else {
// //     document.write(" invalid ");
// // }


// 6 Nov 2024 wednesday

// // Replace
// // let str = "javascript"
// // str[0] ='G'
// // console.log(str.replace("j" , "G"));

// let text = "Replace in Js The `replace` method*** in## JavaScript is used to create** a new string by replacing** the first"
// console.log(text);
// console.log(text.replace("JavaScript" ," "));



// replace all
// let text = "In ###JavaScript, `Math.round() ` is a method that rounds a number to the nearest integer JavaScript. If thefractional part ###of the number is 0.5 ***orgreater JavaScript, it rounds up to the next integer; if it's less than 0.5, it*** rounds down.JavaScript"
// console.log(text);
// text = text.replaceAll("Javascript" , " ")
// let text1 =  text.replaceAll("###" , " "  );
// console.log(text1);
// let text2 = text1.replaceAll("***" , "")
// console.log(text2);


//  gobal replace
//  let text = "The cat sat on the mat. The cat is happy.";
//  let newText = text.replace(/cat/g, "dog");
//  console.log(newText);


 
// Math.round

// console.log(Math.round(4.7)); // 5 output
// console.log(Math.round(4.2)); // 4 output
// console.log(Math.round(4.5)); // 5 output


// let amount = 25.73
// let  roundBill =Math.round(amount);
// console.log(roundBill);


// let amount = 25.4
// let  roundBill =Math.round(amount);
// console.log(roundBill);


// console.log(Math.round(-4.1)); // -4 output
// console.log(Math.round(-4.5)); // -4 output


// let originalPrice = 49.99;
// let discountPercentage = 15;
// let discountAmount = (originalPrice * discountPercentage) / 100;
// let roundedDiscount = Math.round(discountAmount);
// console.log(roundedDiscount);



// Math.Ceil
// console.log(Math.ceil(4.6));  //output 5
// console.log(Math.ceil(4.1)); //output 5
 

// let items =17;
// let boxCapacity= 10
// let boxesNeeded =Math.ceil(items/boxes);
// console.log(boxesNeeded)



//email gerenter
// let userName = prompt("Enter your Name");
// let genEmail = userName + userName.length + "@gmail.com";
// console.log("Here is your email " + genEmail);



// 8 Nov 2024 Friday

// // Math round
// console.log(Math.round(-4.7));

// // Math Ceil
// console.log(Math.ceil(-4.7))

// // Math floor
// console.log(Math.floor(-4.7));

// // Math floor
// console.log(Math.random());

// Math random

// let diceRoll = Math.floor(Math.random() *5) + 1; 
// document.write(diceRoll);

// let Tail =  Math.random()  < 0.5 ? "Head " : "Tail"
// document.write( " Coss" ,Tail); 


// let color = ['red', 'blue', 'green', 'yellow'];
// let randomColor = color[Math.floor(Math.random() * color.length)];
// document.write(randomColor);

// 11 Nov 2024  Monday

//  Password Generater


// let characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?'
// let length = 7;
// let password = "";
// for(i = 0 ; i < length ; i++) {
//   let randomChar = characters[Math.floor(Math.random() *characters.length)]
//     password += randomChar

// }
// document.write("Your Password is  : " + password + "<br>" )


// 13 nov 2024

// Password Generater
// let password = '';
// for(let i = 0 ; i < 12 ; i++){
// password += String.fromCharCode(Math.floor(Math.random() *62 +48))

//  }
//  document.write(password); 



// //  Color Generater
//  let letters = '0123456789ABCDEF';
//  let color = '#';
//  for (let i = 0; i < 6; i++) {
//    color += letters[Math.floor(Math.random() * 16)];
//  }
//  document.body.style.backgroundColor = color;



//  Converting strings to integers and decimals

// let num1 = +prompt("Enter First Number");
// let num2 = +prompt("Enter Second Number")

// let  result = num1+num2
// document.write(result);


// let num1 = +"78"
// let num2 = 2

// let  result = num1+num2
// document.write(result);


// praseInt

// let num1 = parseInt(prompt("Enter First Number"));
// let num2 = parseInt(prompt("Enter Second Number"));

// let  result = num1+num2
// document.write(result);


// let num = parseInt("2");
// let  result = num+6
// document.write(result);


// praseFloat

// let num1 = parseFloat("3.14");
// console.log(num1); // Output: 3.14


// Redix

// const decimalString = "123";
// const decimalNumber = parseInt(decimalString, 10);
// console.log(decimalNumber); // Output: 123


// const binaryString = "1010";
// const binaryNumber = parseInt(binaryString, 2);
// console.log(binaryNumber); // Output: 10


// const hexString = "1A";
// const hexNumber = parseInt(hexString, 16);
// console.log(hexNumber); // Output: 26


// 15 Nov 2024 Friday 
// //  Convert String into Number

// let num = "134";
// console.log(num + 2); //output 1342
// console.log(Number(num) + 2); // output 136


// console.log(Number(false)); // 0
// console.log(Number(true)); // 1
// console.log(Number()) ;//0
// console.log(Number("123ab")); //NAN
// console.log(Number("123")); //123


//  // parse Float
// let num1 = parseFloat("10.33");
// console.log(num1);  // 10.33

// let num2 = parseFloat("34 45 66");
// console.log(num2); // 34

// let num6 = parseFloat("He was 40");
// console.log(num6); //NAN


// //praseInt
//  let num3 = parseInt("10.00");
//  console.log(num3); // 10

// let num4 = parseInt("34 45 66");
// console.log(num4); // 34


// let num5 =parseInt("He was 40");
// console.log(num5); //NAN


// // To Fixed 
// let decimal = 45.5678;
// console.log(decimal); //45.5678
// console.log(decimal.toFixed()); //46
// console.log(decimal.toFixed(2)); //45.56


// 18 Nov 2024 Monday

// //  Current Date
// let date = new Date();
// console.log(date);

// // Get Day
// let day = new Date();
// console.log(day.getDay());  

// //  Get Date
// let date1 = new Date();
// console.log(date1.getDate());

// //  Get Date
// let dayName = ["Sun" , " Mon" , 'Tues' , " thurs" , 'fri' , ' satur'];
// let now = new Date().getDay(); 
// console.log(dayName[now]);


// // Random color Genater

// let color = ['red' , 'blue' , 'green'];
// let background = " ";
// for (let i = 0; i < 1; i++) {
//   background += color[Math.floor(Math.random() * color.length)];
// }
// document.body.style.backgroundColor = background;


// // Random color Genater
// let colors = ['pink', 'skyblue', 'purple'];
// let randomColor = colors[Math.floor(Math.random() * colors.length)];
// document.body.style.backgroundColor = randomColor;




// // 27 nov 2024 wednesday

// Function

// function sayHello(){
// document.write("Hello World");
// }

// sayHello();

// function add (sum1 , sum2 ) {
//     return sum1 + sum2

// }
// document.write(add(6 ,  6));


// function table(num) {
//     for (let i = 1; i <= 10; i++) {
//         document.write(num + " x " + i + " = " + (num * i) + "<br>");
//     }
// }

// table(5);

// //  29 Nov 2024 Friday
// //  Local Variable
// function myFunction() {
//     let localVariable = "I'm local!";
//     console.log(localVariable); // Output: "I'm local!"
//   }



// //  Global Varible
//   let globalVariable = "I'm global!";
//   function myFunction() {
//     console.log(globalVariable); // Output: "I'm global!"
//   }
//   console.log(globalVariable); // Output: "I'm global!"



// // switch Case
// switch (new Date().getDay()) {
//     case 1:
//         document.write("Monday");
//         break;
//         case 2:
//             document.write("Tuesday");
//             break;
//             case 3:
//                 document.write("Wednesday");
//                 break;
//                 case 4:
//                     document.write("Thursday");
//                     break;
//                     case 5:
//                         document.write("Friday");
//                         break;
//                         case 6:
//                             document.write("Saturday");
//                             break;
//                             case 0:
//                                 document.write("Sunday");
//                                 break;

//     default:
//         document.write("Invalid Day")
//         break;
// }


// let favFood = prompt("Enter Your Fav Food \n ,\n ,fast food \n Veggies \n Fruit" )
// switch (favFood) {
//     case 1:
//         document.write("Fast Food ")
//         break;
//         case 2:
//             document.write("Veggies")
//             break;
//             case 3:
//                 document.write("Fruite")
//                 break;

//     default:
//         break;
// }












