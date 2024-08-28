document.addEventListener('keyup', function handleKeyboardButtonpress(event) {
    const playerPressed = event.key;

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
        const currentLife = getTextValueById('currebt-life');
        const updatedLife = currentLife - 1;
//         setTextElementValueById('currebt-life', updatedLife);

//         if(updatedLife === 0 ){
            
//         }
//     }
// })



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