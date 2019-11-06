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
        <div class="col-md-7 order-md-1 bg-light rounded border-info" id="reset-zone">
            <h2 class="position-absolute">Mot à recomposer</h2>
            <p class="display-1 align-middle text-center" id="word">
                <span
                    v-for="brick in bricks"
                    :class="brick.order == bricks.indexOf(brick) ? 'text-success' : 'text-danger'"
                    >{{ brick.syllable }}</span>
            </p>
        </div>
    `,
}