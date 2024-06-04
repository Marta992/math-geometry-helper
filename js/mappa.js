var currentCheckpoint = 1;

function showQuestion(point) {
    
    if (point === currentCheckpoint) {
        var questionContainer = document.getElementById('question-container');
        var questionText = document.getElementById('question');
        var answerInput = document.getElementById('answer');

        if (point === 1) {
            questionText.textContent = "lato per lato, si trova l'area di quale figura geometrica?";
        } else if (point === 2) {
            questionText.textContent = "Quanto fa 17 + 84?";
        } else if (point === 3) {
            questionText.textContent = "quali sono...";
        } else if (point === 4) {
            questionText.textContent = "Quanto fa ...?";
        } else if (point === 5) {
            questionText.textContent = "Quanto fa ...4?";
        } else if (point === 6) {
            questionText.textContent = "Quanto fa ...?";
        }

        answerInput.value = '';
        questionContainer.style.display = 'block';
    }
}

function checkAnswer() {
    var answerInput = document.getElementById('answer').value.toLowerCase();
    var correctAnswer = '';

    if (currentCheckpoint === 1) {
        correctAnswer = 'si';
    } else if (currentCheckpoint === 2) {
        correctAnswer = 'si';
    }  else if (currentCheckpoint === 3) {
        correctAnswer = 'si';  
    } else if (currentCheckpoint === 4) {
        correctAnswer = 'si';
    }  else if (currentCheckpoint === 5) {
        correctAnswer = 'si';
    } else if (currentCheckpoint === 6) {
        correctAnswer = 'si';
    }

    if (answerInput === correctAnswer) {
        alert('Risposta corretta!');
        document.getElementById('question-container').style.display = 'none';
        document.getElementById('point' + currentCheckpoint).style.display = 'none';

        currentCheckpoint++;

        if (currentCheckpoint === 2) {
            document.getElementById('point2').style.display = 'block';
        } else if (currentCheckpoint === 3) {
            document.getElementById('point3').style.display = 'block';
        } else if (currentCheckpoint === 4) {
            document.getElementById('point4').style.display = 'block';
        } else if (currentCheckpoint === 5) {
            document.getElementById('point5').style.display = 'block';
        } else if (currentCheckpoint === 6) {
            document.getElementById('point6').style.display = 'block';
        } else if (currentCheckpoint === 7) {
            document.getElementById('point7').style.display = 'block';
            
        }
    } else {
        alert('Risposta sbagliata, riprova.');
    }
}

function showTreasure() {
    alert("HAI TROVATO IL TESORO");
    document.getElementById('point7').style.display = 'none';
    document.getElementById('treasure').style.display = 'block';

}
