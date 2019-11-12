#!/usr/bin/env python
#-*- coding: utf-8 -*-

#
#   Modules to import
#
import csv, json

#
#   Custom functions
#
def nbSyllables(word, sep):
    """
        Counts the number of syllables in a word
        @param String word: the word
        @param String sep: the separator to use
    """
    return len(word.split(sep))

#
#   Main
#
if __name__ == "__main__":

    # Link to Lexique3 (not included with the app)
    Lexique3 = '../assets/Lexique383/Lexique383.tsv'
    # Link to the lexicon used with the app
    Lexicon = '../store/lexicon.json'

    """
    #   How to count the number max of syllables
    #
    nbSyllablesMax = 0;

    # Working with the tabulated version of Lexique v3.8.3
    with open(Lexique3, newline='') as file:
        # All the lines of the file
        lines = csv.reader(file, delimiter='\t')
        # For each line in the file…
        for line in lines:
            if (nbSyllables(line[22], '-') > nbSyllablesMax):
                nbSyllablesMax = nbSyllables(line[22], '-')
        
    print(nbSyllablesMax)
    """

    """
    #   How to find fields that are empty in the lexicon
    #
    # Error reporting
    errors = ""
    # Loads the lexicon as a JSON structure
    with open(Lexicon) as file:
        lexicon = json.load(file)

    # For each word…
    for word in lexicon["words"]:
        # … if a value is missing…
        for key, value in word.items():
            if value == "":
                # … prints the missing key and the referring word
                errors += f'{key} of {word["word"]} is empty\n'

    with open('errors.txt', 'w') as report:
        report.write(errors)
    """