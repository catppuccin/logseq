// Palette entry backing each accent choice. "Full palette" is the opt-out: it
// resolves to `unset`, which for a custom property behaves as a guaranteed
// invalid value, so every `var(--ctp-accent, <default>)` in the stylesheet
// falls through to its own per-role default.
const accentMap = {
    "Full palette" : null,
    "Rosewater"    : "rosewater",
    "Flamingo"     : "flamingo",
    "Pink"         : "pink",
    "Mauve"        : "mauve",
    "Red"          : "red",
    "Maroon"       : "maroon",
    "Peach"        : "peach",
    "Yellow"       : "yellow",
    "Green"        : "green",
    "Teal"         : "teal",
    "Sky"          : "sky",
    "Sapphire"     : "sapphire",
    "Blue"         : "blue",
    "Lavender"     : "lavender"
};

const accentNames = Object.keys(accentMap);

// Logseq 2.0 leans on shadcn/Radix tokens that are consumed as bare HSL
// triplets via `hsl(var(--primary))`, so the accent has to be published in both
// notations: `--ctp-accent` (R, G, B) and `--ctp-accent-hsl` (H S% L%).
function accentDeclarations(accentName) {
    const color = accentMap[accentName];
    if (!color) {
        return `--ctp-accent: unset;\n            --ctp-accent-hsl: unset;`;
    }
    return `--ctp-accent: var(--ctp-${color});\n            --ctp-accent-hsl: var(--ctp-${color}-hsl);`;
}

const settings = [
    {
        key: "CtpAccent",
        title: "Select accent color",
        description: "Note: Logseq's accent color should be disabled under Setting > General",
        type: "enum",
        enumPicker: "select",
        enumChoices: accentNames,
        default: "Full palette"
    },
    {
        key: "CtpWhiteboard",
        title: "Override Whiteboard theme to light theme?",
        description: "Override whiteboard theme to use Latte theme flavor. Logseq 0.10 only — whiteboards were removed in Logseq 2.0.",
        type: "boolean",
        default: false,
    },
];

function setWhiteboardOverride(bool) {
    const rootContainer = parent.document.querySelector(`html`);
    if (bool) {
        rootContainer.classList.add('whiteboard-latte');
    } else {
        rootContainer.classList.remove('whiteboard-latte');
    }
}

function setAccent(accentName) {
    const decls = accentDeclarations(accentName);
    logseq.provideStyle({
        key: 'ctp-accent',
        style: `
          :root:root:not([data-color]), :root:root[data-color='none'], :root:root[data-color='logseq'] {
            ${decls}
          }
          html.whiteboard-latte div.whiteboard-page {
            ${decls}
          }
          html.whiteboard-latte div.dashboard-card {
            ${decls}
          }
          html.whiteboard-latte div.tl-tooltip-content {
            ${decls}
          }
          html.whiteboard-latte div.tl-select-input-content {
            ${decls}
          }
        `,
    });
}

function reloadCss() {
    var links = parent.document.getElementsByTagName("link");
    var link = Array.from(links).find(l => l.href.includes("ctp"));
    link.href += "";
}

async function main() {
    logseq.useSettingsSchema(settings);
    logseq.onSettingsChanged(updatedSettings => {
        if (setAccent(updatedSettings.CtpAccent)) {
            console.log(`Applied ${updatedSettings.CtpAccent} accent✨`);
        }
        if (setWhiteboardOverride(updatedSettings.CtpWhiteboard)) {
            console.log(`${updatedSettings.CtpWhiteboard ? 'Applied' : 'Removed'} Latte whiteboard flavor✨`);
        }
    });
}

// bootstrap
logseq.ready(main).catch(console.error)
