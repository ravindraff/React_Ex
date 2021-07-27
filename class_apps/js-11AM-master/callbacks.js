function fun_one(arg1){
    console.log( arg1() );
};

fun_one( function fun_two(){
    return "Hello";
} );    //Hello


function mern(arg1,arg2,arg3){
    console.log( arg1(), arg2(), arg3() );
}
mern( function frontend(){ return "ReactJS" },
      function backend(){ return "NodeJS" },
      function database(){ return "MongoDB" } );                //ReactJS NodeJS MongoDB

