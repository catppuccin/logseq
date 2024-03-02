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
        title: "Accent color",
        description: "Select Catppuccin theme accent color",
        type: "enum",
        enumPicker: "select",
        enumChoices: accentNames,
        default: "Full palette"
    },
];

function setAccent(accentName) {
    logseq.provideStyle({
        key: 'ctp-accent',
        style: `
          :root:not([data-color]), :root[data-color='none'] {
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
    });
}

// bootstrap
logseq.ready(main).catch(console.error)
