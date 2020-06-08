var app = new Vue({
    //el=element
    el: '#app',
    data: {
        hits:0,
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
    methods: {}
})