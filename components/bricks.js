// bricks.js
let bricksComponent = {
    props: {
        syllables: {
            type: Array,
            required: true
        }
    },
    template: `
        <div class="col-md-4 order-md-2 bg-secondary rounded align-self-baseline">
            <h2 class="text-white">
                <span>Syllabes ({{ nbSyllables }})</span>
                <button role="button" class="btn btn-secondary">
                    <span class="oi oi-reload" title="reload" aria-hidden="true"></span>
                </button>
            </h2>
            <ul class="list-inline">
                <li
                    v-for="syllable in syllables"
                    class="list-inline-item">
                    <button
                        :key="syllable.order"
                        @click="addToResetZone(syllable)"
                        role="button"
                        class="btn btn-light"
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
            syllable.isDisplayed = false;
            this.$emit('add-to-reset-zone', syllable.text, syllable.order);
        }
    },
    computed: {
        /*
        *   Counts the number of syllables
        */
        nbSyllables: function() {
            return this.syllables.length;
        }
    }
}