#!/usr/bin/env python
#-*- coding: utf-8 -*-

#
#   Modules to import
#
import json, urllib.request, time
from bs4 import BeautifulSoup

def get_html_from_url(url):
    """
        Extracts the HTML code from a single URL.
        @param {String} url: the url to scrap.
    """
    # Additional headers for the web scraper
    # Please adapt: I don't want to be banned!
    headers = { 'User-agent' : 'Syllabricks (Alexandre Roulois)' }
    
    # HTTP request
    request = urllib.request.Request(url, headers=headers)
    
    # Loads the HTML document.
    # Declares a timeout if unresolved for 20 seconds
    with urllib.request.urlopen(url, timeout=20) as fichier:
        # Reads the entire webpage as utf-8 encoded
        html = fichier.read().decode('utf-8')

    # Self explicit
    return html

def parse_html_by_class(html, selector):
    """
        Extracts tags from an HTML page
        @param {String} html: the webpage to parse
        @param {String} selector: a CSS selector to find the tags
    """

    # Parses the HTML code
    soup = BeautifulSoup(html, 'html.parser')

    # Finds the first encountered tag
    tag = soup.select_one(selector)

    # Self explicit
    return tag

def make_dict_def(words, site):
    """
        Makes a dictionary of definitions
        @param {List} words: list of word-objects for which a definition is required
        @param {String} site: the url to the online Dictionary to query
    """

    # Instantiate an empty dictionary
    dictionary = dict()

    # For each word…
    for w in words:

        # Fast access to the word
        word = w["word"]

        # Empty list of definitions for the current word
        dictionary[word] = []

        # URL to scrap
        url = f'{site}{word}'

        # Gets the HTML code
        html = get_html_from_url(url)

        # Parses the webpage
        definition = parse_html_by_class(html, 'li.DivisionDefinition')

        # Appends the definition to the general dictionary of definitions
        dictionary[word] = definition.get_text()

        # Be patient before running the next query
        time.sleep(5)

    # Self explicit
    return dictionary

def update_data(data, key, value):
        # Looks for the corresponding word
        for w in data:
            # If it matches
            if key == w["word"]:
                # Adds a key "definitions" to the word-object
                # It will contain the list of all the definitions
                w["definition"] = value

#
#   Main
#
if __name__ == "__main__":

    # Path to the database
    Lexicon = '../store/lexicon.json'

    # Path to the online dictonary to scrap
    larousse = 'https://www.larousse.fr/dictionnaires/francais/'

    # Loads the lexicon as a JSON structure
    with open(Lexicon) as file:
        data = json.load(file)

    # Builds a dictionary of definitions
    dictionary = make_dict_def(data["words"], larousse)

    # For each key in the dictionary
    for k,v in dictionary.items():
        # Adds a key to an object
        update_data(data["words"], k, v)

    # Lastly, save the augmented lexicon to a new file
    with open('../store/lexicon_augmented.json', 'w') as dest:
        # Be sure to keep the utf-8 format with ensure_ascii=false
        dest.write(json.dumps(data, ensure_ascii=False, indent=2))
