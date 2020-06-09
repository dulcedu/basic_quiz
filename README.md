# Basic Quiz app

This project is part of 

Basic quiz app

## Basic setup
# Quiz app in JS for portfolio.

The quiz app is a common 

Let's create the `package.json` with the following


```
npm init -y
```


## Install dependencies

```
npm install lite-server --save-dev
```
For front-end, we are to use going. 

``` 
npm install bulma-extensions
```

### Create directories and files

```bash
mkdir -p js css
```

```bash
touch index.html README.md js/app.js css/styles.css
```

## Basic template

For the next step I use Bulma's [Starter template](https://bulma.io/documentation/overview/start/): 

> Copy the "Starter template"
> 

```htmlmixed=
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Quiz app</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css">
  </head>
  <body>
  <section class="section">
    <div class="container">
      <h1 class="title">
        Welcome to the Quiz App Show
      </h1>
      <p class="subtitle">
        My first website with <strong>Bulma</strong>!
      </p>
    </div>
  </section>
  </body>
</html>
```

## Create dev script 


In the `package.json` file add the following script

```json
...
"scripts": {
    "dev": "lite-server"
}
...
```

Open your terminal and run it. It will open a new browser window and will show our new page

```bash
npm run dev
```

![](https://i.imgur.com/DayBXRe.png)



## Add Bulma extensions 

Just below to the bulma's style sheet

```htmlmixed=
<link rel="stylesheet" href="/node_modules/bulma-extensions/dist/css/bulma-extensions.min.css">
```

Then add this line just above the `</body>` tag

```htmlembedded=
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/bulma-steps@2.2.1/dist/js/bulma-steps.min.js"></script>
```

## Add the survey structure



```htmlmixed=
<!-- Main container -->
<nav class="level">
    <div class="level-left"></div>
    <!-- Right side -->
    <div class="level-right has-text-centered">
        <div class="level-item">
            <div>
              <p class="heading">Hits</p>
              <p class="title">Hits / Total</p>
            </div>
        </div>
    </div>
</nav>
<!-- /nav.level -->
```

## Adding Questions

Add the `bulma steps` script just above the `</body>` tag

```htmlmixed=
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/bulma-steps@2.2.1/dist/js/bulma-steps.min.js"></script>
```

Then, add this code to below of `</nav>` tag

> [reference]: https://wikiki.github.io/components/steps/

```htmlmixed=
<div class="steps" id="stepsDemo">
    <div class="step-item is-active is-success">
      <div class="step-marker">1</div>
      <div class="step-details">
        <p class="step-title">Account</p>
      </div>
    </div>
    <!-- /div.step-item -->
    <div class="step-item">
      <div class="step-marker">2</div>
      <div class="step-details">
        <p class="step-title">Profile</p>
      </div>
    </div>
    <!-- /div.step-item -->
    <div class="step-item">
      <div class="step-marker">3</div>
      <div class="step-details">
        <p class="step-title">Social</p>
      </div>
    </div>
    <!-- /div.step-item -->
    <div class="step-item">
      <div class="step-marker">4</div>
      <div class="step-details">
        <p class="step-title">Finish</p>
      </div>
    </div>
    <!-- /div.step-item -->
    
    <div class="steps-content column is-mobile">
        <!-- Your questions here -->
    </div>
    <!-- /div.step-content -->
    
    <div class="steps-actions">
      <div class="steps-action">
        <a href="#" data-nav="previous" class="button is-light">Previous</a>
      </div>
      <div class="steps-action">
        <a href="#" data-nav="next" class="button is-light">Next</a>
      </div>
    </div>
    <!-- /div.step-actions -->
</div>
```

Note that there are three main sections in "`bulma steps`":

- steps items
- steps content
- steps actions

You must add a `step-item` for each question of the quiz.
The questions must be inside of the `<div class="steps-content column is-mobile">` tag.

### Question structure

Every question have the following structure:

```htmlmixed=
<div class="step-content column is-6 is-offset-3 is-active">
    <h2 class="title">Question # 1</h2>
    <div class="tile is-ancestor">
      <div class="tile is-12">
        <div class="tile box option-box answer">
          <p class="subtitle">a)</p>
          <p>Option 1</p>
        </div>
      </div>
    </div>
</div>

```

So, we will add three more questions:

### Add vue.js

Go to [Vue official page](https://vuejs.org/v2/guide/) and add to the `index.html` dependencies

```htmlmixed=
<!-- development version, includes helpful console warnings -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

### Edit the app.js file

Write the following code in the `js/app.js`.
 ```js
 var app = new Vue({
     el: '#app',
     data: {},
     methods: {}
 })
 ```
 
 
 Add your `app.js` file to `index.html`.
 
 
 Add the `hits` and `questions` length.
 
  ```js
 var app = new Vue({
     el: '#app',
     data: {
        hits: 0,
        answers: 0,
        questions: []
     },
     methods: {}
 })
 ```
 
 Now, Fill the questions array:
 
 ```js
 questions: [
        {
          "id": 1,
          "question": "What does CSS stand for?",
          "nextId": 2,
          "previousId": null,
          "answer": "c",
          "options": {
              "a": "Computer Style Sheets",
              "b": "Creative Style Sheets",
              "c": "Cascading Style Sheets",
              "d": "Colourful Style Sheets"
          }
      },
      {
          "id": 2,
          "question": "Where in an HTML document is the correct place to refer to an external style sheet?",
          "nextId": 2,
          "previousId": 1,
          "answer": "a",
          "options": {
              "a": "In the <head> section",
              "b": "In the <body> section",
              "c": "At the end of the document",
              "d": "You can't refer to an external style sheet"
          }
      },
      {
          "id": 3,
          "question": "Which HTML tag is used to define an internal style sheet?",
          "nextId": 4,
          "previousId": 2,
          "answer": "a",
          "options": {
              "a": "<style>",
              "b": "<script>",
              "c": "<headStyle>",
              "d": "<css>"
          }
      },
      {
          "id": 4,
          "question": "Which HTML attribute is used to define inline styles?",
          "nextId": null,
          "previousId": 3,
          "answer": "b",
          "options": {
              "a": "class",
              "b": "style",
              "c": "font",
              "d": "styles"
          }
      }
        ]
 ```
 
 in `index.html` edit the the level component
 
 ```html
    <p class="title">{{ hits }}/{{ questions.length }}</p>
 ```
 
Edit your questions and add them dinamically adding the `v-for` attribute

```htmlmixed=
<div v-for="(question, index) in questions" class="step-content is-active column is-6 is-offset-3">
```

Render the options for each question:

```htmlmixed=
<div v-for="(value, key) in question.options"  class="tile is-ancestor">
      <div class="tile is-12">
        <div class="tile box option-box answer" v-on:click.self="selectOption" :data-index="index" :data-key="key" :data-value="value">
          <p class="subtitle">{{ key }})</p>
          <p>{{ value }}</p>
        </div>
      </div>
    </div>
```

## Add actions

Add the `selectOption` method:

```javascript=
methods: {
        selectOption: function (evt) {
            if (evt) {
            document.querySelectorAll('div.answer').forEach(element => {
              element.classList.remove('answer') // disable css hover effect
            })
    
            const element = evt.target
            const answer = element.dataset.key
            
            const index =  parseInt(element.dataset.index) + 1
            const question = this.getQuestion(index)
            if (answer === question.answer) {
              this.hits++
              element.classList.add('right-answer')
            } else {
              element.classList.add('wrong-answer')
            }
    
            this.answers++
    
            if (this.answers === this.questions.length) {
              // show modal and return
              document.querySelector('div.modal').classList.add('is-active')
            }
    
            setTimeout(function () {
              // trigger click event on <a> next button
              document.querySelector('a[data-nav="next"]').click()
              document.querySelectorAll('div.option-box').forEach(element => {
                element.classList.add('answer') // enable css hover effect
              })
            }, 1000)
          }
        }
    },
    getQuestion: function (index) {
      for (let i = 0; i < this.questions.length; i++) {
        if (index === this.questions[i].id) {
          return this.questions[i]
        }
      }
      return false
    }
```

## Add styles

Edit you `app.css` file:

```css
div.answer:hover {
    background-color: rgb(14, 140, 243);
}

h2.question {
    margin-bottom: 10% !important;
}

.right-answer {
    background-color: mediumaquamarine;
}

.wrong-answer {
    background-color: orangered;
}

nav.level {
    padding: 0 10%;
}

div.modal-content {
    padding: 10% 0;
    background-color: powderblue;
}

div.modal-content button {
    margin-top: 5%;
}
```

And add the file to the `index.html`


## Add modal

Below to step component, add the following code:

```htmlmixed=
<div class="modal">
        <div class="modal-background"></div>
        <div class="modal-content">
          <div class="has-text-centered">
            <h2 class="title">Congratulations!!!</h2>
            <h2 class="subtitle">You have {{ hits }} / {{ questions.length }} rigth answers</h2>
            <button v-on:click="closeModal" class="button is-success">Ok</button>
          </div>
        </div>
        <button class="modal-close is-large" aria-label="close" v-on:click="closeModal"></button>
      </div>
      <!-- /div.model -->
    </div>
```

 
 Master Source: https://github.com/driverInside/basic-quiz/blob/master/js/app.js
 
 
 
 
 
