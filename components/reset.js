let resetComponent = {
    props: {
        word: {
            type: String,
            required: true
        },
        bricks: {
            type: Array,
            required: true
        }
    },
    template: `
        <div class="col-md-8">
            <h2>Mot à recomposer</h2>
            <p class="display-1">
                <span
                    v-for="brick in bricks"
                    :class="brick.order == bricks.indexOf(brick) ? 'text-success' : 'text-danger'">
                    {{ brick.syllable }}
                </span>
            </p>
        </div>
    `,
}