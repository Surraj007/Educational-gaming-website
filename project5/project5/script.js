document.addEventListener('DOMContentLoaded', function() {
    const mathGames = ['Math Game 1', 'Math Game 2', 'Math Game 3'];
    const scienceGames = ['Science Quiz 1', 'Science Quiz 2', 'Science Quiz 3'];
    const geographyGames = ['Geography Quiz 1', 'Geography Quiz 2', 'Geography Quiz 3'];
  
    function getRandomGames(games, count) {
      let shuffled = games.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    }
  
    function displayGames() {
      document.getElementById('mathGames').innerHTML = getRandomGames(mathGames, 2).join('<br>');
      document.getElementById('scienceGames').innerHTML = getRandomGames(scienceGames, 2).join('<br>');
      document.getElementById('geographyGames').innerHTML = getRandomGames(geographyGames, 2).join('<br>');
      
    }
  
   // function searchGames() {
     // let input = document.getElementById('searchBar').value.toLowerCase();
      //let allGames = [...mathGames, ...scienceGames, ...geographyGames, ...puzzleGames];
      //let results = allGames.filter(game => game.toLowerCase().includes(input));
      //document.getElementById('featuredGames').innerHTML = results.join('<br>');
    //}
  
    //document.getElementById('searchBar').addEventListener('input', searchGames);
  
 //   displayGames();
  });

  let scores = JSON.parse(localStorage.getItem('scores')) || {};

function updateScore(game, score) {
  scores[game] = (scores[game] || 0) + score;
  localStorage.setItem('scores', JSON.stringify(scores));
  displayScores();
}

function displayScores() {
  let scoreboard = document.getElementById('scoreboard');
  scoreboard.innerHTML = '';
  for (let game in scores) {
    scoreboard.innerHTML += `<p>${game}: ${scores[game]}</p>`;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  displayScores();
});

document.addEventListener('DOMContentLoaded', function() {
  

  const searchBar = document.getElementById('searchBar');
  searchBar.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      alert(`Search for: ${searchBar.value}`);
    }
  });
});

//MATH GAME CODE_1
const operations = ['+', '-', '*', '/'];
let currentQuestion;
let correctAnswer;

function generateQuestion() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const operation = operations[Math.floor(Math.random() * operations.length)];
  currentQuestion = `${num1} ${operation} ${num2}`;
  correctAnswer = eval(currentQuestion).toFixed(2);
  document.getElementById('question').textContent = `Solve: ${currentQuestion}`;
}

function checkAnswer() {
  const userAnswer = parseFloat(document.getElementById('answer').value);
  const result = document.getElementById('result');
  if (userAnswer === parseFloat(correctAnswer)) {
    result.textContent = 'Correct!';
  } else {
    result.textContent = `Wrong. The correct answer was ${correctAnswer}`;
  }
  generateQuestion();
  document.getElementById('answer').value = '';
}

document.addEventListener('DOMContentLoaded', generateQuestion);

//MATH GAME CODE_2
let sequence = '';
const sequenceLength = 5;

function generateSequence() {
  sequence = '';
  for (let i = 0; i < sequenceLength; i++) {
    sequence += Math.floor(Math.random() * 10);
  }
  document.getElementById('sequence').textContent = sequence;
  setTimeout(() => {
    document.getElementById('sequence').textContent = '';
  }, 3000);
}

function checkSequence() {
  const userSequence = document.getElementById('userSequence').value;
  const memoryResult = document.getElementById('memoryResult');
  if (userSequence === sequence) {
    memoryResult.textContent = 'Correct!';
  } else {
    memoryResult.textContent = `Wrong. The correct sequence was ${sequence}`;
  }
  generateSequence();
  document.getElementById('userSequence').value = '';
}

document.addEventListener('DOMContentLoaded', generateSequence);

//SCIENCE-QUIZ_1
const bioQuestions = [
  { question: 'What is the powerhouse of the cell?', answer: 'mitochondria' },
  { question: 'What is the process by which plants make their food?', answer: 'photosynthesis' },
  { question: 'What is the basic unit of life?', answer: 'cell' }
];
let currentBioQuestion;

function generateBioQuestion() {
  currentBioQuestion = bioQuestions[Math.floor(Math.random() * bioQuestions.length)];
  document.getElementById('bioQuestion').textContent = currentBioQuestion.question;
}

function checkBioAnswer() {
  const userAnswer = document.getElementById('bioAnswer').value.toLowerCase();
  const bioResult = document.getElementById('bioResult');
  if (userAnswer === currentBioQuestion.answer) {
    bioResult.textContent = 'Correct!';
  } else {
    bioResult.textContent = `Wrong. The correct answer was ${currentBioQuestion.answer}`;
  }
  generateBioQuestion();
  document.getElementById('bioAnswer').value = '';
}

document.addEventListener('DOMContentLoaded', generateBioQuestion);

//SCIENCE-QUIZ_TEST2
const chemQuestions = [
  { question: 'What is the chemical symbol for water?', answer: 'h2o' },
  { question: 'What is the atomic number of carbon?', answer: '6' },
  { question: 'What is the chemical symbol for sodium?', answer: 'na' }
];
let currentChemQuestion;

function generateChemQuestion() {
  currentChemQuestion = chemQuestions[Math.floor(Math.random() * chemQuestions.length)];
  document.getElementById('chemQuestion').textContent = currentChemQuestion.question;
}

function checkChemAnswer() {
  const userAnswer = document.getElementById('chemAnswer').value.toLowerCase();
  const chemResult = document.getElementById('chemResult');
  if (userAnswer === currentChemQuestion.answer) {
    chemResult.textContent = 'Correct!';
  } else {
    chemResult.textContent = `Wrong. The correct answer was ${currentChemQuestion.answer}`;
  }
  generateChemQuestion();
  document.getElementById('chemAnswer').value = '';
}

document.addEventListener('DOMContentLoaded', generateChemQuestion);


//GEOGRAPHY-GAME CODE_1
const geoQuestions = [
  { question: 'What is the capital of France?', answer: 'paris' },
  { question: 'What is the capital of Japan?', answer: 'tokyo' },
  { question: 'What is the capital of Canada?', answer: 'ottawa' }
];
let currentGeoQuestion;

function generateGeoQuestion() {
  currentGeoQuestion = geoQuestions[Math.floor(Math.random() * geoQuestions.length)];
  document.getElementById('geoQuestion').textContent = currentGeoQuestion.question;
}

function checkGeoAnswer() {
  const userAnswer = document.getElementById('geoAnswer').value.toLowerCase();
  const geoResult = document.getElementById('geoResult');
  if (userAnswer === currentGeoQuestion.answer) {
    geoResult.textContent = 'Correct!';
  } else {
    geoResult.textContent = `Wrong. The correct answer was ${currentGeoQuestion.answer}`;
  }
  generateGeoQuestion();
  document.getElementById('geoAnswer').value = '';
}

document.addEventListener('DOMContentLoaded', generateGeoQuestion);

//GEOGRAPHY-GAME CODE_2
const flagQuestions = [
  { question: 'Which country has this flag? <img src="images/france-flag.png" alt="France Flag">', answer: 'france' },
  { question: 'Which country has this flag? <img src="images/japan-flag.png" alt="Japan Flag">', answer: 'japan' },
  { question: 'Which country has this flag? <img src="images/canada-flag.png" alt="Canada Flag">', answer: 'canada' }
];
let currentFlagQuestion;

function generateFlagQuestion() {
  currentFlagQuestion = flagQuestions[Math.floor(Math.random() * flagQuestions.length)];
  document.getElementById('flagQuestion').innerHTML = currentFlagQuestion.question;
}

function checkFlagAnswer() {
  const userAnswer = document.getElementById('flagAnswer').value.toLowerCase();
  const flagResult = document.getElementById('flagResult');
  if (userAnswer === currentFlagQuestion.answer) {
    flagResult.textContent = 'Correct!';
  } else {
    flagResult.textContent = `Wrong. The correct answer was ${currentFlagQuestion.answer}`;
  }
  generateFlagQuestion();
  document.getElementById('flagAnswer').value = '';
}

document.addEventListener('DOMContentLoaded', generateFlagQuestion);


//ENGLISH-GAME CODE_1
const grammarQuestions = [
  { question: 'She go to the market every day.', correct: 'She goes to the market every day.' },
  { question: 'He don\'t like apples.', correct: 'He doesn\'t like apples.' },
  { question: 'They was playing football.', correct: 'They were playing football.' }
];
let currentGrammarQuestion;

function generateGrammarQuestion() {
  currentGrammarQuestion = grammarQuestions[Math.floor(Math.random() * grammarQuestions.length)];
  document.getElementById('grammarQuestion').textContent = currentGrammarQuestion.question;
}

function checkGrammarAnswer() {
  const userAnswer = document.getElementById('grammarAnswer').value.trim();
  const grammarResult = document.getElementById('grammarResult');
  if (userAnswer === currentGrammarQuestion.correct) {
    grammarResult.textContent = 'Correct!';
  } else {
    grammarResult.textContent = `Wrong. The correct sentence is: "${currentGrammarQuestion.correct}"`;
  }
  generateGrammarQuestion();
  document.getElementById('grammarAnswer').value = '';
}

document.addEventListener('DOMContentLoaded', generateGrammarQuestion);


//ENGLISH GAME-CODE_2
const posQuestions = [
  { question: 'The quick brown fox jumps over the lazy dog.', correct: 'The(determiner) quick(adjective) brown(adjective) fox(noun) jumps(verb) over(preposition) the(determiner) lazy(adjective) dog(noun).' },
  { question: 'She sells seashells by the seashore.', correct: 'She(pronoun) sells(verb) seashells(noun) by(preposition) the(determiner) seashore(noun).' },
  { question: 'He ran quickly to the store.', correct: 'He(pronoun) ran(verb) quickly(adverb) to(preposition) the(determiner) store(noun).' }
];
let currentPosQuestion;

function generatePosQuestion() {
  currentPosQuestion = posQuestions[Math.floor(Math.random() * posQuestions.length)];
  document.getElementById('posQuestion').textContent = currentPosQuestion.question;
}

function checkPosAnswer() {
  const userAnswer = document.getElementById('posAnswer').value.trim().toLowerCase();
  const posResult = document.getElementById('posResult');
  if (userAnswer === currentPosQuestion.correct) {
    posResult.textContent = 'Correct!';
  } else {
    posResult.textContent = `Wrong. The correct parts of speech are: "${currentPosQuestion.correct}"`;
  }
  generatePosQuestion();
  document.getElementById('posAnswer').value = '';
}

document.addEventListener('DOMContentLoaded', generatePosQuestion);


//GK-GAME CODE_1
const tfQuestions = [
  { question: 'The Great Wall of China is visible from space.', answer: false },
  { question: 'The human body has four lungs.', answer: false },
  { question: 'Mount Everest is the tallest mountain in the world.', answer: true }
];
let currentTfQuestion;

function generateTfQuestion() {
  currentTfQuestion = tfQuestions[Math.floor(Math.random() * tfQuestions.length)];
  document.getElementById('tfQuestion').textContent = currentTfQuestion.question;
  document.getElementById('tfResult').textContent = '';
}

function checkTfAnswer(userAnswer) {
  const tfResult = document.getElementById('tfResult');
  if (userAnswer === currentTfQuestion.answer) {
    tfResult.textContent = 'Correct!';
  } else {
    tfResult.textContent = `Wrong. The correct answer is ${currentTfQuestion.answer}.`;
  }
  generateTfQuestion();
}

document.addEventListener('DOMContentLoaded', generateTfQuestion);

//GK-GAME CODE_2
const mcQuestions = [
  { 
    question: 'Who wrote the play "Romeo and Juliet"?', 
    options: ['William Shakespeare', 'Charles Dickens', 'J.K. Rowling', 'Mark Twain'],
    answer: 'William Shakespeare' 
  },
  { 
    question: 'What is the capital of Australia?', 
    options: ['Sydney', 'Melbourne', 'Brisbane', 'Canberra'],
    answer: 'Canberra' 
  },
  { 
    question: 'Which planet is known as the Red Planet?', 
    options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    answer: 'Mars' 
  }
];
let currentMcQuestion;

function generateMcQuestion() {
  currentMcQuestion = mcQuestions[Math.floor(Math.random() * mcQuestions.length)];
  document.getElementById('mcQuestion').textContent = currentMcQuestion.question;
  const mcOptions = document.getElementById('mcOptions');
  mcOptions.innerHTML = '';
  currentMcQuestion.options.forEach(option => {
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'mcOption';
    radio.value = option;
    const label = document.createElement('label');
    label.textContent = option;
    mcOptions.appendChild(radio);
    mcOptions.appendChild(label);
    mcOptions.appendChild(document.createElement('br'));
  });
  document.getElementById('mcResult').textContent = '';
}

function checkMcAnswer() {
  const selectedOption = document.querySelector('input[name="mcOption"]:checked');
  const mcResult = document.getElementById('mcResult');
  if (selectedOption && selectedOption.value === currentMcQuestion.answer) {
    mcResult.textContent = 'Correct!';
  } else {
    mcResult.textContent = `Wrong. The correct answer is ${currentMcQuestion.answer}.`;
  }
  generateMcQuestion();
}

document.addEventListener('DOMContentLoaded', generateMcQuestion);

//HISTORY-QUIZ CODE_1
const historyTfQuestions = [
  { question: 'The Great Wall of China was built in a single dynasty.', answer: false },
  { question: 'Julius Caesar was the first emperor of Rome.', answer: false },
  { question: 'The Titanic sank in 1912.', answer: true }
];
let currentHistoryTfQuestion;

function generateHistoryTfQuestion() {
  currentHistoryTfQuestion = historyTfQuestions[Math.floor(Math.random() * historyTfQuestions.length)];
  document.getElementById('historyTfQuestion').textContent = currentHistoryTfQuestion.question;
  document.getElementById('historyTfResult').textContent = '';
}

function checkHistoryTfAnswer(userAnswer) {
  const historyTfResult = document.getElementById('historyTfResult');
  if (userAnswer === currentHistoryTfQuestion.answer) {
    historyTfResult.textContent = 'Correct!';
  } else {
    historyTfResult.textContent = `Wrong. The correct answer is ${currentHistoryTfQuestion.answer}.`;
  }
  setTimeout(generateHistoryTfQuestion, 2000); // Delay to show the result before generating a new question
}

document.addEventListener('DOMContentLoaded', generateHistoryTfQuestion);

//HISTORY-GAME CODE_2
const historyMcQuestions = [
  { 
    question: 'Who was the first President of the United States?', 
    options: ['George Washington', 'Thomas Jefferson', 'Abraham Lincoln', 'John Adams'],
    answer: 'George Washington' 
  },
  { 
    question: 'In which year did the Berlin Wall fall?', 
    options: ['1989', '1975', '1990', '1985'],
    answer: '1989' 
  },
  { 
    question: 'Which empire was known for its road network that spanned much of Europe?', 
    options: ['Roman Empire', 'Greek Empire', 'Ottoman Empire', 'Persian Empire'],
    answer: 'Roman Empire' 
  }
];
let currentHistoryMcQuestion;

function generateHistoryMcQuestion() {
  currentHistoryMcQuestion = historyMcQuestions[Math.floor(Math.random() * historyMcQuestions.length)];
  document.getElementById('historyMcQuestion').textContent = currentHistoryMcQuestion.question;
  const historyMcOptions = document.getElementById('historyMcOptions');
  historyMcOptions.innerHTML = '';
  currentHistoryMcQuestion.options.forEach(option => {
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'historyMcOption';
    radio.value = option;
    const label = document.createElement('label');
    label.textContent = option;
    historyMcOptions.appendChild(radio);
    historyMcOptions.appendChild(label);
    historyMcOptions.appendChild(document.createElement('br'));
  });
  document.getElementById('historyMcResult').textContent = '';
}

function checkHistoryMcAnswer() {
  const selectedOption = document.querySelector('input[name="historyMcOption"]:checked');
  const historyMcResult = document.getElementById('historyMcResult');
  if (selectedOption && selectedOption.value === currentHistoryMcQuestion.answer) {
    historyMcResult.textContent = 'Correct!';
  } else {
    historyMcResult.textContent = `Wrong. The correct answer is ${currentHistoryMcQuestion.answer}.`;
  }
  setTimeout(generateHistoryMcQuestion, 2000); // Delay to show the result before generating a new question
}

document.addEventListener('DOMContentLoaded', generateHistoryMcQuestion);

//Support
document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item h4');

  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      const answer = item.nextElementSibling;
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
  });

  const feedbackForm = document.getElementById('feedback-form');
  feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your feedback!');
    feedbackForm.reset();
  });
});

//SEARCH_BAR CODE
function searchGames() {
  const input = document.getElementById('searchBar').value.toLowerCase();
  const gameItems = document.querySelectorAll('.game-item');

  gameItems.forEach(game => {
    const gameName = game.getAttribute('data-name').toLowerCase();
    if (gameName.includes(input)) {
      game.style.display = 'block';
    } else {
      game.style.display = 'none';
    }
  });
}

