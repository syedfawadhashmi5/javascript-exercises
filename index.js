
                          //  Alert chapter 1

// alert("Error! please enter a vaild password");

// alert("welcome to js Land... \n Happy Coding!");

// alert("welcome to js Land...");

// alert("Happy Coding!");


// alert("Hello... i can run JS");



                        // variables for String   chapter 2

// var UserName; // declared variable

// var myName = "syed fawad hashmi"; // declared & assign variable


// var massage = "hello world";


// alert(massage);

// alert("PIZZA \n PIZZ \n PIZ \n PI \n P");


// alert("my email is Address example@example.com");

// var Book = "A smarter way \n to learn JavaScript"

// alert(Book);

// document.write("yah! i can write HTML.Content through JavaScript");


// var abc = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";

// alert(abc);



                        // variables for NUmber   chapter 3



// var age = "i am 18 years old";

// alert(age);


// var VisitTime = "you have visited this site 23 times";


// alert(VisitTime);


// document.write("my birth year is 1996");

// document.write("John Doe ordered 5 T-shirt(s) on XYZ Clothing store");




                        // VARIABLE NAMES: LEGAL & ILLEGAL   chapter 4


// var name = "John Doe", userName = "user58", age = 23;


// // 5 legal  variable names.

// var name;
// var fullName;
// var _9w;
// var _userName
// var Name;

// // 5 illegal variable names

// Var var;
// var 1j;
// var 123;
// var )();
// var +ac

// document.write("Variable names can only contain, number , $ ,and _ , $my_variAbles");



                        // MATH EXPRESSIONS  chapter 5



/*

1. Write a program that take two numbers & add them in a new variable.
Show the result in your browser.

*/


// var num1 = 5;
// var num2 = 10

// var sum = num1 + num2;

// document.write("sum of" + " " +num1+ " " + "and" + " " +num2+ " " + "is" + " " + sum);


/*

2. Repeat task1 for subtraction, multiplication, division &
modulus.
3. Do the following using JS Mathematic Expressions
a. Declare a variable.
b. Show the value of variable in your browser like “Value
after variable declaration is: ??”.
c. Initialize the variable with some number.
d. Show the value of variable in your browser like “Initial
value: 5”.
e. Increment the variable.
f. Show the value of variable in your browser like “Value
after increment is: 6”.
g. Add 7 to the variable.
h. Show the value of variable in your browser like “Value

MATH EXPRESSIONS | JAVASCRIPT

Page 2 of 9

after addition is: 13”.
i. Decrement the variable.
j. Show the value of variable in your browser like “Value
after decrement is: 12”.
k. Show the remainder after dividing the variable’s value
by 3.
l. Output : “The remainder is : 0”. */



// var num1; 

// document.write("value after declaration is" + " " + num1 + "<br/>" + "<br/>" );

// num1 = 5;

// document.write("after initial value : " + " " + num1 + "<br/>" + "<br/>");

// num1++

// document.write("value after increment : " + " " + num1 + "<br/>" + "<br/>");

// num1 = 6 + 7;

// document.write("value after addition is:" + " " + num1 + "<br/>" + "<br/>");

// num1--;

// document.write("after decerement" + " " + num1 + "<br/>" + "<br/>" );

// num1 = 12 % 6;

// document.write("after remainder" + " " + num1 + "<br/>" + "<br/>" );

/*

4. Cost of one movie ticket is 600 PKR. Write a script to store
 ticket price in a variable & calculate the cost of buying 5
 tickets to a movie. Example output:

 */


// var movieTicket = 600 * 5 + "PKR";

// var costOf5Ticket =  movieTicket ;

// document.write("Total cost to buy 5 ticket to a movie is  :" + " " + costOf5Ticket);


// 5. Write a script to display multiplication table of any
// number in your browser. E.g

// var typeTable = prompt("type your table");

// document.write("TABLE OF" + " " + typeTable.valueOf() + "<br/>")

// var i;

// for (i = 1; i <= 10; i++){
//     var Tablenum = typeTable.valueOf()
//    var  maltiplyby =  Tablenum *= i;
//     document.write(typeTable + " x " + " " +  i + " " + " = " + " " + maltiplyby + "<br/>");

// }


/*

6. The Temperature Converter: It’s hot out! Let’s make a
converter based on the steps here.
a. Store a Celsius temperature into a variable.
b. Convert it to Fahrenheit & output “NNoC is NNoF”.
c. Now store a Fahrenheit temperature into a variable.
d. Convert it to Celsius & output “NNoF is NNoC”.

Conversion Formulae:

*/

// var celsius = "°C" = (°F - 32 )x 5/9;
// var celsiusInF = (celsius*9)/5 + 32;
// var fahrenheit = 20;
// var fahrenheitInC = ((fahrenheit - 32)*5)/9;
// document.write(fahrenheit + '°C is ' + fahrenheitInC + '°C');

/*

7. Write a program to implement checkout process of a
shopping cart system for an e-commerce website. Store
the following in variables

MATH EXPRESSIONS | JAVASCRIPT

Page 5 of 9

a. Price of item 1
b. Price of item 2
c. Ordered quantity of item 1
d. Ordered Quantity of item 2
e. Shipping charges

Compute the total cost & show the receipt in your browser.

*/


// var item1 = 650;

// document.write("Price of item 1 is : " + item1 + "<br />" + "<br />");

// var quantity = 3;

// document.write("Quantuty of item 1 is :" + quantity + "<br />" + "<br />");

// var item2 = 100;

// document.write("Price of item 1 is : " + item2 + "<br />" + "<br />");

// var quantity2 = 7;

// document.write("Quantuty of item 1 is :" + quantity2 + "<br />" + "<br />");


// var shoppingCharge = 100;

// document.write("Quantuty of item 1 is :" + shoppingCharge + "<br />" + "<br />");


// var toTalCost = item1 * quantity + item2 * quantity2 + shoppingCharge;

// document.write("Total Cost of Your Order is :" + " " +toTalCost);

/*

8. Store total marks & marks obtained by a student in 2
variables. Compute the percentage & show the result in
your browser

*/


// document.write("<h1>Marks Sheet</h1>" + "<br />" + "<br />");

// var totalMarks = 100;

// document.write("Total marks is :" + totalMarks + "<br />" + "<br />");

// var marksObtaiant = 34;

// document.write("Marks Obtaian is :" + marksObtaiant + "<br />" + "<br />");

// var percentage = totalMarks / marksObtaiant * 100;

// document.write("Marks Obtaian is :" + percentage);


// var usd = 10 * 104.80;

// var sdr  = 25 * 28;

// var PKR = usd + sdr;

// document.write("Total currency in PKR" + " : " + PKR);

/*

10. Write a program to initialize a variable with some
number and do arithmetic in following sequence:
a. Add 5
b. Multiply by 10
c. Divide the result by 2
Perform all calculations in a single expression
11. The Age Calculator: Forgot how old someone is?
Calculate it!
a. Store the current year in a variable.
b. Store their birth year in a variable.
c. Calculate their 2 possible ages based on the stored
values.

Output them to the screen like so: “They are either NN or NN
years old”.

*/

// var num = 5;
// num += 5;
// num *= 10
// document.write((num/2))

// var currenYear = 2020;
// var birthYear = 1996;
// document.write("Current Year" + " " + currenYear + "<br/>");
// document.write("Birth Year" + " " + birthYear + "<br/>");
// var aged = currenYear - birthYear;
// document.write("Your Aged" + " " + aged);


// document.write("<h1>The Life Time supply Calculator</h1>")

// var favSnack = "Chocolate Chip"
// var currentAge = 24;
// var maxAge = 65;
// var perDaySnack = 3;
// document.writeln("Fovourite snack"+" "+favSnack+"<br/>")
// document.writeln("Current age"+" "+currentAge+"<br/>")
// document.writeln("Estimated maximum"+" "+maxAge+"<br/>")
// document.writeln("Amount of snack per day"+" "+perDaySnack+"<br/>")
// var data1 = maxAge - currentAge;
// var data2 = perDaySnack*data1;
// document.writeln("you will need"+" "+data2+" "+"chocolate chip to last you until the ripe old age of"+" "+maxAge)



                        // MATH EXPRESSIONS chapter 6 to 9

/*

1. Write a program to take a number in a variable, do the
required arithmetic to display the following result in your browser

*/


// var a = 10;

// document.write("Result" + "<br />" + a + "<hr />");


// ++a;

// document.write("The value of ++a is : "  + a + "<br />");

// document.write("Now the value of a is : "  + a + "<br />" + "<br />" + "<br />");

// a++;

// document.write("The value of a++ is : "  + "11" + "<br />");
// document.write("Now the value of a is : "  + a + "<br />" + "<br />" + "<br />");


// --a;

// document.write("The value of --a is : "  + a + "<br />");
// document.write("Now the value of a is : "  + a + "<br />" + "<br />" + "<br />");


// a--;


// document.write("The value of a-- is : "  + "11" + "<br />");
// document.write("Now the value of a is : "  + a + "<br />" + "<br />" + "<br />");


/*

2. What will be the output in variables a, b & result after
execution of the following script:
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
Explain the output at each stage:

*/


// var a = 2;

// document.write("a is" + " " + a + "<br />");

// var b = 1;

// document.write("b is" + " " + b + "<br />");

// var result = --a - --b + ++b + --b;

// document.write("result is" + " " + result + "<br />");



/*

3. Write a program that takes input a name from user &
greet the user.
4.
5. Write a program to take input a number from user &
display it’s multiplication table on your browser. If user
does not enter a new number, multiplication table of 5
should be displayed by default.


6. Take
a) Take three subjects name from user and store them in 3
different variables.
b) Total marks for each subject is 100, store it in another
variable.
c) Take obtained marks for first subject from user and
stored it in different variable.

ALERTS | JAVASCRIPT

Page 3 of 3
d) Take obtained marks for remaining 2 subjects from user
and store them in variables.
e) Now calculate total marks and percentage and show the
result in browser like this.(Hint: user table)

*/

// var UserName = prompt("Plese type your Name");
// document.write("UserName is" + " : " + UserName + "<br />" + "<br />" + "<br />");

// document.write("Subject Total Marks obtained Marks Percentage");

// var SubjectName1 = prompt("Plese type your subject-1");
// var totalMarks = 100;
// var marksObtaiant = +prompt("Plese type your Obtaiantmarks");
// var Percentage = totalMarks / marksObtaiant * 100;

// var SubjectName2 = prompt("Plese type your subject-2");
// var totalMarks = 100;
// var marksObtaiant = +prompt("Plese type your Obtaiantmarks");
// var Percentage = totalMarks / marksObtaiant * 100;

// var SubjectName3 = prompt("Plese type your subject-3");
// var totalMarks = 100;
// var marksObtaiant = +prompt("Plese type your Obtaiantmarks");
// var Percentage = totalMarks / marksObtaiant * 100;

// document.write("<br />" + SubjectName1 + " "  + " " + totalMarks + " " + " " + marksObtaiant + " " + " " + Percentage.toFixed(3));
// document.write("<br />" + SubjectName2 + " "  + " " + totalMarks + " " + " " + marksObtaiant + " " + " " + Percentage.toFixed(3));
// document.write("<br />" + SubjectName3 + " "  + " " + totalMarks + " " + " " + marksObtaiant + " " + " " + Percentage.toFixed(3));


// var result = totalMarks + totalMarks + totalMarks;
// var result1 = marksObtaiant + marksObtaiant + marksObtaiant;
// var result2 = Percentage + Percentage + Percentage;

// document.write(result + result1 + result2);


                        // USER INPUT & CONDITIONAL STATEMENT  chapter 9 to 11


/*

1. Write a program to take “city” name as input from user. If
user enters “Karachi”, welcome the user like this:
“Welcome to city of lights”

*/

// var userInput = prompt("");

// document.write("WellCome To" + " " + userInput);

/*
2. Write a program to take “gender” as input from user. If the
user is male, give the message: Good Morning Sir. If the
user is female, give the message: Good Morning Ma’am.

*/

// var userGender = prompt("Enter Your gender");


// if (userGender === "male") {

//     document.write("WellCome sir");
// }

// else if (userGender === "female") {

//     document.write("WellCome ma`am");
// }

// else document.write("Enter The Correct Gender");

/*

3. Write a program to take input color of road traffic signal
from the user & show the message according to this table:

*/

// var inputSignal = prompt("please input color of road traffic signal");

// if ( inputSignal === "red" ){

//     document.write("Must Stop");
// }
// else if (inputSignal === "Yellow"){

//     document.write("Ready to move");

// }
// else if (inputSignal === "green"){

//     document.write("Move now");

// }

// else document.write("please input your color");

/*

4. Write a program to take input remaining fuel in car (in
    litres) from user. If the current fuel is less than 0.25litres,
    show the message “Please refill the fuel in your car”

    */


// var inputFule = +prompt("Please input your car  fuel");

// if (inputFule < 0.25){
//     document.write("Please refill the fuel in your car");
// }
// else document.write("your fuel is full");


/*
5. Run this script, & check whether alert message would be
displayed or not. Record the outputs.

*/

// a.

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// b. 

// var b = 82;
// if (b++ === 82){
// alert("given condition for variable b is true");
// }

// // c.

// var c = 13;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// // d. 

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e.

// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }



// // f.

// if("car" < "cat"){
// alert("car is smaller than cat");
// }

/*

6. Write a program to take input the marks obtained in three
subjects & total marks. Compute & show the resulting
percentage on your page. Take percentage & compute
grade as per following table:

*/


// document.write("<h1>Mark Sheet</h1>");

// var totalMarks = 300;

// document.write("<h2>Total Marks :" + " " + totalMarks + "</h2>");

// var obtainedMarks = +prompt("");

// document.write("<h2>marks obtained : " + " " + obtainedMarks + "</h2>");

// var percentage = (obtainedMarks/totalMarks)* 100

// document.write("<h2>percentage : " + " " + percentage.toFixed() + "%" + "</h2>");

// if (percentage > 80 && percentage <= 100 ){

//     document.write("<h2>Your Grade is A+  <br />  Remarks | Good </h2>");
// }
// else if (percentage > 60 && percentage <= 80 ){

//     document.write("<h2>Your Grade is A  <br />  Remarks | EXCELLENT </h2>");

// }
// else if (percentage > 50 && percentage <= 60 ){

//     document.write("<h2>Your Grade is B  <br />   Remarks | You Need To Improve </h2>");

// }
// else if (percentage > 40 && percentage <= 50 ){

//     document.write("<h2>Your Grade is C  <br />  Remarks | You need to more work </h2>");

// }
// else document.write("<h2>Your Faild </h2>");


        //    IF...ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS  chapter 12 to 13




/*



*/

/*

1. Write a program that takes a character (number or string)
in a variable & checks whether the given input is a
number, uppercase letter or lower case letter. (Hint: ASCII
codes:- A=65, Z=90, a=97, z=122).

*/


// var userInput = prompt("Please type you number ot string");

// if (isNaN(userInput )) {

//     document.write("<h1>" + userInput + " | "  + "this is not a Number" + "</h1> ")
// } else {

//     document.write("<h1>" + userInput  + " | " + "This is a Number" + "</h1> ")


// }


/*

2. Write a JavaScript program that accept two integers and
display the larger. Also show if the two integers are equal.

*/

// var userInput1 = prompt("Please type you frist integer");
// var userInput2 = prompt("Please type you scond integer");



// if(userInput1 >= userInput2){
//     document.write(userInput1 + " " + "This is a larger Number");

// }else if(userInput2 > userInput1){
//     document.write(userInput2 + " " + "This is a larger Number");

// }


/*

3. Write a program that takes input a number from user &
state whether the number is positive, negative or zero.

*/

// var userInput = prompt("");


// if (userInput == 0 ){

//     document.write(" your number type is" + " " +userInput + " " + " your number is zero");

// }else if ( userInput >= 0 ){

//     document.write(" your number type is" + " " +userInput + " " + " your number is positive");

// }else if ( userInput <= 0 ){

//     document.write(" your number type is" + " " +userInput + " " + " your number is negative");

// }


/*

4. Write a program that takes a character (i.e. string of
length 1) and returns true if it is a vowel, false otherwise

*/

// var userInput = prompt("Plese type your character");

// if (userInput === 'a'||'e'||'i'||'o'||'u') {

//     document.write("The character is a Vowel");
// }
// else if (userInput === z) {

//  document.write("The character is a Consonant");
// }

/*

5. Write a program that
a. Store correct password in a JS variable.
b. Asks user to enter his/her password
c. Validate the two passwords:

i. Check if user has entered password. If not, then
give message “ Please enter your password”

ii. Check if both passwords are same. If they are
same, show message “Correct! The password you
entered matches the original password”. Show
“Incorrect password” otherwise.

*/

// var correctPassword = "syed123";

// var userPassword = prompt(" Please enter your password");

// if (userPassword === correctPassword ){

//     document.write("Correct! The password you  matches the original password");
// }else {

//     document.write("Incorrect password");


// }



/*

6. This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
else
greeting = "Good evening";
}

*/

// var greeting;

// var hour = 13;

// if (hour < 18) {
// document.write(greeting = "Good day");
// }
// else{
// document.write(greeting = "Good evening");
// }



        //    ARRAYS  chapter 14 to 16


/*

2. Declare an empty array using JS object notation to storestudent names in future.

3. Declare and initialize a strings array.

4. Declare and initialize a numbers array.

5. Declare and initialize a boolean array.

6. Declare and initialize a mixed array.

7. Declare and Initialize an array and store available
education qualifications in Pakistan (e.g. SSC, HSC, BCS,
BS, BCOM, MS, M. Phil., PhD). Show the listed
qualifications in your browser like:

*/

// var storeStudent = [];

// var stringArray = ["a" , "b" , "c" ];
// var numberArray = [1 , 2 , 3 ];
// var booleanArray = [ture , flase];
// var mixedArray = [ 1 , "a" , true];

// var subject = ["SSC" , "HSC" , "BCS" , "BS", "BCOM", "M. Phil", "PhD"];

// document.write("1)" + " " + subject[0] + "<br /> ")
// document.write("2)" + " " + subject[1] + "<br /> ")
// document.write("3)" + " " + subject[2] + "<br /> ")
// document.write("4)" + " " + subject[3] + "<br /> ")
// document.write("5)" + " " + subject[4] + "<br /> ")
// document.write("6)" + " " + subject[5] + "<br /> ")
// document.write("7)" + " " + subject[6] + "<br /> ")


/*

8. Write a program to store 3 student names in an array.Take
another array to store score of these three students.
Assume that total marks are 500 for each student, display
the scores & percentages of students like:

*/

// var totalMark = 500;

// var arry = ["shari","pasha","shazad"];

// var userMark = prompt("Enter your Obtained Marks");

// var arrys = [userMark]

// var percentage = (userMark/=totalMark)*100;

// document.write("<h1>Score Of"+" "+arry[0]+" "+"is"+" "+arrys[0]+" "+"Percentage"+" "+(percentage.toFixed())+"%</h1>")


/*

9. Initialize an array with color names. Display the array elements in your browser.

a. Ask the user what color he/she wants to add to the
beginning & add that color to the beginning of the array.
Display the updated array in your browser.

b. Ask the user what color he/she wants to add to the end
& add that color to the end of the array. Display the
updated array in your browser.

c. Add two more color to the beginning of the array.
Display the updated array in your browser.

d. Delete the first color in the array. Display the updated
array in your browser.

e. Delete the last color in the array. Display the updated
array in your browser.

f. Ask the user at which index he/she wants to add a color
& color name. Then add the color to desired
position/index. . Display the updated array in your
browser.

g. Ask the user at which index he/she wants to delete
color(s) & how many colors he/she wants to delete. Then
remove the same number of color(s) from user-defined
position/index. . Display the updated array in your
browser.

*/


// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

// var userAdd = prompt("Please type your color");

// var colorArray = ["red" , "black"];


// colorArray.unshift(userAdd);

// document.write(colorArray)


// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.

// var userAdd = prompt("Please type your color");

// var colorArray = ["red" , "black"];



// colorArray.push(userAdd);

// document.write(colorArray)


// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.

// var userAdd = prompt("Please type your color");
// var userAdd2 = prompt("Please type your color");


// var colorArray = ["red" , "black"];


// colorArray.unshift(userAdd);
// colorArray.unshift(userAdd2);

// document.write(colorArray)


// d. Delete the first color in the array. Display the updated
// array in your browser.


// var userAdd = prompt("Please type your color");

// var colorArray = ["red" , "black"];

// document.write(colorArray)

// document.write("<br />");
// document.write("<br />");


// colorArray.shift(userAdd);

// document.write(colorArray)



// e. Delete the last color in the array. Display the updated
// array in your browser.



// var userAdd = prompt("Delete the last color Please type black color");

// var colorArray = ["red" , "black"];

// document.write(colorArray)

// document.write("<br />");
// document.write("<br />");


// colorArray.pop(userAdd);

// document.write(colorArray)


// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.



// var colorArray = ['yellow', 'blue', 'orange', 'red' , 'green'];

// document.write(colorArray)

// document.write("<br />");
// document.write("<br />");


// colorArray.splice(1, 0, 'blue');

// document.write(colorArray)



// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your

// var colorArray = ['yellow', 'blue', 'orange', 'red' , 'green'];

// document.write(colorArray)

// document.write("<br />");
// document.write("<br />");


// colorArray.slice(2, 2, 'blue');

// document.write(colorArray)

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.


// var scores = ['100', '300', '200'];

// document.write(" scores of student" + " " + scores)

// document.write("<br />");
// document.write("<br />");


// scores.sort();

// document.write(" sort array" + " " +scores)



// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// var cites = ["karachi" , "lahore" , "peshawar"];


// document.write("<h1> cities list" + " : " + " " + cites + "</h1>");


// document.write("<br />");
// document.write("<br />");
// document.write("<br />");



// document.write("<h1> selected cites list" + " : " + " " + cites.slice(0, 2) + "</h1>");


// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)


// var name = "this is my cat";

// document.write("<h1> sting" + " : " + " " + name + "</h1>");


// document.write("<br />");
// document.write("<br />");
// document.write("<br />");

// document.write("<h1> Array" + " : " + " " + name.split(" ") + "</h1>");


// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)


// var arry  = ["keybroad" , "moniter" , "mouse"];

// document.write("<h1> sting" + " : " + " " + arry + "</h1>");


// document.write("<br />");
// document.write("<br />");
// document.write("<br />");

// document.write("<h1> Array" + " : " + " " + arry.reverse() + "</h1>");




        //    ARRAYS AND LOOP   chapter 17 to 20


// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
// 2. Declare and initialize a multidimensional array
// representing the following matrix:


// var arrayMatrix = [
// [0,1,2,3],
// [1,0,1,2]
// ,[2,1,0,1]
// ];


// document.write("<h1> Array" + " : " + " " + arrayMatrix[0] + "</h1>");


// document.write("<br />");
// document.write("<br />");
// document.write("<br />");


// document.write("<h1> Array" + " : " + " " + arrayMatrix[1]+ "</h1>");


// document.write("<br />");
// document.write("<br />");
// document.write("<br />");

// document.write("<h1> Array" + " : " + " " + arrayMatrix[2] + "</h1>");



// 3. Write a program to print numeric counting from 1 to 10.


// for(var i = 1; i <= 10; i++){
//         document.write("<h1>" +i + "</h1>");
// } 



// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// var table = +prompt("Please type your table");

// var endTable = +prompt("Please type your end table");

// for(var i = 1; i <= endTable; i++){

//         document.write("<h1>"+table+ " x " + i + " = " + table*i +"</h1>")
// }


// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]


// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// document.write("<h1>"+fruits.toString() +"</h1>");


// for(var i = 0; i < fruits.length; i++){

//         document.write("<h1>"+ "Element at index"+ " " + i + " " + "is" + " " + fruits[i] +"</h1>");

// }




// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:


// var A = ["cake", "apple pie", "cookie", "chips", "patties"];


// var user = prompt("").split(",");


// if((user == A[0]) || (user == A[2]) || (user == A[3]) || (user == A[4]) || (user == A[5])){
//         document.write("<h1>" + user + " " + "are availables in our bekrey in index" + A.indexOf() +"</h1>")
// }else {

//         document.write("<h1>"+"sorry this not availables  in our bekrey"+"</h1>")
// }



// 8. Write a program to identify the largest number in the
// given array.


var A = [24, 53, 78, 91, 12];


document.write("<h1>"+"The largest number is"+ " " + 35 > A.values()+"</h1>")