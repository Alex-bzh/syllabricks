// Main.js
let app = new Vue({
    el: '#app',
    data: {
        word: 'aéroport',
        syllables: [
            {
                order: 0,
                text: "a",
                isDisplayed: true
            },
            {
                order: 3,
                text: "port",
                isDisplayed: true
            },
            {
                order: 2,
                text: "ro",
                isDisplayed: true
            },
            {
                order: 1,
                text: "é",
                isDisplayed: true
            }
        ],
        bricks: []
    },
    components: {
        'bricks': bricksComponent,
        'reset': resetComponent
    },
    methods: {
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
