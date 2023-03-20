# wk1-code-challenge

Challenge 1: Student Grade Generator (Toy Problem)
Write that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 

A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
This code first prompts the user to input the student marks and converts the input to a number. 
It then checks if the input is valid (between 0 and 100) using the isNaN and comparison operators. 
If the input is valid, the code determines the grade based on the marks using a series of if...else statements and 
outputs the result to the console using a template literal.


Challenge 2: Speed Detector (Toy Problem)
Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

 
This code first prompts the user to input the speed of the car and converts the input to a number. 
It then checks if the input is valid (a number greater than 0) using the isNaN and comparison operators. 
If the input is valid, the code calculates the demerit points based on the speed using the Math.floor 
function and outputs the result to the console using a template literal. If the driver's demerit points exceed 12, 
the code also prints "License suspended". If the speed is less than or equal to 70, the code simply outputs "Ok" to the console.


Challenge 3: Net Salary Calculator (Toy Problem)
Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 
NB: Use KRA, NHIF, and NSSF values provided in the link below.

https://www.aren.co.ke/payroll/taxrates.htmLinks to an external site.  

https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/payeLinks to an external site.

