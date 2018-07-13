//Question no #1
// function squareNumbers(){
// 	let numb = parseInt(document.querySelector("#inp1").value);
// 	alert ( numb * numb);


// }

//Question no #2

// function cubeNumbers(){
// 	let numb = parseInt(document.querySelector("#inp1").value);
// 	alert ( numb * numb * numb);


// }


//Question no #3
// function plusNumbers(){
// 	let numb1 = parseInt(document.querySelector("#inp1").value);
// 	let numb2 = parseInt(document.querySelector("#inp2").value);
// 	alert(numb1 + numb2);

// }


//Question no #4
// let costOfApples = 10;
// let costOfBanans = 15;
// let costOfMangos = 8;

// function fruitSum(){
// 	let noOfApples= parseInt(document.querySelector("#inp1").value);
// 	let noOfBanans= parseInt(document.querySelector("#inp2").value);
// 	let noOfMangos= parseInt(document.querySelector("#inp3").value);
// 	let totalCost= costOfApples*noOfApples + costOfBanans*noOfBanans + costOfMangos*noOfMangos;

// 	alert(totalCost);
// }


//Question no #5
// function marksSheet(){
// 	let obtainedMarks = parseInt(document.querySelector("#inp1").value);
// 	let fullMarks = 1050;
// 	let percentage= (obtainedMarks/fullMarks)*100;
// 	percentage = Math.round(percentage*100)/100;
// 	alert(percentage + "%");
// }


//Question no #6

// let mathMarks= 20;
// let englishMarks = 10;
// let compMarks = 50;

// function teckKaroTest(){
// 	let myMathMarks = parseInt(document.querySelector("#inp1").value);
// 	let myEnglishMarks = parseInt(document.querySelector("#inp2").value);
// 	let myCompMarks = parseInt(document.querySelector("#inp3").value);

// 	if(myMathMarks>= mathMarks && myEnglishMarks>= englishMarks && myCompMarks>=compMarks){
// 		alert("You have passed the TechKaro Test");
// 	} 	else{
// 		alert("You have to hardwork to pass the TechKaro Test");
// 	}


// }




//Question no #7
// let maxSpeed = 60;
// function speedLimit(){
// 	let carSpeed = parseInt(document.querySelector("#inp1").value);
// 	if(carSpeed>= maxSpeed){
// 		alert("You are Overspeeding");
// 	} 	else{
// 		alert("Not Overspeeding");
// 	}
// }


//Question no #8
// function userName(){
// 	let name =document.querySelector("#inp1").value;
// 	alert( "Welcome, " + name);
// }



//Question no #9

let numb1;
let numb2;



function setValue(){
	numb1 = parseInt(document.querySelector("#inp1").value);
	numb2 = parseInt(document.querySelector("#inp2").value);
}
function sumNumb(){
	setValue()
	alert(numb1 + numb2);
}

function subNumb(){
	setValue()
	alert(numb1 - numb2);
}

function mulNumb(){
	setValue()
	alert(numb1 * numb2);
}


function didNumb(){
	setValue()
	alert(numb1 / numb2);
}


function remNumb(){
	setValue()
	alert(numb1 % numb2);
}