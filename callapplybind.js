
// method 1---------
// let userdetails = {

//     name: "anoop saini",
//     age: 24,
//     class: "MCA",
//     printdetails: function(){
//         console.log(this.name);

//     }
// }
// userdetails.printdetails();

// let userdetails2 = {

//     name: "naveen saini",
//     age: 24,
//     class: "MCA",

// }
// // function borrowing -call method
// userdetails.printdetails.call(userdetails2);

//method-2

let userdetails = {

    name: "anoop saini",
    age: 24,
    class: "MCA",

}

let printdetails = function (state, fuck) {
    console.log(this.name + " " + state + " " + fuck);

}

printdetails.call(userdetails, "delhi", "Diksha");

let userdetails2 = {

    name: "naveen saini",
    age: 24,
    class: "MCA",

}
//function borrowing -call
printdetails.call(userdetails2, "delhi", "Diksha");

//apply--we can pass the array list

printdetails.apply(userdetails2, ["delhi", "Diksha"]);

//bind ---- we can create copy of  the function and invoke later it s called bind

let newfun = printdetails.bind(userdetails2, "delhi", "Diksha");
newfun();


