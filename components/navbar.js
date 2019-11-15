// navbar.js
let navbarComponent = {
    props: {
       isPhono: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    template: `
        <nav class="col navbar navbar-expand-md navbar-dark bg-dark">
            <a class="navbar-brand mb-0 h1" href="#">Syllabricks</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSyll" aria-controls="navbarSyll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSyll">
                <form class="form-inline">
                    <input
                        @click="setPhonetic"
                        type="checkbox"
                        name="phonetic"
                        id="phonetic"
                        class="form-check-input" />
                    <label class="form-check-label text-white" for="phonetic">Phonétique</label>
                </form>
            </div>
            <button @click="setWord" class="btn btn-outline-light" role="button">Nouveau mot !</button>
        </nav>
    `,
    methods: {
        /*
        *   Emits an event to set the boolean isPhonetic to true
        *   TODO: improve the method!!!
        */
        setPhonetic: function() {
            if (!this.isPhono) {
                this.isPhono = true;
                this.$emit('set-phonetic', true);
            } else {
                this.isPhono = false;
                this.$emit('set-phonetic', false);
            }
        },
        /*
        *   Emits an event to display a new word
        */
        setWord: function() {
            this.$emit('set-word');
        }
    }
}