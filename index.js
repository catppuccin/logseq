let timer = null;
const accentMap = {
    // "Full palette" : "ctp-full-palette", TODO
    "Rosewater"    : "ctp-accent-rosewater",
    "Flamingo"     : "ctp-accent-flamingo",
    "Pink"         : "ctp-accent-pink",
    "Mauve"        : "ctp-accent-mauve",
    "Red"          : "ctp-accent-red",
    "Maroon"       : "ctp-accent-maroon",
    "Peach"        : "ctp-accent-peach",
    "Yellow"       : "ctp-accent-yellow",
    "Green"        : "ctp-accent-green",
    "Teal"         : "ctp-accent-teal",
    "Sky"          : "ctp-accent-sky",
    "Sapphire"     : "ctp-accent-sapphire",
    "Blue"         : "ctp-accent-blue",
    "Lavendar"     : "ctp-accent-lavendar"
};

const accentClasses = Object.values(accentMap);
const accentNames = Object.keys(accentMap);

const settings = [
    {
        key: "CtpAccent",
        title: "Select Catppuccin theme accent color",
        description: "Select Catppuccin theme accent color",
        type: "enum",
        enumPicker: "select",
        enumChoices: accentNames,
        default: "Green"
    },
    {
        key: "CtpReloadCss",
        title: "Developer Mode: Reload CSS",
        type: "boolean",
        default: false
    }
];

function setAccent(accentName) {
    let rootEl = parent.document.querySelector(':root'); 

    if (rootEl.classList.contains(accentMap[accentName])) return false;

    for (let accentClass of accentClasses) {
        if (rootEl.classList.contains(accentClass)) {
            rootEl.classList.remove(accentClass);
        }
    }
    rootEl.classList.add(accentMap[accentName]);
    return true;
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
        if (updatedSettings.CtpReloadCss && !timer) {
            timer = setInterval(reloadCss, 5000)
        } else if (!updatedSettings.CtpReloadCss && timer) {
            clearInterval(timer);
            timer = null;
        }
    });
}

// bootstrap
logseq.ready(main).catch(console.error)
