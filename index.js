const accentMap = {
    "Full palette" : "unset", // undefined css var name
    "Rosewater"    : "var(--ctp-rosewater)",
    "Flamingo"     : "var(--ctp-flamingo)",
    "Pink"         : "var(--ctp-pink)",
    "Mauve"        : "var(--ctp-mauve)",
    "Red"          : "var(--ctp-red)",
    "Maroon"       : "var(--ctp-maroon)",
    "Peach"        : "var(--ctp-peach)",
    "Yellow"       : "var(--ctp-yellow)",
    "Green"        : "var(--ctp-green)",
    "Teal"         : "var(--ctp-teal)",
    "Sky"          : "var(--ctp-sky)",
    "Sapphire"     : "var(--ctp-sapphire)",
    "Blue"         : "var(--ctp-blue)",
    "Lavender"     : "var(--ctp-lavender)"
};

const accentClasses = Object.values(accentMap);
const accentNames = Object.keys(accentMap);

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
        description: "  Override whiteboard theme to use Latte theme flavor",
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
    logseq.provideStyle({
        key: 'ctp-accent',
        style: `
          :root:not([data-color]), :root[data-color='none'], :root[data-color='logseq'] {
            --ctp-accent: ${accentMap[accentName]};
          }
          html.whiteboard-latte div.whiteboard-page {
            --ctp-accent: ${accentMap[accentName]};
          }
          html.whiteboard-latte div.dashboard-card {
            --ctp-accent: ${accentMap[accentName]};
          }
          html.whiteboard-latte div.tl-tooltip-content {
            --ctp-accent: ${accentMap[accentName]};
          }
          html.whiteboard-latte div.tl-select-input-content {
            --ctp-accent: ${accentMap[accentName]};
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
