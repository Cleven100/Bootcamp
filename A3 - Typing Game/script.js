const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');



const words = [
    'sigh',
    'tense',
    'airplane',
    'ball'
];

let randomWord;
let score = 0;
let time = 10;

function getRandowmWord() {
    return words[Math.floor(Math.random() * words.length)]
}

function updateScore() {
    score++;
    scoreEl.innerHTML = score;
}

function addWordToDOM() {
 randomWord = getRandowmWord();
 word.innerHTML = randomWord;
}

addWordToDOM();

text.addEventListener('input', e => {
    const insertedText = e.target.value;
    

    if(insertedText === randomWord) {
        addWordToDOM();

        updateScore();


        e.target.value = '';
    }
})