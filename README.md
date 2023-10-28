# Count words and sort by frequency

> Disclaimer: This will only works for languages using English or Latin/Roman characters.

## Requirements
Node.js v18+

Download: https://nodejs.org/en/download

* This will only be required for running this project locally.

## Run

### Replit
1. Go to this URL.
```
https://replit.com/@Amirul_ZharfanZ/word-count
```
2. Click Run.
3. To change the file arg, you need to fork the project and run the command manually.

### Local
```
node index.js <FILE_PATH>
node index.js --path <FILE_PATH>
node index.js --text "<SOME_TEXT>"

or

npm start -- <FILE_PATH>
npm start -- --path <FILE_PATH>
npm start -- --text "<SOME_TEXT>"
````

Example:
```
node index.js example_text/text.txt
node index.js example_text/lorem.txt
```

## Test
```
npm run test
or
node --test *.spec.js
```