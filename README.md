# frenchCompanyPhoneFinder

A Node.js API for finding French companies phone numbers

The overall idea: create an API with Node.js, with a single route that takes the name of a French company as a parameter, and returns its phone number in JSON format, found on the web by the means of your choice.

Example: The route would take an EXPERDECO parameter (and possibly other information we have about the company, such as SIREN or address) and return +33450346354.

What we're going to look at:

The quality of the code, if it is easy to read and understand and well organized.
The relevance of the result, not necessarily 100% success, but a minimum of false positives.
The robustness of the API (errors handling, tests, ...)
