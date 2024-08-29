document.addEventListener('keyup', function handleKeyboardButtonpress(event) {
    const playerPressed = event.key;
//stop game
if(playerPressed === 'Escape'){
    gameOver();
}
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabetText = currentAlphabetElement.innerText;
    const currentAlphabet = currentAlphabetText.toLocaleLowerCase();
    console.log(playerPressed, currentAlphabet);

    //check the point
    if (currentAlphabet === playerPressed) {
        const currentScore = getTextValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);//updated score
        removeBackgroundColor(currentAlphabet);// start a new round
        continueGame();
    } else {
        const currentLife = getTextValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);
        if (updatedLife === 0) {
            gameOver();
        }
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
    hideElementById('final-score');
    showElementById('play-ground');
    setTextElementValueById('current-life', 5)
    setTextElementValueById('current-score', 0)
    continueGame();
}
function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');
    //update final score
    const finalScore =  getTextValueById('current-score');
    setTextElementValueById('last-score',finalScore);
    //remove old alphabet clr
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColor(currentAlphabet);  
}