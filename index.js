
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

var UserName = prompt("Plese type your Name");
document.write("UserName is" + " : " + UserName + "<br />" + "<br />" + "<br />");

document.write("Subject Total Marks obtained Marks Percentage");

var SubjectName1 = prompt("Plese type your subject-1");
var totalMarks = 100;
var marksObtaiant = +prompt("Plese type your Obtaiantmarks");
var Percentage = totalMarks / marksObtaiant * 100;

var SubjectName2 = prompt("Plese type your subject-2");
var totalMarks = 100;
var marksObtaiant = +prompt("Plese type your Obtaiantmarks");
var Percentage = totalMarks / marksObtaiant * 100;

var SubjectName3 = prompt("Plese type your subject-3");
var totalMarks = 100;
var marksObtaiant = +prompt("Plese type your Obtaiantmarks");
var Percentage = totalMarks / marksObtaiant * 100;

document.write("<br />" + SubjectName1 + " "  + " " + totalMarks + " " + " " + marksObtaiant + " " + " " + Percentage.toFixed(3));
document.write("<br />" + SubjectName2 + " "  + " " + totalMarks + " " + " " + marksObtaiant + " " + " " + Percentage.toFixed(3));
document.write("<br />" + SubjectName3 + " "  + " " + totalMarks + " " + " " + marksObtaiant + " " + " " + Percentage.toFixed(3));


var result = totalMarks + totalMarks + totalMarks;
var result1 = marksObtaiant + marksObtaiant + marksObtaiant;
var result2 = Percentage + Percentage + Percentage;

document.write(result + result1 + result2);
