// Main.js
let app = new Vue({
    el: '#app',
    data: {
        word: 'a-é-ro-port',
        syllables: []
    },
    components: {
        'syllables': syllablesComponent,
        'reset': resetComponent
    },
    methods: {
        /*
        *   Updates the reset zone of the word
        *   @param {String} syllable: the syllable to reveal
        */
        updateResetZone: function(syllable) {
            this.syllables.push(syllable);
        }
    }
})
