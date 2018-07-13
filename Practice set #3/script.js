//Question no 1
let speed = 70;


if (speed > 60){
	console.log("OVER");
} else {
	console.log("OK");
}

//Question no 2
let name = "Saqib";
let isLoggedIn = true;

if (isLoggedIn === true){
	console.log("Welcome," + name);
} 

//Question no 3
let maxTemperature = 50;
let todayTemp = 41;

if (todayTemp < maxTemperature){
	console.log("UIT is closed tomorrow due to heat wave");
}

  else {
  	console.log("OPEN");
  }


//Question no 4
let  millionairePerson = 50000000;
let ownMoney=100000000;

if (ownMoney >= 50000000){
	console.log("millionairePerson");
} 
else{
	console.log("NOT millionaire");
}


//Question no 5
let isElectric=false;
let isLoggnedIn = true;

if(isElectric === false){
	console.log("The car has been manufactured by Tesla");

}

else{
	console.log("The car has been not manufactured by Tesla");
}


//Question no 6
let highScore = 120;
let currentHighScore = 1;

if(currentHighScore > highScore){
	console.log("Congratulations!! "+ "Your score is "+ currentHighScore);
} else {
	console.log("You need  this score "+(highScore - currentHighScore + 1));
}


//Question no 7
let number = 101;

if (number%2 !==0){
	console.log("This number is ODD");
}  
	 else {
	console.log("This number is  EVEN");
   }


//Question no 8
let year = 1916;

if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)){
	console.log("This is a Leap year!!!");
}
	else{
		console.log("This is NOT a Leap year");
	}



//Question no 9
let balance =1;

if (balance <=1){
	console.log("Moazziz Sarif, aap ka mojooda balance is call k lye naa kaafi hai. Please re-charge karain");

} 	else if(balance >= 2 && balance < 10){
	console.log("Moazziz sarif, aap ka balance khatam honay wala hai" );
	console.log("Ring Ring");
}  	else{
	console.log("Ring Ring");
}



//Question no 10
let absentStudent = 2;

if (absentStudent <= 2){
	console.log("This students eligible for the award in that month.");
}	else{
	console.log("They are not eligible.");
}

//Question no 11

let obtainedMarks = 92;
let totalMarks= 100;

if ( obtainedMarks >= 91 && obtainedMarks <=100) {
  console.log("A+");
}

else if ( obtainedMarks >= 86 && obtainedMarks <= 90) {
  console.log("A ");
}

else if ( obtainedMarks >= 80 && obtainedMarks <= 85) {
  console.log("A- ");
}

else if ( obtainedMarks >= 70 && obtainedMarks <= 79) {
  console.log("A ");
}

else if ( obtainedMarks >= 60 && obtainedMarks <= 69) {
  console.log("B");
}

else if ( obtainedMarks >= 50 && obtainedMarks <= 59) {
  console.log("C");
}

else if ( obtainedMarks >= 40 && obtainedMarks <= 49) {
  console.log("E");
} 

else if ( obtainedMarks >= 30 ) {
  console.log("F");
}

else{
  console.log("Fail");
}


//Question no 12
let noOfApples = 1;
let noOfMangoes = 3;
let noOfBananas = 2;

let cost = noOfApples * 10 + noOfMangoes * 15 + noOfBananas * 8;

if (cost < 100){
	console.log("Shopping SUCCESS!!");
}	else {
	console.log("FAILED! Not enough money");
}



//Question no 13
let customer = 	"What are the timings of today's class?";


if (customer === "Hi or Hello or Hey or Salam"){

	console.log("Thank you for calling TechKaro Customer Service. How may I help you?");
}	
	else if  (customer === "Is UIT open today?"){

	console.log("Yes");
}	
	else if ( customer === "What are the timings of today's class?"){

	console.log("2 pm - 6 pm");
}	
	else if (customer === "Where will the class be conducted?") {
	console.log("At CL-1, Usman Institute");

}


//Question no 14
let customerAccount = 10000;
let withdraw = 500;
let remainder = customer - withdraw;

if (remainder > 5000){

	console.log("Withdrawal SUCCESS! Your new balance is " + remainder);
}	
	else {
	console.log("Withdrawal FAILED! Sorry, you do not have sufficient balance.");
}


//Question no 15
let itsNotRaining = true;
let itsNotSnowing = true;
let windSpeedLessThan15KmHr = true;
let itsNotCloudy = true;


if (itsNotRaining === true && itsNotSnowing === true 
	&& windSpeedLessThan15KmHr === true && itsNotCloudy ===true){
	console.log("Weather conditions are suitable for rocket");
}	
	else {
	console.log("weather conditions are not suitable ")
}


//Question no 16
let mathsTest = 10;
let studentMathsPoints = 10;
let computersTest = 20;
let studentcomputersPoints = 20;
let englishsTest =8;
let studentenglishsPoints = 8;
 
if (studentMathsPoints >= 10 || studentcomputersPoints >= 20  || studentenglishsPoints >= 8){
	console.log("This student passed the admission test");
}	
	else{
	console.log("This student failed");
}


//Question no 17
let mathTest = 10;
let studentMathPoints = 10;
let computerTest = 20;
let studentcomputerPoints = 20;
let englishTest =8;
let studentenglishPoints = 8;
 
if (studentMathPoints >= 10 || studentcomputerPoints >= 20  || studentenglishPoints >= 8){
	console.log("This student passed the TechKaro admission  test");
}	
	else{
	console.log("This student failed the TechKaro admission  test");
}



//Question no 18
let girlsMajority = 2;
let boysMajority = 12;


if (girlsMajority > boysMajority){
    console.log("Girls are in majority");
} 
	else if (girlsMajority < boysMajority) {
    console.log("Boys are in majority");    
} 
	else {
    console.log("The class has an equal number of girls and boys");        

}


//Question no 19
let costOfApple = 10;
let costOfMango = 10;

if (costOfApple == costOfMango) {
    console.log("Apple and mango cost the same!");
} 
	else if (costOfApple <  costOfMango) {
    console.log("Mango is more expensive");
} 
	else {
    console.log("Apple is more expensive");
}	


//Question no 20
let maths = 00;
let english = 00;
let computerSkills = 82;

if (maths > 50 && english > 50 && computerSkills > 50) {
    console.log("Congratulations! You have passed the TechKaro Admission Test!");
} 
	else if ((maths > 50 && english > 50) || computerSkills > 80) {
    console.log("You have also qualified!");
} 
	else {
    console.log("Sorry! Please try again next year!");    
}


