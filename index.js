import { countWordsFromFile, countWords } from "./lib.js";

/**
 * main
 * 
 * @returns {Promise<Record<string, number>>}
 */
export async function main() {
    /**
     * Count words from file path in the argument
     */
    const args = process.argv.slice(2);
    const pathText = getPathOrText(args);
    const wordCounts =
        pathText.type === "path"
            ? await countWordsFromFile(pathText.value)
            : countWords(pathText.value);

    /**
     * Sorting
     */
    const arr = Object.entries(wordCounts);
    arr.sort((a, b) => b[1] - a[1]);
    const sorted = Object.fromEntries(arr);

    return sorted;
}

/**
 * getPathOrText
 * 
 * @param {string[]} args
 * @return { {type: 'text' | 'path'; value: string} }
 */
function getPathOrText(args) {
    if (args.length === 1) {
        return { type: "path", value: args[0] };
    } else if (args[0] === "--path") {
        return { type: "path", value: args[1] };
    } else if (args[0] === "--text") {
        return { type: "text", value: args[1] };
    }

    return { type: "text", value: args[1] };
}

/**
 * init
 * 
 * @returns {void}
 */
async function init() {
    const result = await main();
    for (const key in result) {
        console.log(`${key}: ${result[key]}`)
    }
}

if(process.env.NODE_ENV !== "testing") {
    init();
}