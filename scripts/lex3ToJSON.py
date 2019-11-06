#!/usr/bin/env python
#-*- coding: utf-8 -*-

#
#	Modules to import
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

	# Working with the tabulated version of Lexique v3.8.3
	with open('../assets/Lexique383/Lexique383.tsv', newline='') as file:
		# All the lines of the file
		lines = csv.reader(file, delimiter='\t')
		# For each line in the file…
		for line in lines:
			# … the lexicon is updated with a simple dictionary :
			lexicon["words"].append(
				{
					# word is the key, and value is the ortho representation of the syllable
					line[0]: line[27]
				}
			)

	# Writing a JSON dump of the lexicon in the store
	with open('../store/lexicon.json', 'w') as dest:
		# Be sure to keep the utf-8 format with ensure_ascii=false
		dest.write(json.dumps(lexicon, ensure_ascii=False, indent=2))