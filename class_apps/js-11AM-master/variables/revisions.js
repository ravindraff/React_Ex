//variable
//variables are used to store the data
//Ex. string number boolean arrays  objects  undefined  null
//we will declare the variables by using "var" , "let" or "const" keyword
//"let" and "const" keyword introduced in ES6
//a-z , A-Z, 0-9 , $ and _
//variables should not start with digits
//datatypes => string, number, boolean , undefined, null, Symbol, bigint

//bigint
//ES6
//suffix with "n"
//>2^53-1
let n1 = 10n;
console.log(n1);                //10n
let n2 = 10n;
console.log( n2 );              //10n
console.log( n1 == n2 );        //true
console.log( n1 === n2 );       //true
let n3 = 10;
console.log( n1 == n3 );        //true
console.log( n1 === n3 );       //false
console.log( n1+n2 );           //20n
//console.log( n1+n3 );           //Error




//Symbol
//ES6
//Secuirity
let v1 = "Hello";
let v2 = "Hello";
console.log( v1 );          //Hello
console.log( v2 );          //Hello
console.log( v1 == v2 );    //true
console.log( v1 === v2 );   //true

let v3 = "Hello";
let v4 = String("Hello");
console.log(v3);            //Hello
console.log( v4 );          //Hello
console.log( v3 == v4 );    //true
console.log( v3 === v4 );   //true
let v5 = Symbol("Hello");
let v6 = Symbol("Hello");
console.log( v5 == v6 );        //false
console.log( v5 === v6 );       //false
console.log( Symbol.for("Hello") == Symbol.for("Hello") );          //true
console.log( Symbol.for("Hello") === Symbol.for("Hello") );         //true



//undefined
var cts;
console.log( cts );         //undefined
//null
var cts1;
cts1 = null;
console.log( cts1 );        //null
console.log( undefined == undefined );          //true
console.log( undefined === undefined );         //true
console.log( null == null );                    //true
console.log( null === null );                   //true
console.log( undefined == null );               //true
console.log( undefined === null );              //false



//string
//"", '' and ``
//`` introduced in "ES6"
//template literal
//paragraphs
let sub = "ES 12";
let wish = `Welcome to ${sub}`;
console.log( wish );                //Welcome to ES 12


//number
//decimal       double      hexadecimal         octal       binary
//hexadecimal number will prefix with "0x"
//octal number will prefix with "0o"
//binary number will prefix with "0b"
let decimal = 100;
let double = 100.12345;
var hexadecimal = 0x123ABC;
var octal = 0o123;
var binary = 0b1010;
console.log(
    decimal,
    double,
    hexadecimal,
    octal,
    binary
);



//boolean
//true
//false
//true means 1
//false means 0
let flag = true;
console.log( flag );            //true
console.log( true == 1 );       //true
console.log( false == 0 );      //true
console.log( true == 100 );     //false
console.log( true == -100 );    //false
console.log( true === 1 );      //false
console.log( false === 0 );     //false
console.log( true + 1 );        //2
console.log( true / true );     //1
console.log( true / false );    //Infinity



//typeof
//typeof operator used to know the datatype
console.log( typeof "Hello" );              //string
console.log( typeof 100 );                  //number
console.log( typeof true );                 //boolean
console.log( typeof 10n );                  //bigint
console.log( typeof Symbol("Hello") );      //symbol
console.log( typeof undefined );            //undefined
console.log( typeof null );                 //object
console.log( typeof [] );                   //object
console.log( typeof function(){} );         //function
console.log( typeof {} );                   //object


//json
//json stands for javascript object notation
//json used to "transfer" the data over the network
//json is light weight
//objects ==> {},   arrays ==> []     data ==> key & value pairs
let obj = {
    "sub_one" : "ReactJS",
    "sub_two" : "NodeJS",
    "sub_three" : "MongoDB"
};
console.log( obj.sub_one, obj.sub_two, obj.sub_three );         //ReactJS NodeJS MongoDB















































