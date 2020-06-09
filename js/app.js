var app = new Vue({
    //el=element
    el: '#app',
    data: {
        hits:0,
        answers: 0,
        questions:[
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
    },
    methods: {
      closeModal: function () {
        document.querySelector('div.modal').classList.remove('is-active')
      },
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
      },
      getQuestion: function (index) {
        for (let i = 0; i < this.questions.length; i++) {
          if (index === this.questions[i].id) {
            return this.questions[i]
          }
        }
        return false
      }
    }
})