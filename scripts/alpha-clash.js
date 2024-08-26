document.addEventListener('keyup', function handleKeyboardButtonpress(event) {
    const playerPressed = event.key;

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabetText = currentAlphabetElement.innerText;
    const currentAlphabet = currentAlphabetText.toLocaleLowerCase();
    console.log(playerPressed, currentAlphabet);

    //check the point
    if (currentAlphabet === playerPressed) {
        //update score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
    
        const newScore = currentScore + 1;
        currentScoreElement.innerText = newScore
        console.log(currentScore);
        


        removeBackgroundColor(currentAlphabet);// start a new round
        continueGame();
    } else {
        console.log('bad');
    }
})



function continueGame() {
    const alphabet = getRandomAlphabet();
    // console.log(alphabet);

    // display random alphabet
    const displayAlphabet = document.getElementById('current-alphabet');
    displayAlphabet.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
    // removeBackgroundColor(alphabet);
}


function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}