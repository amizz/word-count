# Count words and sort by frequency

## Requirements
Node.js v18+

Download: https://nodejs.org/en/download

## Run
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