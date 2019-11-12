// navbar.js
let navbarComponent = {
    template: `
        <nav class="col navbar navbar-expand-md navbar-dark bg-dark">
            <a class="navbar-brand mb-0 h1" href="#">Syllabricks</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSyll" aria-controls="navbarSyll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSyll">
                <!--<form class="form-inline">
                    <input
                        type="checkbox"
                        name="phonetic"
                        id="phonetic"
                        class="form-check-input" />
                    <label class="form-check-label text-white" for="phonetic">Phonétique</label>
                </form>-->
            </div>
            <a href="./index.html" class="btn btn-outline-light" role="button">Nouveau mot !</a>
        </nav>
    `,
    methods: {
    }
}