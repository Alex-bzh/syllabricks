let resetComponent = {
    props: {
        word: {
            type: String,
            required: true
        },
        syllables: {
            type: Array,
            required: true
        }
    },
    template: `
        <div class="col-md-8">
            <h2>Mot à recomposer</h2>
            <ul>
                <li v-for="syllable in syllables">{{ syllable }}</li>
            </ul>
        </div>
    `,
}