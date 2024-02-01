var userScore = parseInt(localStorage.getItem('userScore')) || 0;
var computerScore = parseInt(localStorage.getItem('computerScore')) || 0;
document.querySelector('.user-score .score-num').textContent = userScore;
document.querySelector('.computer-score .score-num').textContent = computerScore;


function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return '1';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return '2';
    } else {
        return '3';
    }
}

function selectedChoice(choice,turn) {
    // Get the corresponding circle element based on the choice
    let selectedCircle;
    if (choice === 'rock') {
        selectedCircle = options[0].cloneNode(true); // Clone the circle
    } else if (choice === 'scissors') {
        selectedCircle = options[1].cloneNode(true);
    } else {
        selectedCircle = options[2].cloneNode(true);
    }
    if(turn==='user'){
        var textE=document.createElement('p');
        textE.textContent='YOU PICKED';
        textE.classList.add('turn1');
        resultBox.appendChild(textE);
        selectedCircle.style.top='25%';
        selectedCircle.style.left='0%';
    }else{
        var textE=document.createElement('p');
        textE.textContent='PC PICKED';
        textE.classList.add('turn2');
        resultBox.appendChild(textE);
        selectedCircle.style.top='25%';
        selectedCircle.style.left='80%';
    }
    // Append the cloned circle to the result-box
    resultBox.appendChild(selectedCircle);
}

function decision( decisionS){
    var divElement = document.createElement('div');
    divElement.classList.add('result-status')
    var heading1 = document.createElement('h1');
    heading1.textContent = decisionS;

    var heading2 = document.createElement('h3');
    heading2.textContent = 'AGAINST   PC';
    divElement.appendChild(heading1);
    divElement.appendChild(heading2);
    var button = document.createElement('button');
    button.classList.add('replay');
    button.textContent='PLAY AGAIN';
    divElement.appendChild(button);
    button.addEventListener('click',function(){
        game.classList.remove('hidden');
        resultBox.classList.remove('result-box-after-click');
    });
    resultBox.appendChild(divElement);
}

function playGame(playerChoice) {
    game.classList.toggle('hidden');
    resultBox.classList.toggle('result-box-after-click');
    const computerChoice = computerPlay();
    const result = playRound(playerChoice, computerChoice);
    if(result==='1'){
        whoIsWinner = -1;
        decision('TIE UP');
    }else if(result==='2'){
        userScore++;
        document.querySelector('.user-score .score-num').textContent = userScore;
        rulesButton.style.display='none';
        nextPage.style.display='flex';
        decision('YOU WIN');
    }else{
        computerScore++;
        document.querySelector('.computer-score .score-num').textContent = computerScore;
        decision('YOU LOST');
    }
    localStorage.setItem('userScore', userScore);
    localStorage.setItem('computerScore', computerScore);
    return computerChoice;
    // const resultDiv = document.getElementById('result');
    // resultDiv.innerHTML = `<p>You chose ${playerChoice}. Computer chose ${computerChoice}.</p>`;
    // resultDiv.innerHTML += `<p>${result}</p>`;
}  
    
    var disappearRulesBox = document.getElementById('disappear-rules-box');
    var rulesBox = document.getElementById('rules-box');
    var rulesButton = document.getElementById('rules-button');
    var stone=document.querySelector('.circle1');
    var scissor=document.querySelector('.circle2');
    var paper=document.querySelector('.circle3');
    var game=document.querySelector('.stone-paper-sicssor-box');
    var resultBox=document.querySelector('.result-box');
    var options=document.querySelectorAll('.circle');
    var gameParent=document.querySelector('.game');
    var nextPage=document.querySelector('.next-page');
    

    // Add a click event listener to the disappear-rules-box
    disappearRulesBox.addEventListener('click', function () {
        // Toggle the visibility of the rules-box by adding/removing the 'hidden' class
        rulesBox.classList.toggle('hidden');
        disappearRulesBox.classList.toggle('hidden');
    });
    rulesButton.addEventListener('click',function(){
        rulesBox.classList.remove('hidden');
        disappearRulesBox.classList.remove('hidden');
    });
    stone.addEventListener('click', function() {
        resultBox.innerHTML = '';
        selectedChoice('rock','user');
        var comChoice=playGame('rock');
        console.log(comChoice);
        selectedChoice(comChoice,'computer');
        console.log(whoIsWinner);
    });
    scissor.addEventListener('click', function() {
        resultBox.innerHTML = '';
        selectedChoice('scissors','user');
        var comChoice=playGame('scissors');
        console.log(comChoice);
        selectedChoice(comChoice,'computer');
        console.log(whoIsWinner);
    });
    
    paper.addEventListener('click', function() {
        resultBox.innerHTML = '';
        selectedChoice('paper','user');
        var comChoice=playGame('paper');
        console.log(comChoice);
        selectedChoice(comChoice,'computer');
        console.log(whoIsWinner);
    });
    document.querySelector('.next-button').addEventListener('click', function() {
        window.location.href = 'winner.html';
    });
    document.querySelector('.rules-button2').addEventListener('click', function() {
        rulesBox.classList.remove('hidden');
        disappearRulesBox.classList.remove('hidden');
    });