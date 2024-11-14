export interface TerminalHelpers {
    paint: (input: string) => void;
    runCommand: (input: string) => void;
    historyBack: () => void;
    historyForward: () => void;
}