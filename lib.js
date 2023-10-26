import { readFile } from 'fs/promises';

/**
 * Load text file and return the total count
 * 
 * @param {string} path 
 * @returns {Promise<Record<string, number>}
 */
export async function countWordsFromFile(path) {
    const file = await readFile(path);
    return countWords(file.toString());
}

/**
 * Counts the frequency of each word from the input text.
 * 
 * @param {string} text
 * @returns {Record<string, number>}
 */
export function countWords(text) {
    const tokenizedWords = tokenize(text);
    const wordCount = {};

    for (const word of tokenizedWords) {
        wordCount[word] = (wordCount[word] || 0) + 1;
    }

    return wordCount;
}

/** 
 * Tokenizes the input text by converting it to lowercase and splitting it into words.
 *
 * @param {string} text
 * @returns {string[]}
 */
export function tokenize(text) {
    return text
        .toLowerCase()
        .split(/[ \t\n\r!@#$%^&*()_+[\]{};:'",.<>?~`\-=_+|\\]+/)
        .filter(Boolean);
}
