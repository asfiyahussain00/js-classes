
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
     