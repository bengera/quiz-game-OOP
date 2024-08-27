const legend = document.querySelector('legend');
const container = document.querySelector('.options-container');


class Question { 
       
    constructor(question, choices, correct){ 
        this.question = question;
        this.choices = choices;
        this.correct = correct;
        
    }
 
    printQuestion() {
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
    }
       
        
    }

let currentIndex = 0;


    // state management
    function showCurrentQuestion(){
        if (currentIndex < questions.length){
            questions[currentIndex].printQuestion();
        } else {
            console.log('There are no more questions');
        }
    }

      


const questions = [
    new Question(
        "What is the only country that borders the United Kingdom?",['Ireland', 'France', 'Belgium', 'Netherlands'], "Ireland"
    ),
    new Question(
        "What is the longest river in the world?",['Amazon', 'Nile', 'Yangtze', 'Mekong'], "Nile"
    ),
    new Question(
        "Riga is the capital city of which country?",['Hungary', 'Slovakia', 'Belarus', 'Latvia'], "Latvia"
    ),
    
]

showCurrentQuestion();

