let currentQuestion = 0;
let score = 0;
let totQuestions = aufgaben.length;

const container = document.getElementById('quizContainer');
const questionEl = document.getElementById('question');
const opt1 = document.getElementById('opt1');
const opt2 = document.getElementById('opt2');
const opt3 = document.getElementById('opt3');

const answerButton = document.getElementById('answerButton');

const nextButton = document.getElementById('nextButton');

const endButton = document.getElementById('endButton');

const resultCont = document.getElementById('result');

const repeatButton = document.getElementById('repeatButton');


function loadQuestion (questionIndex) {
	var q = aufgaben[questionIndex];

	questionEl.textContent = (questionIndex + 1) + '. '  + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
};


function loadNextQuestion () {
	
	var selectedOption = document.querySelector('input[type=radio]:checked');

	if(!selectedOption){
		alert('Bitte wähle eine Antwort!');
		return;
    }
	
	var answer=selectedOption.value;
	if(aufgaben[currentQuestion].answer == answer){	
	score += 1;
	answerButton.style.display='';
	answerButton.textContent='richtig';
	answerButton.style.backgroundColor="hsl(140, 80%, 46%)"
	}	
	else{
	answerButton.style.display='';
	answerButton.textContent='falsch';
	answerButton.style.backgroundColor="hsl(360, 80%,60%)"	
	}
	setTimeout(()=>answerButton.style.display='none',1500);
	
	selectedOption.checked=false;

	currentQuestion++;
	
	
	
	if(currentQuestion == totQuestions){
		
		container.style.display = 'none';
		
		nextButton.style.display='none';
		
		endButton.style.display='';

		endButton.textContent='Ende';

		return;	
	}
	loadQuestion(currentQuestion);
	
}
loadQuestion(currentQuestion);

function showResult (){

	endButton.style.display='none';
	
	answerButton.style.display='none'; 

	resultCont.style.display = '';

	if(score==1){
	resultCont.textContent = 'Du hast '+ score +' Punkt erreicht!';
	}
	else{
	resultCont.textContent = 'Du hast '+ score +' Punkte erreicht!';
	};
	repeatButton.style.display='';

	repeatButton.textContent='noch einmal spielen?';
	
}

function reload(){
	repeatButton.style.display='none';
	resultCont.style.display='none';
	location.reload ();
	}
