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

function overrideCodeMirrorTheme() {
    const theme = window.getComputedStyle(parent.document.documentElement).getPropertyValue('--ctp-cm-theme').replace(/['"]+/g, '').trim();
    console.log('Applying CodeMirror5 theme using --ctp-cm-theme:', theme);
    parent.document.querySelectorAll('.CodeMirror').forEach(element => {
        removeClassByPrefix(element, 'cm-s-');
        element.classList.add(`cm-s-${theme}`);
    }); 
}

function removeClassByPrefix(node, prefix) {
    const regx = new RegExp('\\b' + prefix + '[^ ]*[ ]?\\b', 'g');
    node.className = node.className.replace(regx, '');
    return node;
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
            logseq.App.showMsg(`Applied ${updatedSettings.CtpAccent} accent✨`)
        }
        if (updatedSettings.CtpReloadCss && !timer) {
            timer = setInterval(reloadCss, 5000)
        } else if (!updatedSettings.CtpReloadCss && timer) {
            clearInterval(timer);
            timer = null;
        }
    });
    // Hack: untill logseq.App.onRouteChange gets fixed
    // setInterval(overrideCodeMirrorTheme, 1000);
}


// bootstrap
logseq.ready(main).catch(console.error)