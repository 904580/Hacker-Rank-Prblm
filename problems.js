/*Task 2 - Try, Catch, and Finally
Complete the reverseString function; it has one parameter, s. You must perform the following actions:
Try to reverse string s using the split, reverse, and join methods.
If an exception is thrown, catch it and print the contents of the exception's message on a new line.
Print s on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.
See original HackerRank problem*/

function reverseString(s){
    if (typeof s === "string"){
        console.log(s.split("").reverse().join(""));
    }

        else{
            console.log("s.split is not a function" + "\n" + s);

        }

    }

    /*Complete the isPositive function below. It has one integer parameter, a .
     If the value of a is positive, it must return the string YES. Otherwise, it must throw an Error according 
     to the following rules:
If a is 0, throw an Error with message = Zero Error.
If a is negative, throw an Error with message = Negative Error.*/


function isPositive(a){
    if(a === 0){
        throw Eror ("Zero Error");
        
    }
    if (a < 0){
        throw Error ("Negative Error");
    }
     return "YES";

}

/*Create a Rectangle Object
Complete the function in the editor. It has two parameters: a and b. It must return an object modeling 
a rectangle that has the following properties:
length: This value is equal to a
width: This value is equal to b
perimeter: This value is equal to 2*(a + b) 
area: This value is equal to a * b*/

function Rectangle(a,b){
    this.length = a;
    this.width = b;
    this.perimeter = 2 * (a+b);
    this.area = (a*b);
}


/*Task 1 - Inheritance
We provide the implementation for a Rectangle class in the editor. Perform the following tasks:
Add an area method to Rectangle's prototype.
Create a Square class that satisfies the following:
It is a subclass of Rectangle.
It contains a constructor and no other methods.
It can use the Rectangle class' area method to print the area of a Square object.*/

Rectangle.prototype.area = function (){
    return this.w * this.h;
};
class Square extends Rectangle{
    constructor(s){
        super(s);
        this.h = s;
        this.w = s;
    }
}

/*Task 3 - Arrow Functions
Complete the function in the editor. It has one parameter: an array, nums. 
It must iterate through the array performing one of the following actions on each element:
If the element is even, multiply the element by 2.
If the element is odd, multiply the element by 3.
The function must then return the modified array.*/

function modifyArray(nums){
    let newArr = [];
    for(let i =0; i < nums.length; i++){
        if(nums[i] % 2 === 0){
            newArr.push(nums[i] * 2);

        }
        else{
            newArr.push (nums[i] * 3);
        }
    }
    return newArr;


}

