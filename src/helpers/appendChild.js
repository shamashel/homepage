/**
 * Append a child html tag to a parent element.
 * Returns the child element
 * @param {HTMLElement} parent 
 * @param {"p" | "span"} tag
 */
export function appendChild(parent, tag) {
    const el = document.createElement(tag);
    return parent.appendChild(el);
}