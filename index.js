let marks = prompt("Enter student marks (between 0 and 100):");

// Convert the input to a number
marks = Number(marks);

// Check if the input is valid (between 0 and 100)
if (isNaN(marks) || marks < 0 || marks > 100) {
  console.log("Invalid input!");
} else {
  // Determine the grade based on the marks
  let grade;
  if (marks > 79) {
    grade = "A";
  } else if (marks >= 60 && marks <= 79) {
    grade = "B";
  } else if (marks >= 50 && marks <= 59) {
    grade = "C";
  } else if (marks >= 40 && marks <= 49) {
    grade = "D";
  } else {
    grade = "E";
  }

  console.log(`The grade for ${marks} is ${grade}`);
}

/**This code first prompts the user to input the student marks and converts the input to a number. 
It then checks if the input is valid (between 0 and 100) using the isNaN and comparison operators. 
If the input is valid, the code determines the grade based on the marks using a series of if...else statements and 
outputs the result to the console using a template literal. **/

let speed = prompt("Enter car speed:");

// Convert the input to a number
speed = Number(speed);

// Check if the input is valid (a number greater than 0)
if (isNaN(speed) || speed <= 0) {
  console.log("Invalid input!");
} else {
  // Calculate the demerit points based on the speed
  let demeritPoints = 0;
  if (speed <= 70) {
    console.log("Ok");
  } else {
    demeritPoints = Math.floor((speed - 70) / 5);
    console.log(`Points: ${demeritPoints}`);

    // Check if the driver's license should be suspended
    if (demeritPoints > 12) {
      console.log("License suspended");
    }
  }
}



