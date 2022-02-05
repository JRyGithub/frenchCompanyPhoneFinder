# frenchCompanyPhoneFinder

## Business Proposal: A Node.js API for finding French companies phone numbers

The overall idea: create an API with Node.js, with a single route that takes the name of a French company as a parameter, and returns its phone number in JSON format, found on the web by the means of your choice.

Example: The route would take an EXPERDECO parameter (and possibly other information we have about the company, such as SIREN or address) and return +33450346354.

What we're going to look at:

The quality of the code, if it is easy to read and understand and well organized.
The relevance of the result, not necessarily 100% success, but a minimum of false positives.
The robustness of the API (errors handling, tests, ...)

## How to Use

`npm i` to install relevant packages and then run `npm run dev` making sure .env file is there.
You should see `Server is listening at 5000` in the console log.

From there you can use a tool like postman to query the API.

The curl is:
`curl --location --request GET 'http://localhost:5000/getPhoneNumber?businessName=<BUSINESSNAME>&sirent=<SIRENT>&siren=<SIREN>&extra=<EXTRAS>'` (Just replace the fields with <>)

a example of a succesfull call is:
`curl --location --request GET 'http://localhost:5000/getPhoneNumber?businessName=ATMOSPHERE'`
or
`curl --location --request GET 'http://localhost:5000/getPhoneNumber?businessName=PARIS%20ATLIERS'`

expected return
`{    "phoneNumber": "+33 1 43 25 03 70"  }`

Where either one of businessName, sirent or siren number is required. Extras are for any additional query params.

## Thoughts, further work etc

With more time etc, or for expansions for production ready code, I would add in more custom error messages. Allowing users to see exactly what was wrong and where.

I tried to use the SIREN API along with the Google Maps API as this allowed me to get the exact address according to the French government. Then I could use that address to enhance the ability. Of the search. To increase its performance I could allow more parameters etc.

My style of coding is little to no comments as hopefully the code reads for itself as that is my current work places practice. Understandably that is not for everyone. Would love to know your thoughts.

I would like for further use to put a Swagger UI for playing with the API and maybe more end points and auth etc.

I am using free tiers of APIS so there is a chance that I run of uses. Just to bare in mind.
