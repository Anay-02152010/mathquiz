player1_name = localStorage.getItem("player1_number");
	player2_name = localStorage.getItem("player2_number");

	number1_score = 0;
	number2_score = 0;

document.getElementById("player1_number").innerHTML = player1_number + " : ";
document.getElementById("player2_number").innerHTML = player2_number + " : ";

document.getElementById("number1_score").innerHTML = number1_score ;
document.getElementById("number2_score").innerHTML = number2_score ;

document.getElementById("number_question").innerHTML = "Question Turn - " + player1_number ;
document.getElementById("number_answer").innerHTML = "Answer Turn - " + player2_number ;

function send() {
	number1 = document.getElementById("number1").value;
	number2 = document.getElementById("number2").value;
	actual_answer = parseInt(number1) * parseInt(number2);
	console.log(actual_answer);


    question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
	document.getElementById("number1").value = "";
	document.getElementById("number2").value = "";
}


question_turn = "number1";
answer_turn = "number2";

function check()
{
	get_answer = document.getElementById("input_check_box").value;
	if(get_answer == actual_answer)	
	{
		if(answer_turn == "number1")
		{
			number1_score = number1_score +1;
		    document.getElementById("number1_score").innerHTML =number1_score;
		}
		else 
		{
			number2_score = number2_score +1;
		    document.getElementById("number2_score").innerHTML = number2_score;
		}
	}
	
	if(question_turn == "number1")
	{
		question_turn = "number2"
		document.getElementById("number_question").innerHTML = "Question Turn - " + player2_number ;
	}
	else 
	{
		question_turn = "number1"
		document.getElementById("number_question").innerHTML = "Question Turn - " + player1_number;
	}

	if(answer_turn == "number1")
	{
		answer_turn = "number2"
		document.getElementById("number_answer").innerHTML = "Answer Turn - " + player2_number ;
	}
	else 
	{
		answer_turn = "number1"
		document.getElementById("number_answer").innerHTML = "Answer Turn - " + player1_number ;
	}

    document.getElementById("output").innerHTML = "";
}
if(question_turn == "number1")
	{
		question_turn = "number2"
		document.getElementById("number_question").innerHTML = "Question Turn - " + player2_number ;
	}
	else 
	{
		question_turn = "number1"
		document.getElementById("number_question").innerHTML = "Question Turn - " + player1_number ;
	}

    document.getElementById("output").innerHTML = "";



