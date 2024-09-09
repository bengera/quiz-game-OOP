<a id="readme-top"></a>


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/bengera/quiz-game-OOP">
     <img src="logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Mutiple choice Quiz with OOP Principles</h3>

  <p align="center">
    This project is a simple multiple-choice quiz app built using JavaScript. It dynamically displays questions and options, allows users to select an answer, and highlights the correct choice. The app keeps track of the score and advances through questions one at a time.
    <br />
    <br />
    <br />
    <a href="https://github.com/github_username/repo_name">View Demo</a>
      
  </p>
</div>


<!-- ABOUT THE PROJECT -->
## About The Project

![ScreenShot](https://github.com/bengera/quiz-game-OOP/blob/master/screenshot.PNG)



### Built With


![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
<br />
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
<br />
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)





<!-- ROADMAP -->
## Code snippets
There is a class named Question, this has 4 methods that include displaying questions, checking answers, and changing the submit buttons color's if the answer is correct or incorrect.
<br />
<br />
🟨 This function manages which question is being shown depending on the currentIndex.

```JS
 function showCurrentQuestion(){
        
        if (currentIndex < questions.length){
            questions[currentIndex].printQuestion();
        } else {
            console.log('There are no more questions');
            title.textContent = 'Game over';

        }
    }
```


🟨 The printQuestion method clears the container each time a new question is created from the questions array.
Creates the DOM elements dynmaically 


```JS
printQuestion() {
        container.innerHTML = '';

        legend.textContent = this.question;
        title.textContent = `Q-${currentQuestion}`;
        scoreEl.textContent = `Score: ${score} / ${questions.length}`;
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
            
        })}
```

🟨 Here the button is stored as an instance property (attached to the current instance of the Question class) This allows other methods to access and change the button like in the checkAnswer method.
```JS

this.buttonSubmit = document.createElement('button');
            this.buttonSubmit.classList.add('btn-submit');
            this.buttonSubmit.type = 'submit';
            this.buttonSubmit.textContent = 'Submit';
            container.appendChild(this.buttonSubmit);
            
            this.buttonSubmit.addEventListener('click',submit);
```
🟨 If the selected answer is correct we call the method to change the text of the button to indicate if the user was correct or incorrect.
Quiz moves onto next question after two seconds.

```JS
       checkAnswer(selected){
      console.log(`Your final answer is ${selected}`);
      this.buttonSubmit.disabled = true;
      if (selected === this.correct ){
        console.log(`${selected} is the correct answer! ✔`);
        this.changeButtonCorrect();
        score++;
        currentIndex++;
        currentQuestion++;
        scoreEl.textContent = `Score: ${score} / ${questions.length}`;
        setTimeout(() => {
            showCurrentQuestion();
        }, 2000)
        
        
      } else {
        console.log(`${selected} is incorrect ❌`)
        this.changeButtonIncorrect();
        currentIndex++;
        currentQuestion++;
          this.choices.forEach((choice, idx) =>{
          const optionBlock = container.querySelectorAll('.option-block')[idx];
           if (choice === this.correct){
            optionBlock.classList.add('correct-highlight');
           }
            
        })


        setTimeout(() => {
            showCurrentQuestion();
        }, 2000)
        
      }
       }
```
🟨 If the user is incorrect,loop through each choice and get the Idx of each option block through each loop. On every loop check if the block's inner content is equal to the correct answer. If so highlight it green to show the correct answer to the user.
```JS
this.choices.forEach((choice, idx) =>{
          const optionBlock = container.querySelectorAll('.option-block')[idx];
          if (choice === this.correct){
            optionBlock.classList.add('correct-highlight');
           }
}
```
🟦 This is the first time I have used the :has() pseudo-class. Here I have defined different styled for option blocks that are hovered over and ones that have been checked.
```SCSS
.option-block {
  padding: 1rem;
  
  &:hover {
    background-color: rgb(220, 238, 248);
  }

  &:has(input[type="radio"]:checked){
    background-color: rgb(21, 153, 230);
    }
  
}
```


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact
Created by [Ben Geraghty](https://bengeraghty.com) - feel free to contact me! ✉


