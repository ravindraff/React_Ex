//let
//let keyword used to declare the variables
//ES6

/*
    for(let i=0;i<5;i++){

    };
    console.log( i );           //var : 5
                                //let : ReferenceError: i is not defined
    //var keyword breaks the scope rule
    //let keyword obeys the scope rule
*/


/*
    //global variable
    let data = 100;
    {
        //local variable
        let data = 200; 
    }
    console.log( data );            //var : 200    let : 100 
    //var keyword raised the "global polluting issue"
    //let keyword overcomes the global pollting issue
*/


/*
    let data = 100;
    let data = 200;
    console.log( data );            //var : 200
                                    //let : SyntaxError: Identifier 'data' has already been declared
    //var keyword allows the duplicate variables
    //let keyword won't allows the duplicate variables
*/



/*
    //declare the variable
    //initilize the variable
    //access the variable
    console.log( data );                //let : ReferenceError: Cannot access 'data' before initialization
                                        //var : undefined
    let data = 100;
    //"variable hoisting" raised because of var keyword
    //we can overcome variable hoisting by using let keyword
*/



/*
    for(let i=0;i<5;i++){
    setTimeout(()=>{
            console.log(i);
    },5000);
    }
    //var : 5 5 5 5 5 
    //let : 0 1 2 3 4
*/


/*
        var                                     let
    
    1) var keyword introuced                let keyword introduced in
       in ES1                               ES6

    2) var keyword allows the               let keyword won't allows the 
       duplicate varibles                   duplicate variables

    3) var keyword breaks                   let keyword obeys the scope rule
       scope rule

    4) raised the global polluting          let keyword overcomes the global polluting
       issue                                issue

    5) variable hoisting issue              we can overcome variable hoisting
       raised here                          issue here

    6) var members called as                let members called local scoped 
       global members                       members
*/





//const
//const keyword introduced in "ES6"
//const keyword used to "declare" the variables
//reinitilization not possible

//const data = 100;
//data = 200;             //TypeError: Assignment to constant variable.


const obj = {
    "sub_one" : "ReactJS",
    "sub_two" : "NodeJS",
    "sub_three" : "MongoDB"
};

//obj = {};           //TypeError: Assignment to constant variable.
obj.sub_one = "Angular12";
obj.sub_two = "Deno";
obj.sub_three = "CassandraDB";
console.log( obj );
//{ sub_one: 'Angular12', sub_two: 'Deno', sub_three: 'CassandraDB' }


const arr = [1,2,3,4,5];
//arr = [];
arr[0] = 100;
arr[1] = 200;
arr[2] = 300;
console.log( arr );         //[ 100, 200, 300, 4, 5 ]









































