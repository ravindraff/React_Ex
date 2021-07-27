//json
//json stands for java script object notation
//json used to transfer the data over the network
//json is light weight
//objects ==> {}
//arrays  ==> []
//data    ==> key & value pairs
//key & value separated by using ":"
//key & value pairs separated by using ","
var obj = {
    "sub_one" : "ReactJS",
    "sub_two" : "NodeJS",
    "sub_three" : "MongoDB"
};
console.log( obj.sub_one, obj.sub_two, obj.sub_three );         //ReactJS NodeJS MongoDB






//array
//collection of indexed elements called as array
//index starts from 0
//for()     forEach()    for....of(),................
var num_arr1 = [1,2,3,4,5];
num_arr1.forEach( function(a,b){
    console.log(  b );
} );


var str_arr1 = ["Hello_1","Hello_2","Hello_3","Hello_4","Hello_5"];
var str_arr2 = ["Welcome_1","Welcome_2","Welcome_3","Welcome_4","Welcome_5"];
str_arr1.forEach((element,index)=>{
    console.log( element, str_arr2[index] );
});








//variable
//variables are used to store the data
//Ex. string  number  boolean arrays  .......
//we will declare the variables by using "var" / "let" / "const" keyword
//"let" and "const" keywords introduced in ES6
//variables should contain a-z , A-Z  , 0-9  , $ and _
//variables should not start with digits
// Ex.  string  number  boolean   undefined    null     bigint      Symbol

//syntax

/*
    var/let/const variablename = value;
*/

/*
    string
    ======
    collection of characters called as string

    1) ""  (double quotes)           2) '' (single quotes)       3) `` (backtick) 

    `` (backtick)  operator introduced in "ES6"

    `` (backtick) operator also called as "template" literal

    `` (backtick) operator used to define the "paragraphs"
*/
var sub_one = "JavaScript";
var wish = `Welcome to ${sub_one}`;
console.log( wish );                        //Welcome to JavaScript


var frontend = "ReactJS";
var sub_two = "NodeJS";
var sub_three = "MongoDB";
var MERN = `${frontend} <==> ${sub_two} <==> ${sub_three}`;
console.log( MERN );            //ReactJS <==> NodeJS <==> MongoDB



var jstraining = `
     js training means

     - callbacks

     - debouncing

     - throttling

     - async & await

     - promises

     - json
`;
console.log( jstraining );



//var 123abc;     //Error
var $123;
var _123;
var $123_abc;
//var abc#123;


//number
//decimal       double      hexadecimal     octal       binary
//hexadecimal number will start with 0x
//octal number will start with 0o
//binary number will start with 0b
var decimalNum = 100;
var doubleNum = 100.12345;
var hexadecimalNum = 0x123ABC;
var octalNum = 0o123;
var binaryNum = 0b1010;
console.log( decimalNum,
             doubleNum,
             hexadecimalNum,
             octalNum,
             binaryNum );
console.log( 10+10.12345 );         //20.12345
console.log( 0.1+0.2 );             //0.30000000000000004    //64-bit


//boolean
//true
//false
var flag = true;
console.log( flag );            //true


console.log( true == 1 );       //true
console.log( true === 1 );      //false
console.log( false == 0 );      //true
console.log( false === 0 );     //false
console.log( true + true );     //2
console.log( false + false );   //0
console.log( true + false );    //1
console.log( true == 100 );     //false
console.log( false == -1);      //false


//==   (data)
//===  (data & datatype)
console.log( 100 == "100" );        //true
console.log( 100 === "100" );       //false
console.log( 1 == "one" );          //false
console.log( 1 === "one" );         //false


//typeof
//datatype
console.log( typeof "Hello" );          //string
console.log( typeof 100 );              //number
console.log( typeof true );             //boolean
console.log( typeof [] );               //object 
console.log( typeof undefined );        //undefined
console.log( typeof null );             //object



//undefined
var x;
console.log( x );               //undefined



//null
var y;
y=null;
console.log( y );               //null


console.log( undefined == undefined );          //true
console.log( undefined === undefined );         //true
console.log( null == null );                    //true
console.log( null === null );                   //true
console.log( undefined == null );               //true
console.log( undefined === null );              //false






















































