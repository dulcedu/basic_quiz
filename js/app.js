var app = new Vue({
    //el=element
    el: '#app',
    data: {
        hits:0,
        questions:[
            {
                "id": 1,
                "question": "Who is Satoshi Nakamoto?",
                "nextId": 2,
                "previousId": null,
                "answer": "c",
                "options": {
                    "a": "Computer Style Sheets",
                    "b": "Creative Style Sheets",
                    "c": "Cascading Style Sheets",
                    "d": "Colourful Style Sheets"
                }
            }
        ]
    },
    methods: {}
})