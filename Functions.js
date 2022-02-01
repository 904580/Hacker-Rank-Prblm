q1---//getArea(length, width): Calculate and return the area of a rectangle having sides length and width.
//getPerimeter(length, width): Calculate and return the perimeter of a rectangle having sides length and width.

function getArea(length, width){
    let Area;
    Area = length*width;
    return Area;
}

function getPerimeter(length,width){
    let perimeter;
    perimeter = 2*(length + width);
    return perimeter;

}


//Implement a function named factorial that has one parameter: an integer, n. It must return the value of n! (i.e., n factorial).

function factorial(n){
    return n ? n* factorial (n-1) : 1


}

/*Declare a constant variable, PI, and assign it the value Math.PI. You will not pass this challenge unless the variable is declared as a constant and named PI (uppercase).
Read a number, r, denoting the radius of a circle from stdin.
Use PI  and r to calculate the area and perimeter of a circle having radius r .
Print area as the first line of output and print perimeter as the second line of output.*/


function main(){
    const r = readLine();
     const PI =math.PI;
     console.log(PI * r * r);
     console.log(2 + PI * r);

}

/*Complete the getGrade(score) function in the editor. It has one parameter: an integer, score , denoting the number of points Julia earned on an exam. It must return the letter corresponding to her grade according to the following rules:
If 25 < score <= 30, then grade = A
If 20 < score <= 25, then grade = B
If 15 < score <= 20, then grade = C
If 10 < score <= 15, then grade = D
If 5 < score <= 10, then grade = E
If 0 < score <= 5, then grade = F*/


function getGrade(score){
    if (score > 25){
        return "A";
    }
    else if(score > 20){
        return "B";
    }
    else if (score > 15){
        return "C";
    }
    else if (score > 10){
        return "D";
    }
    else if (score > 5){
        return "E";
    }
    else 
    return "F";{
}
}