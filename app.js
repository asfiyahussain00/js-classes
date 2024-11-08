
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




// var str = prompt("Enter some text"); 
//  var numChars = str.length;
//  document.write(str , numChars)

//  for (var i = 0; i < numChars; i++) { 
// if (str.slice(i, i + 2))
//  {    document.write(str);  }


// break;
//  }





  var str = prompt("Enter some text");
  var numChars = str.length;
   for (var i = 0; i < numChars; i++) { 
       if (str.slice(i, i + 2) === " ") {   
          alert("No double spaces!"); 
             break; }
else{
    alert("double space")
}

       }



// 4 nov 2024 (monday)

//  INDEX OF

// let str ="hello world";
// console.log(str);
// console.log(str.indexOf('world'));//OUTPUT 6



// let str ="hello world";
// console.log(str);
// console.log(str.indexOf('World')); //OUTPUT -1




// let str ="hello world javascript world";
// console.log(str);
// console.log(str.lastIndexOf('world')); //OUTPUT 23


//  TO String 

// let num = 56;
// console.log(num +2 );
// console.log(num.toString()+2);



// let bool = false;
// console.log(bool);
// console.log(bool.toString());



// let fruit = ['apple' , 'bannana' , 'mango'];
// console.log(fruit);
// console.log(fruit.toString());



// Concat 

// let fruits = ["apple " , " mango " , "cherry " ];
// let vegies = ["patato " , 'onion ' , "tomato "];
// let packFood = ['nuggets ' , "fries "];
// console.log(fruits+ vegies + packFood);
// let list  = fruits.concat(vegies , packFood) ;
// console.log(list);







// Greeting APP

// let greet = "Assalam O Alikum ";
// let name1 = prompt("Enter Your Name:");
// let gender = prompt("Enter your Gender:");
// gender = gender.toLowerCase();

// if (gender === 'female') {
//     document.write(greet.concat(" madam ", name1));
// } else if (gender === 'male') {
//     document.write(greet.concat(" sir ", name1));
// } else {
//     document.write(" invalid ");
// }


6 Nov 2024 wednesday

// Replace
// let str = "javascript"
// str[0] ='G'
// console.log(str.replace("j" , "G"));

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



8 Nov 2024 Friday
// Math round
console.log(Math.round(-4.7));

// Math Ceil
console.log(Math.ceil(-4.7))

// Math floor
console.log(Math.floor(-4.7));

// Math floor
console.log(Math.random());

// Math random

// let diceRoll = Math.floor(Math.random() *5) + 1; 
// document.write(diceRoll);

// let Tail =  Math.random()  < 0.5 ? "Head " : "Tail"
// document.write( " Coss" ,Tail); 


let color = ['red', 'blue', 'green', 'yellow'];
let randomColor = color[Math.floor(Math.random() * color.length)];
document.write(randomColor);



















     
