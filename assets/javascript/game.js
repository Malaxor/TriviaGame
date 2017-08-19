//Pseudo-coding //

// the start button will initiate a countdown, from 30 to 0 (seconds)
// once the timer reaches 0 seconds, questions-form will disappear, and a finish screen will replace it
// the finish screen will display the number of correct answers and incorrect answers
// if the player manages to answer all questions before the timer reaches 0 seconds, he/she can click the finish button
// the finish button, just like when the timer reaches 0 seconds, will hide the question-form and produce--in its place--the finish screen


// Global Variables========================================================================================================================
	
	// at the end of a game, these variables will display the number of correct and incorrect guesses 
	var correct = 0;
	var incorrect = 0;

	// the start button will count down from 30
	var time = 31;

	// this variable (now empty) will be assigned a value in the startCount function
	// it will be cleared in the stopCount function, effectively halting the dynamic count-down when time reaches 0 --->
	// ---> or when the finish button is clicked
	var interval;

// Functions ==============================================================================================================================

	// function will decrement time by 1
	// the time will be displayed in HTML
	// the title, start/stop buttons, and quiz-form will be hidden and replaced by the finish screen once timer reaches 0
	// furthermore, the endGame function (with checkScore) will tally the correct and incorrect answers and display them in the finish screen
	function timer() {
		time--;
		$("#timer").html(time)

		if (time === 0) {
			stopCount();
			endGame();
			
		}	
	}	
	// startCount function will run when the start button is clicked
	// the interval variable is now assigned, as a value, setInterval, which alters the timer function by 1 second
	function startCount () {
		interval = setInterval(timer, 1000);
	}	

	// this function will clear the interval variable
	function stopCount () {
		clearInterval(interval);
	}

	// associate all five questions to five distinct variables
	// run checkScore function to find out whether or not the user selected the correct answer
	function endGame () {
		var q1 = document.getElementsByName("q1")
		var q2 = document.getElementsByName("q2")
		var q3 = document.getElementsByName("q3")
		var q4 = document.getElementsByName("q4")
		var q5 = document.getElementsByName("q5")

		checkScore(q1, "correct");
		checkScore(q2, "correct");
		checkScore(q3, "correct");
		checkScore(q4, "correct");
		checkScore(q5, "correct");

		$(".container").hide();
		$("#finish-screen").show();
		$("#number-correct").html(correct);
		$("#number-incorrect").html(incorrect);

	}

	// checkScore function will extract the value that holds the correct answer
	// initially, a for-loop will check each questions for the "checked" radio input
	// secondly, when the for-lop discovers the checked answer it will compare the value of the radio input with checkScore's second paramater
	// finally, if the value matches the paramater, the correct variable will incremement by one
	// if the value doesn't match the paramater, the incorrect variable will increment by one
	function checkScore (questions, answers) {

		for (var i = 0; i < questions.length; i++) {

			if (questions[i].checked) {

				if (questions[i].value === answers) {
					correct++;
				}
				else {
					incorrect++;
				}
			}
		}
	}


	

	
	


	



