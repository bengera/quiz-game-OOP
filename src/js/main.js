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

            this.buttonSubmit = document.createElement('button');
            this.buttonSubmit.classList.add('btn-submit');
            this.buttonSubmit.type = 'submit';
            this.buttonSubmit.textContent = 'Submit';
            container.appendChild(this.buttonSubmit);
            
            this.buttonSubmit.addEventListener('click',submit);
    }

    checkAnswer(selected){
      console.log(`Your final answer is ${selected}`);
      this.buttonSubmit.disabled = true;
      if (selected === this.correct ){
        console.log(`${selected} is the correct answer! ✔`);
        this.changeButtonCorrect();
        score++;
        currentIndex++;
        setTimeout(() => {
            showCurrentQuestion();
        }, 2000)
        updateScore();
        
      } else {
        console.log(`${selected} is incorrect ❌`)
        this.changeButtonIncorrect();
        currentIndex++;
        setTimeout(() => {
            showCurrentQuestion();
        }, 2000)
        
      }
    }

    changeButtonCorrect(){
        this.buttonSubmit.classList.add('correct');
        this.buttonSubmit.textContent ='Correct!';
    }

    changeButtonIncorrect(){
        this.buttonSubmit.classList.add('incorrect');
        this.buttonSubmit.textContent ='Incorrect!';
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

];


showCurrentQuestion();

