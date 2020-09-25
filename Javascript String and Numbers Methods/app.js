//                     JavaScript Number Methods                             \\\


// The round() method rounds a number to the nearest integer.

// Note: 2.49 will be rounded down (2), and 2.5 will be rounded up (3).



// var avgScore = 2.49;

// var avgScoreRoundOff = Math.round(avgScore);

// console.log(avgScoreRoundOff);




/*

Math.floor();

Math.ceil();

*/

// The floor() method rounds a number DOWNWARDS to the nearest integer, and returns the result.

// If the passed argument is an integer, the value will not be rounded.

// var abc = Math.floor(54.10);


// console.log(abc);

// The ceil() method rounds a number UPWARDS to the nearest integer, and returns the result.

// If the passed argument is an integer, the value will not be rounded.

// var abc = Math.ceil(54.10);


// console.log(abc);



// var num = -5.9; // -5
// var num1 = -5.1; // -6

// var ceiledNumber = Math.ceil(num);
// var flooredNumber = Math.floor(num1);

// console.log(ceiledNumber);
// console.log(flooredNumber);


// JavaScript random() Method


// The random() method returns a random number from 0 (inclusive) up to but not including 1 (exclusive).


// var abc = Math.random() * 11;

// console.log(abc);

// var abdc = Math.ceil(abc);

// console.log(abdc);



/*

Number()

parseInt()

parseFloat()

*/


// NaN is a JavaScript reserved word indicating that a number is not a legal number.

// Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):


// var num = '2.56942';

// var intNum = parseInt(num);
// var floatNum = parseFloat(num);

// console.log(floatNum);



// var sum = 2 * 'Cow';

// console.log(sum);


/*
String()
.toString()
*/

// var num = 2;

// Number()
// String()

// var stNumber = String(num) // num.toString()

// console.log(stNumber)









// var num = 53.56744455;

// num = num.toFixed(2);

// console.log(num);







//                       JavaScript String Methods                     \\\


// The length property returns the length of a string:


// let abc = 'this is my car';


// let CheckLength = abc.length;

// console.log(CheckLength);


// Finding a String in a String

// The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:


// let abc = 'this is my car';


// let CheckLength = abc.indexOf('this');

// console.log(CheckLength);



// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:

// Both indexOf(), and lastIndexOf() return -1 if the text is not found.

// let abc = 'this is my car';


// let CheckLength = abc.lastIndexOf('is');

// console.log(CheckLength);


// Searching for a String in a String
// The search() method searches a string for a specified value and returns the position of the match:


// let abc = 'this is my car';


// let CheckLength = abc.search('my');

// console.log(CheckLength);



// Extracting String Parts

// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

// slice(start, end)


// let abc = 'this is my car';


// let CheckLength = abc.slice( 0 , 4);

// console.log(CheckLength);


// substring(start, end)

// let abc = 'this is my car';


// let CheckLength = abc.substring( 6 , 7);

// console.log(CheckLength);


// substr(start, length)

// let abc = 'this is my car';


// let CheckLength = abc.substr( 0 , 14);

// console.log(CheckLength);


// Replacing String Content
// The replace() method replaces a specified value with another value in a string:



// let abc = 'that is my car';


// let CheckLength = abc.replace( "is" , "wow");

// console.log(CheckLength);

// replaceAll()

// let abc = 'that is my car is';


// let CheckLength = abc.replaceAll( "is" , "wow");

// console.log(CheckLength);


// Converting to Upper and Lower Case
// A string is converted to upper case with toUpperCase():


// let abc = 'that is my car is';


// let CheckLength = abc.toLowerCase( "is" , "wow");

// console.log(CheckLength);


// let abc = 'that is my car is';


// let CheckLength = abc.toUpperCase( "is" , "wow");

// console.log(CheckLength);


// The concat() Method
// concat() joins two or more strings:



// let abc = 'that is my car is';


// let CheckLength = 'pakistan is my country';


// let result = CheckLength.concat(abc);

// console.log(result);


// String.trim()
// The trim() method removes whitespace from both sides of a string:

// var str = "       Hello World!        ";

// alert(str.trim());


// Extracting String Characters

// There are 3 methods for extracting string characters:

// charAt(position)
// charCodeAt(position)
// Property access [ ]


// let abc = 'that is my car is';



// let result = abc.charAt(3);

// console.log(result);


// let abc = 'that is my car is';



// let result = abc.charCodeAt(5);

// console.log(result);


// let abc = 'that is my car is';

// let result = abc[3];

// console.log(result);


// Converting a String to an Array
// A string can be converted to an array with the split() method:


// let abc = 'that is my car is';

// let result = abc.split(" ");

// console.log(result);
















//                       JavaScript Array Methods                     \\\



/*

array methods
pop
push
shift
unshift
splice
indexOf

array properties
.length

*/


// The join() method also joins all array elements into a string.

// It behaves just like toString(), but in addition you can specify the separator:

// var abc = ['food' , 'shop' , 'game'];


// var method = abc.toString();

// console.log(method)


// var abc = ['food' , 'shop' , 'game'];


// var method = abc.join(' ');

// console.log(method)


// Popping and Pushing
// When you work with arrays, it is easy to remove elements and add new elements.

// This is what popping and pushing is:

// Popping items out of an array, or pushing items into an array.


// var abc = ['food' , 'shop' , 'game'];


// var method = abc.pop();

// console.log(abc)


// The push() method adds a new element to an array (at the end):

// var abc = ['food' , 'shop'];


// var method = abc.push('game');

// console.log(abc)


// Shifting Elements
// Shifting is equivalent to popping, working on the first element instead of the last.

// The shift() method removes the first array element and "shifts" all other elements to a lower index.



// var abc = ['food' , 'shop' , 'game'];


// var method = abc.shift();

// console.log(abc);


// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:


// var abc = ['food' , 'shop' , 'game'];


// var method = abc.unshift('new');

// console.log(abc);


// Array elements are accessed using their index number:


// var abc = ['food' , 'shop' , 'game'];


// var method = abc[0] = 'new';

// console.log(abc);



// The length property provides an easy way to append a new element to an array:



// var abc = ['food' , 'shop' , 'game'];


// var method = abc.length;

// console.log(method);


// Deleting Elements
// Since JavaScript arrays are objects, elements can be deleted by using the JavaScript operator delete:



// var abc = ['food' , 'shop' , 'game'];


// var method = delete abc[0];

// console.log(abc);


// The first parameter (2) defines the position where new elements should be added (spliced in).

// The second parameter (0) defines how many elements should be removed.

// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

// The splice() method returns an array with the deleted items:


// var abc = ['food' , 'shop' , 'game'];


// var method = abc.splice( 0 , 1 , 'new');

// console.log(abc);


// With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:

// The first parameter (0) defines the position where new elements should be added (spliced in).

// The second parameter (1) defines how many elements should be removed.

// The rest of the parameters are omitted. No new elements will be added.


// var abc = ['food' , 'shop' , 'game'];


// var method = abc.splice( 0 , 1);

// console.log(abc);


// The concat() method creates a new array by merging (concatenating) existing arrays:


// var abc = ['food' , 'shop' , 'game'];


// var method = ['1' ].concat(abc);

// console.log(method);



// Slicing an Array
// The slice() method slices out a piece of an array into a new array.

// This example slices out a part of an array starting from array element 1 ("Orange"):


// var abc = ['food' , 'shop' , 'game'];


// var method = abc.slice( 0 , 1 );

// console.log(method);



// The sort() method sorts an array alphabetically:



// var abc = ['food' , 'shop' , 'game'];


// var method = abc.sort();

// console.log(method);



// Reversing an Array
// The reverse() method reverses the elements in an array.

// You can use it to sort an array in descending order:



// var abc = ['food' , 'shop' , 'game'];


// var method = abc.reverse();

// console.log(method);


// Numeric Sort
// By default, the sort() function sorts values as strings.

// This works well for strings ("Apple" comes before "Banana").

// However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

// Because of this, the sort() method will produce incorrect result when sorting numbers.

// You can fix this by providing a compare function




// var abc = ['food' , 'shop' , 'game'];


// var method = abc.sort(function(a, b){return a - b});

// console.log(method);




// The forEach() method calls a function (a callback function) once for each array element.


// Note that the function takes 3 arguments:

// The item value
// The item index
// The array itself
// The example above uses only the value parameter. The example can be rewritten to:

//  var abc = ['food' , 'shop' , 'game'];

// var abcd = []

// var method = abc.forEach(function(value){

//     abcd.push(value);

    
// });

// console.log(abcd)

// console.log(method);



// Array.map()
// The map() method creates a new array by performing a function on each array element.

// The map() method does not execute the function for array elements without values.

// The map() method does not change the original array.

// This example multiplies each array value by 2:


//  var abc = ['food' , 'shop' , 'game'];

// var abcd = []

// var method = abc.map( ( value , index , array) => {

// return abcd.push( value , index , array);

// })

// console.log(abcd)



// Array.filter()
// The filter() method creates a new array with array elements that passes a test.

// This example creates a new array from elements with a value larger than 18:


// var numbers = [45, 4, 9, 16, 25];
// var over18 = numbers.filter(myFunction);

// function myFunction(value, index, array) {
//   return console.log(value > 18)
// }



// Array.reduce()
// The reduce() method runs a function on each array element to produce (reduce it to) a single value.

// The reduce() method works from left-to-right in the array. See also reduceRight().

// The reduce() method does not reduce the original array.

// This example finds the sum of all numbers in an array:



// var numbers = [45, 4, 9, 16, 25];
// var sum = numbers.reduce(myFunction);

// console.log(sum);

// function myFunction(total, value, index, array) {
//   return total + value;
// }


// Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.



// var abc = ['food' , 'shop' , 'game'];


// var method = abc.lastIndexOf('shop');

// console.log(method);






//                  Real Life Objects, Properties, and Methods




// var Car = {

//     type:"Fiat", 
//     model:"500", 
//     color:"white"
// }


// console.log(Car);

// You can access object properties in two ways:


// var Car = {

//     type:"Fiat", 
//     model:"500", 
//     color:"white"
// }


// console.log(Car.type);



// console.log(Car['type']);

// The this Keyword
// In a function definition, this refers to the "owner" of the function.

// In the example above, this is the person object that "owns" the fullName function.

// In other words, this.firstName means the firstName property of this object.



// varibles Object

// var Car = {

//     type:"Fiat", 
//     model:"500", 
//     color:"white"

// }

// function Objects

// function student( type , model , color) {

//     this.type= type,
//     this.model = model,
//     this.color = color

// }

// student.prototype.brand = 'mehran';

// var result =  new student("Fiat" , "500", "white")

// console.log(result);




// The block of code inside of the for...in loop will be executed once for each property.

// Looping through the properties of an object:


// function student( type , model , color) {

//     this.type= type,
//     this.model = model,
//     this.color = color

// }

// student.prototype.brand = 'mehran';

// var result =  new student("Fiat" , "500", "white");

// if('model' in student){

//         console.log('company prop exist in cars object.')


// }



// Adding New Properties
// You can add new properties to an existing object by simply giving it a value.

// Assume that the person object already exists - you can then give it new properties:


// var student = {

//    card : 123,
//    name : 'fawad'

// }


// var abc = student.card = 1234;


// console.log(student);



// Deleting Properties
// The delete keyword deletes a property from an object:


// var student = {

//     card : 123,
//     name : 'fawad'
 
//  }
 
 
//  var abc = delete student.card;
 
 
//  console.log(student);


// Using JSON.stringify()
// Any JavaScript object can be stringified (converted to a string) with the JavaScript function JSON.stringify():

// var student = {

//     card : 123,
//     name : 'fawad'
 
//  }
 
 
//  var abc = JSON.stringify(student);
 
 
//  console.log(abc);



//  ECMAScript 2015
// ES6, also known as ECMAScript2015, introduced classes.

// A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties are assigned inside a constructor() method.


class student {

    constructor( door , color){

        this.door = door,
        this.color = color
    }
 
    drive(){
        console.log(`wellcome sir`)
    }
 }
 
 student.prototype.model = 'mehran';
 
 var abc = new student ( 4 , 'black ' );
 
 var abcd = new student ( 4 , 'red ' );

 
 console.log(abc , abcd);