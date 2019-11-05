// Main.js
var app = new Vue({
    el: '#app',
    data: {
        word: 'aéroport',
        syllables: ['a','é','ro','port'],
    },
    computed: {
        nbSyllables: function() {
            return this.syllables.length;
        }
    }
})
