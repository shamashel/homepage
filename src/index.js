import { terminal } from "./terminal.js";
import { getInputElement } from "./helpers/elements.js";

function focusInputOnClick() {
    document.addEventListener("click", (ev) => {
        ev.preventDefault();
        const input = getInputElement();
        if (!input) return;
        
        // Don't refocus if already focused or if clicking the input itself
        if (document.activeElement !== input && ev.target !== input) {
            input.focus();
        }
    });
}

/**
 * Set up keyboard event listeners for the host node
 * @param {import("./terminal").TerminalHelpers} terminalHelpers Interface with methods for interacting with the terminal
 */
export function keyboardHandler(terminalHelpers) {
    const input = getInputElement()
    if (!input) return;
    document.addEventListener("keydown", ({ key }) => {
        console.log(key)
        switch (key) {
            case "Enter":
                console.log(input.value)
                terminalHelpers.runCommand(input.value);
                input.value = "";
                break;
        }
    });
}

function main () {
    console.log("Running main")
    focusInputOnClick();
    keyboardHandler(terminal)
}

main()