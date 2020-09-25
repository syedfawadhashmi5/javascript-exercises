
// variable , Var , Let , Const

// var abc;

// console.log(abc);

// abc = 'karachi';

// console.log(abc);


// var abc = 'pakistan'

// console.log(abc);


// var abc = 'karachi';

// function abcd(){

//     var abc ='pakistan'

//     console.log(abc);

// }

// abcd()

// console.log(abc);


// let abc;

// console.log(abc);

// abc = 'karachi';

// console.log(abc);


// let abc = 'pakistan'; // in let its not allow to decleared variable

// console.log(abc);


// let abc = 'karachi';

// function abcd(){

//     let abc ='pakistan'

//     console.log(abc);

// }

// abcd()

// console.log(abc);


// const abc;

// console.log(abc);

// abc = 'karachi'; // in conest its not allow to initializer variable again

// console.log(abc);


// const abc = 'pakistan'; // in const its not allow to decleared variable again

// console.log(abc);


// const abc = 'karachi';

// function abcd(){

//     const abc ='pakistan'

//     console.log(abc);

// }

// abcd()

// console.log(abc);


// Arrow Function



// var abc = () => {
//     return console.log('123')
// }

// var abc = v => console.log(v)

// abc('sdfdsfsd')


// Spread Operator with function

// var abc = (y,x,z) => {

//     return console.log(y,x,z)
// }

// abc(...[1,2,3]);

// Spread Operator with Object

// var abc = {name:'fawad' , fname:'jawed'};

// var abcd = {... abc , houseNum:479}

// console.log(abcd);

// Spread Operator with Array

// var abc = ['fawad' ,'jawed'];

// var abcd = [...abc , 479];

// console.log(abcd);


// Class Constructor


// class Car {

//     constructor(CarName , Destination){

//         this.carName = CarName,
//         this.destination = Destination 
//     }

//     Door = 4;
//     destination;

//     drive(){

//         console.log(`this is your desitantion to ${this.destination}`);
//     }
// }


// var service = new Car ('mehran' , 'karachi');


// console.log(service);




// class Car {
//         constructor(carName , destination){
    
//             this.carName = carName;
//             this.destination = destination;
    
//         }
    
//         door = 4;
//         destination;
//         drive(){
//             console.log(`Good Luck For Your destnation to ${this.destination}`);
//         }
//     }
    
    
//     class civic extends Car {
//         constructor(){
//             super('civic' , 'karachi');
//         }

//         color = 'red';
//         airbag = true;
//     }

//     var Civic = new civic();

//     class Honda extends Car {
//         constructor(){
//             super('Honda' , 'karachi');
//         }

//         color = 'red';
//     }

//     var Civic = new civic();
//     var honda = new Honda();



//     console.log(Civic.color , honda)



// Destructuring Array 

// let student = ['ali','humza','kashif'];


// let[a , , b] = student;


// console.log(a , b);


// Destructuring Object 


// let studentInfo = {

//     name : 'fawad',
//     cardNumber : 478
// }

// let { name , cardNumber } = studentInfo;

// console.log(name , cardNumber);


// Default Parameter Values



// function myFunction(x, y = 10) {
//     // y is 10 if not passed or undefined
//     return console.log(x + y);
//   }

//   myFunction(5); // will return 15