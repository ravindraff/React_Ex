/*
    let obj = {
        message : "Hello"
    };
    function fun_one(){
        console.log(this.message);
    }
    fun_one.call(obj);          //Hello


    let obj1 = {
        num1 : 10,
        num2 : 20
    };
    function fun_two(){
        console.log( this.num1 + this.num2 );
    }
    fun_two.call(obj1);         //30



    let obj2 = {
        num1 : 100,
        num2 : 200
    };
    function fun_three(arg1,arg2){
        console.log( this.num1+this.num2+arg1+arg2 );
    }
    fun_three.call(obj2,300,400);            //1000
    let arr1 = [300,400];
    fun_three.apply(obj2,arr1);              //1000

    let new_loc = fun_three.bind(obj2)
    new_loc( 300,400 );                     //1000
*/




let obj = {
    "key1" : 10,
    "key2" : 20,
    "key3" : 30
};

function fun_one(arg1,arg2,arg3){
    console.log( this.key1+this.key2+this.key3+arg1+arg2+arg3 );
}

let new_loc = fun_one.bind(obj);
new_loc(40,50,60);                          //210
fun_one.apply(obj,[40,50,60]);              //210
fun_one.call(obj,40,50,60);                 //210













































