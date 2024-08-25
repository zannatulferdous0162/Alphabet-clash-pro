function hideElementById(elementId) {
    const homeSection = document.getElementById(elementId);
    homeSection.classList.add('hidden');
}

function showElementById(elementId) {
    const playgroundSection = document.getElementById(elementId);
    playgroundSection.classList.remove('hidden');
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
    console.log(alphabets, index, alphabet);
    return alphabet;
}