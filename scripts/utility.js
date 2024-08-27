function hideElementById(elementId) {
    const homeSection = document.getElementById(elementId);
    homeSection.classList.add('hidden');
}

function showElementById(elementId) {
    const playgroundSection = document.getElementById(elementId);
    playgroundSection.classList.remove('hidden');
}

function setBackgroundColorById(elementId) {
    const setBackground = document.getElementById(elementId);
    setBackground.classList.add('bg-orange-600');
}
function removeBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-600');
}
function getTextValueById(elementId){
    const currentScoreElement = document.getElementById(elementId);
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);
    return currentScore;
}
function setTextElementValueById(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getRandomAlphabet() {
    //create an alphabet arry
    const alphabetString = 'abcdefghijklmnopqrstwxyz';
    const alphabets = alphabetString.split('');
    //get random alphabet 
    const randomAlphabet = Math.random() * 25;
    const index = Math.round(randomAlphabet);
    //set alphabet
    const alphabet = alphabets[index];
    // console.log(alphabets, index, alphabet);
    return alphabet;
}