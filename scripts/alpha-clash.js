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

function continueGame(){
    // step-1: Generate a random alphabet
    const alphabet = getRandomAlphabet();
    console.log('your random Alphabet', alphabet);
    

}


function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}