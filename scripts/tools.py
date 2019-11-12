#!/usr/bin/env python
#-*- coding: utf-8 -*-

#
#	Modules to import
#
import csv

#
#	Custom functions
#
def nbSyllables(word):
	return len(word.split('-'))

#
#   Main
#
if __name__ == "__main__":

	# Link to Lexique3 (not included with the app)
	Lexique3 = '../assets/Lexique383/Lexique383.tsv'

	nbSyllablesMax = 0;

	# Working with the tabulated version of Lexique v3.8.3
	with open(Lexique3, newline='') as file:
		# All the lines of the file
		lines = csv.reader(file, delimiter='\t')
		# For each line in the file…
		for line in lines:
			if (nbSyllables(line[22]) > nbSyllablesMax):
				nbSyllablesMax = nbSyllables(line[22])
		
	print(nbSyllablesMax)
