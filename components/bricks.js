// bricks.js
let bricksComponent = {
    props: {
        word: {
            type: Object,
            required: true
        },
        phonetic: {
            type: Boolean,
            required: true
        }
    },
    template: `
        <div class="col-md-4 order-md-2 bg-secondary rounded align-self-baseline">
            <h2 class="text-white">
                <span>Syllabes ({{ nbSyllables }})</span>
                <button
                    @click="reloadBricks"
                    type="button"
                    class="btn btn-secondary">
                    <span class="oi oi-reload" title="reload" aria-hidden="true"></span>
                </button>
            </h2>
            <ul class="list-inline">
                <li
                    v-for="syllable in setSyllables"
                    class="list-inline-item">
                    <button
                        :key="syllable.order"
                        @click="addToResetZone(syllable)"
                        type="button"
                        class="btn btn-light mb-1"
                        :disabled="!syllable.isDisplayed">
                        {{ syllable.text }}
                    </button>
                </li>
            </ul>
        </div>
    `,
    methods: {
        /*
        *   Emits an event called add-to-reset-zone
        *   @param {String} syllable: the syllable to add to the reset zone
        */
        addToResetZone: function(syllable) {
            syllable.isDisplayed = false;   // Disables the button
            this.$emit('add-to-reset-zone', syllable.text, syllable.order);
        },
        /*
        *   Reloads the actual set of syllables
        */
        reloadBricks: function() {
            if (this.honetic) {
                this.$emit('reload-bricks', this.word.syll);
            } else {
                this.$emit('reload-bricks', this.word.orthosyll);
            }
        }
    },
    computed: {
        /*
        *   Counts the number of syllables
        */
        nbSyllables: function() {
            return (this.iphonetic) ? this.word.syll.length : this.word.orthosyll.length;
        },
        /*
        *   Sets the phonetic or the orthographic representation as the referring syllables
        */
        setSyllables: function() {
            return (this.phonetic) ? this.word.syll : this.word.orthosyll;
        }
    }
}