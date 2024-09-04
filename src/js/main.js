const legend = document.querySelector('legend');
const container = document.querySelector('.options-container');
const scoreEl = document.querySelector('.score');

class Question { 
       
    constructor(question, choices, correct){ 
        this.question = question;
        this.choices = choices;
        this.correct = correct;
        
    }
    
    printQuestion() {
        container.innerHTML = '';

        legend.textContent = this.question;
        this.choices.forEach((choice, idx) =>{
            const optionBlock = document.createElement('div');
            optionBlock.classList.add('option-block');

            const label = document.createElement('label');
            label.htmlFor = `choice-${idx + 1}`;
            label.textContent = choice;

            const input = document.createElement('input');
            input.type = 'radio';
            input.id = `choice-${idx + 1}`;
            input.name = `quiz`;
            input.value = choice;

            container.appendChild(optionBlock);
            optionBlock.appendChild(label);
            optionBlock.appendChild(input);
            
        })

        const buttonSubmit = document.createElement('button');
            buttonSubmit.classList.add('btn-submit');
            buttonSubmit.type = 'submit';
            buttonSubmit.textContent = 'Submit';
            container.appendChild(buttonSubmit);
            
            buttonSubmit.addEventListener('click',submit);
    }

    checkAnswer(selected){
      console.log(`Your final answer is ${selected}`);
      if (selected === this.correct ){
        console.log(`${selected} is the correct answer! ✔`);
        score++;
        currentIndex++;
        updateScore();
        showCurrentQuestion();
      } else {
        console.log(`${selected} is incorrect ❌`)
        currentIndex++;
        showCurrentQuestion();
      }
    }
       
        
    }

let currentIndex = 0;
let score = 0;


    // state management
    function showCurrentQuestion(){
        if (currentIndex < questions.length){
            questions[currentIndex].printQuestion();
        } else {
            console.log('There are no more questions');
        }
    }


function submit() {
    const selected = container.querySelector('input[name="quiz"]:checked');
    console.log(selected);
    if (selected){
        const selectedValue = selected.value;
        console.log(`${selectedValue} selected as answer`);
        questions[currentIndex].checkAnswer(selectedValue);
    } else {
        console.log('no option selected');
    }
}

function updateScore(){
    console.log('score updated 1️⃣');
    scoreEl.textContent = score;
}

const questions = [
    new Question(
        "Which desert is the largest in the world?", ['Sahara', 'Arctic', 'Gobi', 'Antarctic'], "Antarctic"
    ),
    new Question(
        "Mount Kilimanjaro is located in which country?", ['Kenya', 'Tanzania', 'Uganda', 'Ethiopia'], "Tanzania"
    ),
    new Question(
        "Which river flows through the Grand Canyon?", ['Missouri', 'Colorado', 'Mississippi', 'Snake'], "Colorado"
    ),
    new Question(
        "What is the capital city of Australia?", ['Sydney', 'Melbourne', 'Canberra', 'Perth'], "Canberra"
    ),
    new Question(
        "Which country has the most islands in the world?", ['Canada', 'Indonesia', 'Sweden', 'Norway'], "Sweden"
    ),
    new Question(
        "The Great Barrier Reef is located off the coast of which Australian state?", ['Queensland', 'New South Wales', 'Victoria', 'Western Australia'], "Queensland"
    ),
    new Question(
        "What is the smallest country in the world by land area?", ['Monaco', 'San Marino', 'Liechtenstein', 'Vatican City'], "Vatican City"
    ),
    new Question(
        "Which country is known as the Land of the Rising Sun?", ['China', 'South Korea', 'Japan', 'Thailand'], "Japan"
    ),
    new Question(
        "What is the capital of Canada?", ['Toronto', 'Ottawa', 'Vancouver', 'Montreal'], "Ottawa"
    ),
    new Question(
        "Which European country is divided into 26 cantons?", ['Germany', 'Belgium', 'Switzerland', 'Austria'], "Switzerland"
    ),
    new Question(
        "Which river is the longest in Europe?", ['Volga', 'Danube', 'Dnieper', 'Rhine'], "Volga"
    ),
    new Question(
        "Which continent is the only one without a desert?", ['Europe', 'Asia', 'Africa', 'North America'], "Europe"
    ),
    new Question(
        "What is the largest country in South America by area?", ['Argentina', 'Brazil', 'Peru', 'Colombia'], "Brazil"
    ),
    new Question(
        "Which ocean is the largest by surface area?", ['Atlantic', 'Indian', 'Arctic', 'Pacific'], "Pacific"
    ),
    new Question(
        "Which country has the most time zones?", ['United States', 'Russia', 'France', 'Australia'], "France"
    ),
    new Question(
        "Which city is known as the City of Canals?", ['Venice', 'Amsterdam', 'Bangkok', 'St. Petersburg'], "Venice"
    ),
    new Question(
        "Which country has the highest population density?", ['Monaco', 'Singapore', 'Bangladesh', 'Malta'], "Monaco"
    ),
    new Question(
        "The Andes mountain range runs through which continent?", ['Asia', 'Europe', 'South America', 'Africa'], "South America"
    ),
    new Question(
        "What is the tallest mountain in North America?", ['Denali', 'Mount Logan', 'Pico de Orizaba', 'Mount Elbert'], "Denali"
    ),
    new Question(
        "Which African country was formerly known as Abyssinia?", ['Ethiopia', 'Somalia', 'Sudan', 'Eritrea'], "Ethiopia"
    ),
];


showCurrentQuestion();

