// Main.js
let app = new Vue({
    el: '#app',
    data: {
        words: lexicon,     // lexicon is loaded through the store
        selectedWord: '',
        syllables: [],
        bricks: []
    },
    components: {
        'bricks': bricksComponent,
        'navbar': navbarComponent,
        'reset': resetComponent
    },
    created: function() {
        // Picks a random word inside the list
        let word = this.words[Math.floor(Math.random() * this.words.length)];
        // Sets the word as the selected one
        this.selectedWord = word.word;
        // Splits the word into syllables
        this.syllables = this.splitsIntoSyllables(word.orthosyll);
        // Mixes the syllables
        this.mixItems(this.syllables);
    },
    methods: {
        /*
        *   Splits a word into syllables
        *   @param {String} word: the word to divide
        */
        splitsIntoSyllables: function(word) {
            let syllables = [];
            for (var i = word.split('-').length - 1; i >= 0; i--) {
                syllables.push({
                    order: i,
                    text: word.split('-')[i],
                    isDisplayed: true
                });
            }
            return syllables;
        },
        /*
        *   Shuffles array in place.
        *   Fisher-Yates modern shuffle algorithm
        *   @param {Array} a: array containing the items.
        */
        mixItems: function(a) {
            let j, x, i;
            for (i = a.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = a[i];
                a[i] = a[j];
                a[j] = x;
            }
            return a;
        },
        /*
        *   Updates the reset zone of the word
        *   @param {String} syllable: the syllable to reveal
        *   @param {Number} order: the correct order of the syllable in the word
        */
        updateResetZone: function(syllable, order) {
            // Adds a syllable object
            this.bricks.push({ syllable: syllable, order: order, isDisplayed: false });
        },
        /*
        *   Reloads the reset zone and reactivates the syllables buttons
        *   @param {Array} syllables: syllable objects
        */
        reloadBricks: function(syllables) {
            // Rectivates the buttons
            for (var i = syllables.length - 1; i >= 0; i--) {
                syllables[i].isDisplayed = true;
            }
            this.bricks = [];           // Free the reset zone
            this.syllables = syllables; // Transmits the array of syllable objects
        }
    }
})
