/*
    function fun_one(arg1?:string,
                    arg2?:string,
                    arg3?:string):void{
        console.log( arg1, arg2, arg3 );
    };
    fun_one();                                          //undefined undefined undefined
    fun_one("Hello_1");                                 //Hello_1 undefined undefined
    fun_one("Hello_1","Hello_2","Hello_3");             //Hello_1 Hello_2 Hello_3
    fun_one(undefined,undefined,undefined);             //undefined undefined undefined
    fun_one(null,null,null);                            //null null null
*/


function fun_one(arg1:any,
                 arg2?:any,
                 arg3:any="Hello_3",
                 ...arg4:any):any{
    console.log( arg1, arg2, arg3, arg4 );
}
//fun_one();                  //Expected at least 1 arguments, but got 0.
fun_one("Hello_1");           //Hello_1 undefined Hello_3 []
fun_one("Hello_1",
        "Hello_2",
        undefined,
        "Hello_4");         //Hello_1 Hello_2 Hello_3 [ 'Hello_4' ]
fun_one( undefined,
         undefined,
         undefined,
         undefined );       //undefined undefined Hello_3 [ undefined ]
fun_one( null,null, null, null );           //null null null [ null ]

















