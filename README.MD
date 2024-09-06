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

![ScreenShot](https://github.com/bengera/quiz-game-OOP/blob/master/screenshot.png?raw=true)



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
1️⃣ - The printQuestion method clears the container each time a new question is created from the questions array.

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



<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact
Created by [Ben Geraghty](https://bengeraghty.com) - feel free to contact me! ✉


