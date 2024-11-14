import { commands, getCommandOutput } from "./commands.js"
import { appendChild } from "./helpers/appendChild.js";
import { getInputElement, getOutputElement } from "./helpers/elements.js";


function clearInput() {
    /** @type {HTMLInputElement} */
    const input = getInputElement();
    if (!input) {
        console.error("No input element found. Wat.");
        return;
    }

    input.value = "";
}

/** @param {string} outText */
function paint(outText) {
    const output = getOutputElement();
    if (!output) {
        console.error("Output element not found. Wat.");
        return;
    }

    /** @type {HTMLParagraphElement} */
    const outLine = appendChild(output, "p");
    outLine.innerText = outText;
}

/** @param {string} input */
function runCommand(input) {
    if (!Object.keys(commands).includes(input)) {
        paint(`Unknown command: "${input}"`);
    }
    paint(getCommandOutput(input));
}

function historyBack() {}

function historyForward() {}

/** @type {import("./terminal").TerminalHelpers} */
export const terminal = {
    paint,
    runCommand,
    historyBack,
    historyForward
}