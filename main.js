// Main.js
let app = new Vue({
    el: '#app',
    data: {
        words: null,
        selectedWord: {},
        bricks: [],
        isPhonetic: false
    },
    components: {
        'bricks': bricksComponent,
        'navbar': navbarComponent,
        'reset': resetComponent
    },
    created: function() {
        this.fetchWords();
    },
    methods: {
        /*
        *   Fetches the words in the database
        */
        fetchWords: function() {
            // Fetch API
            fetch("./store/lexicon.json")
                // Gets a response from the API,
                // and process it as a JSON structure
                .then(response => response.json())
                // Associates the local words variable with
                // content of the JSON structure
                .then(json => {
                    this.words = json.words;
                    this.initBricks();
            });
        },
        /*
        *   Intializes the bricks of syllables
        */
        initBricks: function() {
            // Sets a random word as the selected one
            this.selectedWord = this.words[Math.floor(Math.random() * this.words.length)];
            // Splits the word into syllables
            this.selectedWord.syll = this.splitsIntoSyllables(this.selectedWord.syll);
            this.selectedWord.orthosyll = this.splitsIntoSyllables(this.selectedWord.orthosyll);
            // Mixes the syllables
            this.mixItems(this.selectedWord.syll);
            this.mixItems(this.selectedWord.orthosyll);
        },
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
        },
        /*
        *   Sets the boolean to true
        *   @param {Boolean} phonetic: either the representation of the syllables is phonetic or not
        */
        setPhonetic: function(phonetic) {
            this.isPhonetic = phonetic;
        }
    }
})
