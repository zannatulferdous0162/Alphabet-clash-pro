document.addEventListener('keyup', function handleKeyboardButtonpress(event) {
    const playerPressed = event.key;

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabetText = currentAlphabetElement.innerText;
    const currentAlphabet = currentAlphabetText.toLocaleLowerCase();
    console.log(playerPressed, currentAlphabet);

    //check the point
    if (currentAlphabet === playerPressed) {
      const currentScore =  getTextValueById('current-score');
      
        const newScore = currentScore + 1;
        currentScore.innerText = newScore
        console.log(currentScore);
        
        removeBackgroundColor(currentAlphabet);// start a new round
        continueGame();
    } else {
        // const lifeUpdateElements = document.getElementById('update-life');
        // const lifeUpdateText = lifeUpdateElements.innerText;
        // const lifeUpdate = parseInt(lifeUpdateText);

        // const currentLife = lifeUpdate -1;
        // lifeUpdateElements.innerText = currentLife;
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