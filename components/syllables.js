// syllables.js
let syllablesComponent = {
    props: {
        word: {
            type: String,
            required: true
        }
    },
    template: `
        <div class="col-md-4">
            <h2>Syllabes ({{ nbSyllables }})</h2>
            <ul class="list-inline">
                <li
                    v-for="syllable in mixSyllables(splitIntoSyllables)"
                    :key="syllable.id"
                    class="list-inline-item">
                    <button @click="addToResetZone(syllable)" role="button" class="btn btn-light" :disabled="!syllable.isDisplayed">{{ syllable.syllable }}</button>
                </li>
            </ul>
        </div>
    `,
    data: function() {
        return {
            listSyllables: []
        }
    },
    methods: {
        /*
        *   Shuffles array in place.
        *   Fisher-Yates modern shuffle algorithm
        *   @param {Array} a: array containing the items.
        */
        mixSyllables: function(a) {
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
        *   Emits an event called add to reset zone
        *   @param {String} syllable: the syllable to add to the reset zone
        */
        addToResetZone: function(syllable) {
            for (let i in this.listSyllables) {
                if (this.listSyllables[i].id == syllable.id) {
                    this.listSyllables[i].isDisplayed = false;
                }
            }
            this.$emit('add-to-reset-zone', syllable.syllable);
        }
    },
    computed: {
        /*
        *   Splits the word into syllables  
        */
        splitIntoSyllables: function() {
            let syllables = this.word.split('-');
            for (let syllable in syllables) {
                this.listSyllables.push({
                    id: syllable,
                    syllable: syllables[syllable],
                    isDisplayed: true
                });
            }
            return this.listSyllables;
        },
        /*
        *   Counts the number of syllables
        */
        nbSyllables: function() {
            return this.splitIntoSyllables.length;
        }
    }
}