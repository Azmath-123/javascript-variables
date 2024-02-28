/*
Print Numbers:
Write a program to print all the numbers from 1 to 10 using a loop.

Even Numbers:
Write a program to print all even numbers from 1 to 20 using a loop.

Sum of Numbers:
Write a program to calculate and print the sum of numbers from 1 to 50.

Reverse Count:
Write a program to print numbers from 10 to 1 in reverse order.

Multiplication Table:
Write a program to print the multiplication table of a given number (up to 10).

Factorial Calculation:
Write a program to calculate and print the factorial of a given number.

Square of Numbers:
Write a program to print the square of numbers from 1 to 15.

Odd Numbers:
Write a program to print all odd numbers from 1 to 25.

Power of Two:
Write a program to print the powers of 2 up to 2^10.

Count Vowels:
Write a program that takes a string as input and counts the number of vowels in it using a loop.

Fibonacci Series:
Write a program to print the Fibonacci series up to the 10th term.

Factorization:
Write a program to find and print the prime factorization of a given number.

*/


//while
/*
var number=1;
while(number <= 5) {
    console.log("The value of number is " + number);
    number++;
}
*/

var number=1;
while(number<=10){
    if (number%2==0) {
        console.log('even numbers are '+number+'');
    } else{
        console.log('odd numbers are '+number+' ')
    }
    number++

}


