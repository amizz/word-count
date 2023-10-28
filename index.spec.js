/**
 * Main CLI
 * - We will test by mocking the process.argv as it's inputted by the user
 */

process.env.NODE_ENV = "testing";

import test from "node:test";
import assert from "node:assert";

const filePath1 = `./example_text/text.txt`;
const filePath2 = `./example_text/not-found.txt`;

test("Count words from file with direct path", async () => {
    process.argv = [null, null, filePath1];
    const { main } = await import("./index.js");
    const wordCountsSorted = await main();
    assert.strictEqual(
        Object.keys(wordCountsSorted).toString(),
        "the,fox,dog,quick,brown,jumped,over,lazy,and,in,turn,chased,through,s,den"
    );
});

test("Count words from file with --path", async () => {
    process.argv = [null, null, '--path', filePath1];
    const { main } = await import("./index.js");
    const wordCountsSorted = await main();
    assert.strictEqual(
        Object.keys(wordCountsSorted).toString(),
        "the,fox,dog,quick,brown,jumped,over,lazy,and,in,turn,chased,through,s,den"
    );
});

test("Count words from text using --text", async () => {
    process.argv = [null, null, '--text', "The quick brown fox jumped over the lazy dog, and the dog, in turn, chased the fox through the fox's den."];
    const { main } = await import("./index.js");
    const wordCountsSorted = await main();
    assert.strictEqual(
        Object.keys(wordCountsSorted).toString(),
        "the,fox,dog,quick,brown,jumped,over,lazy,and,in,turn,chased,through,s,den"
    );
});

test("Count words from text but no flag", async () => {
    process.argv = [null, null, "The quick brown fox jumped over the lazy dog, and the dog, in turn, chased the fox through the fox's den."];
    const { main } = await import("./index.js");
    assert.rejects(main());
});
