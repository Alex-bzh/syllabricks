// store.js
/*
*   Loads the database into a global variable "lexicon"
*/
$.ajax({
    url: './store/lexicon.json',
    async: false,
    dataType: 'json',
    success: function (data) {
        lexicon = data["words"];
    }
});