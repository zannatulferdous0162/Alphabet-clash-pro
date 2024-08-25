
function continueGame() {
    const alphabet = getRandomAlphabet();
    console.log(alphabet);

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