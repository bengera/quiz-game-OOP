const fieldset = document.querySelector('fieldset');
const legend = document.querySelector('legend');
const label = document.querySelector('label');
const optionsContainer = document.querySelector('.options-container');
const app = document.querySelector('.app');


class Question { // defines a blueprint(template) for creating `Question` objects
    // the constructor method is called when a new instance of `Question` is created (object is initialized)
    constructor(question, choices, correct){ // each objects has quesiton, choices and correct
        this.question = question;
        this.choices = choices;
        this.correct = correct;
        
    }
   printQuestion(){
    //'this' keyword refers to the current instance of `Question` class (allows access to properties like question and choice)
    // map method creates a new array and applies the function to each element of the original array
    // for each choice, include index + 1 so it doesnt start from 0, followed by . and text choice
    // \n is a new line
        let choicesStr = this.choices.map((choice, idx) => `${idx +1}.${choice}`).join('\n'); // creates formated string
        let correctAnswer = this.correct;
        return `${this.question}\n${choicesStr}\nThe correct answer is ${correctAnswer}`;


    }

    checkAnswer(answer){
        return answer === this.correct; // evaluates to True or False
    }

    render() {
        
        
        legend.textContent = this.question;

        this.choices.forEach((choice, idx) => {
            const optionBlock = document.createElement('div');
            optionBlock.classList.add('option-block');

            // Create Label
            const label = document.createElement("label")
            label.htmlFor = `choice-${idx}`
            label.textContent = choice;

            // Create input
            const input = document.createElement('input');
            input.type = 'radio';
            input.id = `choice-${idx}`;
            input.name = `quiz`;
            input.value = choice;

            optionBlock.appendChild(label);
            optionBlock.appendChild(input);
            

            optionsContainer.appendChild(optionBlock);

        })
        
                   
            
            
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

questions.forEach((q)=> {
    
    q.render(); 
    
})





