// // step 1: hide the home screen. to hide the screen and the class hidden to the home section

// //show the playGround

// function play() {
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     //    console.log(homeSection.classList);

//     // PlayGroundSection

//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');

// }


function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;  //konta press kortesi
    console.log('Player Pressed', playerPressed);

    //get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);
    // console.log(currentAlphabetElement.innerText);


    // check matched or not
    if (playerPressed === expectedAlphabet) {
        console.log("win");
        const currentScore = document.textElementValueById('current-score');





        // console.log('u pressed corectly ', expectedAlphabet);
        // show the update score
        // 1-Get the current score
          
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScoreText);

        

        //  // 2-increase the score  by 1
        // const newScore = currentScore + 1;

        // // 3-show the updated score
        // currentScoreElement.innerText = newScore;

        //start a new round

        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('fail');

     //Step-1:get the current life number
     const currentLifeElement = document.getElementById('current-life');
     const currentLifeText = currentLifeElement.innerText;
     const currentLife = parseInt(currentLifeText);
     
     // Step-2: reduce  the life count
     const newLife = currentLife - 1;

     //Step-3: Display the updated life count
     currentLifeElement.innerText = newLife;
    }

}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);


function continueGame() {
    // step-1: Generate a random alphabet
    const alphabet = getRandomAlphabet();
    // console.log('your random Alphabet', alphabet);


    // set randomly generated  alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //Set backlground color
    setBackgroundColorById(alphabet);

}


function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}