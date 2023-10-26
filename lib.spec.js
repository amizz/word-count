import test from "node:test";
import assert from "node:assert";

const text1 = `The quick brown fox jumped over the lazy dog, and the dog, in turn, chased the fox through the fox's den.`;

const filePath1 = `./text.txt`;
const filePath2 = `./not-found.txt`;

test("Count words success", async () => {
    const { countWords } = await import("./lib.js");
    const result = countWords(text1);
    const expectedResult = {
        the: 5,
        quick: 1,
        brown: 1,
        fox: 3,
        jumped: 1,
        over: 1,
        lazy: 1,
        dog: 2,
        and: 1,
        in: 1,
        turn: 1,
        chased: 1,
        through: 1,
        den: 1,
        s: 1,
    };

    // assert.strictEqual(JSON.stringify(expectedResult), JSON.stringify(result), "Result object must return same value in stringify json");

    for (const key in expectedResult) {
        if (Object.hasOwnProperty.call(expectedResult, key)) {
            const res = expectedResult[key];
            assert.notStrictEqual(
                result?.[key],
                undefined,
                `Word "${key}" must exist`
            );
            assert.strictEqual(res, result[key], `"${key}" count is not equal`);
        }
    }
});

test("Count words failed - due to contraction \"'s\" character", async () => {
    const { countWords } = await import("./lib.js");
    const result = countWords(text1);
    assert.strictEqual(result["is"], undefined);
});

test("Ensure file exist", async () => {
    const { countWordsFromFile } = await import("./lib.js");
    return assert.doesNotReject(countWordsFromFile(filePath1));
});

test("Errors if file not exist", async () => {
    const { countWordsFromFile } = await import("./lib.js");
    return assert.rejects(countWordsFromFile(filePath2));
});

test("Count words from file", async () => {
    const { countWordsFromFile } = await import("./lib.js");
    const result = await countWordsFromFile(filePath1);
    const expectedResult = {
        the: 5,
        quick: 1,
        brown: 1,
        fox: 3,
        jumped: 1,
        over: 1,
        lazy: 1,
        dog: 2,
        and: 1,
        in: 1,
        turn: 1,
        chased: 1,
        through: 1,
        den: 1,
        s: 1,
    };

    for (const key in expectedResult) {
        if (Object.hasOwnProperty.call(expectedResult, key)) {
            const res = expectedResult[key];
            assert.notStrictEqual(
                result?.[key],
                undefined,
                `Word "${key}" must exist`
            );
            assert.strictEqual(res, result[key], `"${key}" count is not equal`);
        }
    }
});