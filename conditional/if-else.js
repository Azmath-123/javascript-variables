//if-else


/*
var number = 10;
if(number > 0){
    console.log('number is positive')
}
else{
    console.log('number is negative')
}

*/

/*
SHOULD BE EXECUTED USING SWITCH
Create an Area & Perimeter Calculator 
Area of Circle
Area of Square
Area of Rectangle
Area of Triangle using Herons Formula

Execute using both Ternary and If Else
Find Greatest of 2 Numbers 
Find Greatest of 3 Numbers

Find the Roots of a Quadratic Equation
*/

/*


// create a grade calculator
var percentage ;
percentage=prompt("Enter your marks in percentage : ");
 if(percentage > 90 ){
    console.log('grade is S and your grade points are 10')
 }
else if (percentage>80 && percentage <= 90) {
 console.log('you grade is A  and your grade points are 9')
}
else if(percentage>70 && percentage <= 80) {
console.log('your grade is B and your grade point is 8 ')
}
else if(percentage>60 && percentage<=70 ) {
   console.log('your grade is C and your grade points are 7')
}
 else if(percentage>50 && percentage<=60) {
     console.log('your grade is D')
     
 }
 else if(percentage>40){
    console.log('you FAILED')
 }
 else{
    console.log("NA")
 }





//divisibility rules

 var  x ;
 x=prompt( "Enter the value of x : ");
 if (x % 2 == 0){   
 console.log('the number is divisible by 2');
 }
 else if(x % 5 ==0){
 console.log( 'The number is divisible by 5');
 }
 else if(x % 11==0){
     console.log('The number is divisible by 11');
 }
 else{
     console.log('The number is not divisible by any of the numbers above');
 }
 







//finding greatest of two numbers
var a ,b;
a=20;
b=30;
if(a>b) {
    console.log( "A is greater than B");
} else {
   console.log("B is greater than  A");
}

//Using ternary operator
var a,b;
a=20;
b=30;
console.log((a > b)? "A is greater than B" : "B is greater than A");


//finding greatest of three numbers
var x,y,z;
x = 15 ;
y = 20 ;
z = 45 ;
if( x > y && x > z ) {
    console.log ("x is greater than both y and z") ;
}
else if ( y > x && y > z ) {
    console.log ("y is greater than both x and z") ;
}
else {
    console.log ("z is greater than both x and y") ;
}
// ternary
var res =(x > y && x > z) ? "x is greater" : ((y > x && y > z) ? "y is greater":"z is greater");
console.log(res);



// finding the roots of quadratic equation

var a , b ,c;
a=prompt('Enter coefficient a ');
b=prompt('Enter coefficient b ');  
c=prompt('Enter coefficient c ');

let discriminant  = (b * b) - (4 * a * c);

if (discriminant > 0 ) {
    let root1 = (-b + Math.sqrt(discriminant)) / (2*a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2*a);
    console.log("roots are real and distinct " + root1 +" and "+root2+);
} else if (discriminant == 0){
    let root = -b / (2 * a);
    console.log("Both are equal roots" +root);    
} else{
    console.log("No real solutions");
}




//area and perimeter calculator


let shapeType = prompt("Enter the shape (Circle, Square, Rectangle, Triangle):");

switch (shapeType) {
    case "circle":
        let radius = parseFloat(prompt("Enter the radius of the circle:"));
        let circleArea = 3.14 * radius * radius;
        let circlePerimeter = 2 * 3.14 * radius;
        console.log(`Area of Circle: ${circleArea}`);
        console.log(`Perimeter of Circle: ${circlePerimeter}`);
        break;

    case "square":
        let side = parseFloat(prompt("Enter the side length of the square:"));
        let squareArea = side * side;
        let squarePerimeter = 4 * side;
        console.log(`Area of Square: ${squareArea}`);
        console.log(`Perimeter of Square: ${squarePerimeter}`);
        break;

    case "rectangle":
        let length = parseFloat(prompt("Enter the length of the rectangle:"));
        let width = parseFloat(prompt("Enter the width of the rectangle:"));
        let rectangleArea = length * width;
        let rectanglePerimeter = 2 * (length + width);
        console.log(`Area of Rectangle: ${rectangleArea}`);
        console.log(`Perimeter of Rectangle: ${rectanglePerimeter}`);
        break;

    case "triangle":
        let a = parseFloat(prompt("Enter the length of side 'a' of the triangle:"));
        let b = parseFloat(prompt("Enter the length of side 'b' of the triangle:"));
        let c = parseFloat(prompt("Enter the length of side 'c' of the triangle:"));

        let s = (a + b + c) / 2;
        let triangleArea = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        console.log(`Area of Triangle: ${triangleArea}`);
        break;

    default:
        console.log("Invalid shape entered. Please enter a valid shape.");
}

*/












let shapeType= prompt('Please enter the type of shape you want to calculate (square, rectangle or triangle):');
switch(shapeType){
    case(circle):
    let radius=parseFloat(prompt('Enter the radius of the circle'));
    let circleArea=3.14*radius*radius;
    let circleparameter=2*3.14*radius;
    console.log(`The area of the circle is ${Area} and the perimter is ${parameter}`);
    
    break;
  case(rectangle):
  let x=parseInt(prompt('Enter   the length of rectangle'));
  let y=parseInt(prompt('Enter the width of the rectangle'));
  let rectangleArea=x*y;
  let rectangleperimeter=2*(x+y);
  console.log(`The area of the rectangle is ${Area} and the perimeter is ${perimeter}`);
  break;
  case(square):
  let sides=parseInt(prompt('Enter the side length of square'));
  let squareArea=sides*sides;
  let squareparameter=4*sides;
  console.log(`The area of the square is ${Area} and the perimeter is ${parameter}`);
break;
case(triangle):
let a=parseInt(prompt('Enter the first side of triangle' ));
let b=parseInt(prompt('Enter the second side of the triangle'));
let c=parseInt(prompt( 'Enter the third side of the triangle'));
let triangleArea=Math.sqrt(s*((s-a)*(s-b)*(s-c)));
let  triangleparameter=(a+b+c)/2;
console.log(`The perimeter  of the triangle is ${perimeter}`) ;
console.log(`The area of the triangle is ${Area}`);
break;
default:console.log('invalid shape');
}























