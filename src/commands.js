export const commands = {
    help: "Shows this menu",
    about: "About me",
}

/**
 * @param {keyof commands} command 
 */
export function getCommandOutput(command) {
    
    switch (command) {
        case "help":
            return buildHelp();
        case 'about':
            return buildAbout();
    }
}

function buildHelp() {
    var output = `Here is a list of available commands:
    ==========================================================================`
    for (const [name, description ] of Object.entries(commands)) {
        output = output + `\n${name} - ${description}`;
    }
    return output;
}

function buildAbout() {
    return ``;
}
