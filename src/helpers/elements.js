/** @type {HTMLInputElement | null} */
let _input;
/** @type {HTMLTextAreaElement | null} */
let _output;

export function getInputElement() {
    if (!_input) {
        _input = document.getElementById("input");
        if (!_input) {
            throw new Error("Input element doesn't exist!");
        } 
    }
    return _input;
}

export function getOutputElement() {
    if (!_output) {
        _output = document.getElementById("output");
        if (!_output) {
            throw new Error("Output element doesn't exist!");
        } 
    }
    return _output;
}