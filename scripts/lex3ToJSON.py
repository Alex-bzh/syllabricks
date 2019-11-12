#!/usr/bin/env python
#-*- coding: utf-8 -*-

#
#   Modules to import
#
import csv, json

#
#   Main
#
if __name__ == "__main__":

    # The lexicon to compose
    lexicon = {
        "words": []
    }
    # We want to keep track of the lemmas
    lemmas = set()

    # Link to Lexique3 (not included with the app)
    Lexique3 = '../assets/Lexique383/Lexique383.tsv'

    # Working with the tabulated version of Lexique v3.8.3
    with open(Lexique3, newline='') as file:
        # All the lines of the file
        lines = csv.reader(file, delimiter='\t')
        # For each line in the file…
        for line in lines:
            # Fast access to the word, its lemma, ortho and phonetic representations
            word, lemma, syll, orthosyll = line[0], line[2], line[22], line[27]
            # We don't keep the words that have only one syllable,
            # neither than the words which lemma is already recorded.
            # Lastly, only record the word under its lemma form.
            # Temporarily, do not keep the words which ortho representation is empty
            if len(syll.split('-')) > 1 and lemma not in lemmas and lemma == word and orthosyll:
                # Record the lemma
                lemmas.add(lemma)
                # … the lexicon is updated with a simple dictionary
                lexicon["words"].append(
                    {
                        'word': word,
                        'syll': syll,
                        'orthosyll': orthosyll
                    }
                )

    # Deleting the first line (headers)
    lexicon["words"] = lexicon["words"][1:]

    # Writing a JSON dump of the lexicon in the store
    with open('../store/lexicon.json', 'w') as dest:
        # Be sure to keep the utf-8 format with ensure_ascii=false
        dest.write(json.dumps(lexicon, ensure_ascii=False, indent=2))
