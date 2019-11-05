// Main.js
var app = new Vue({
    el: '#app',
    data: {
        word: 'a-é-ro-port'
    },
    components: {
        'syllables': syllablesComponent
    }
})
