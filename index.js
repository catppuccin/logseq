let timer = null;
const accentMap = {
    "Full palette" : "unset", // undefined css var name
    "Love"         : "var(--rp-love)",
    "Gold"         : "var(--rp-gold)",
    "Rose"         : "var(--rp-rose)",
    "Pine"         : "var(--rp-pine)",
    "Foam"         : "var(--rp-foam)",
    "Iris"         : "var(--rp-iris)",
};

const accentClasses = Object.values(accentMap);
const accentNames = Object.keys(accentMap);

const settings = [
    {
        key: "RpAccent",
        title: "Select Rosé Pine theme accent color",
        description: "Select Rosé Pine theme accent color",
        type: "enum",
        enumPicker: "select",
        enumChoices: accentNames,
        default: "Full palette"
    },
    {
        key: "RpReloadCss",
        title: "Developer Mode: Reload CSS",
        type: "boolean",
        default: false
    }
];

function setAccent(accentName) {
    logseq.provideStyle({
        key: 'rp-accent',
        style: `
          :root {
            --rp-accent: ${accentMap[accentName]};
          }
        `,
    });
}

function reloadCss() {
    var links = parent.document.getElementsByTagName("link");
    var link = Array.from(links).find(l => l.href.includes("rp"));
    link.href += "";
}

async function main() {
    logseq.useSettingsSchema(settings);
    logseq.onSettingsChanged(updatedSettings => {
        if (setAccent(updatedSettings.RpAccent)) {
            console.log(`Applied ${updatedSettings.RpAccent} accent✨`);
        }
        if (updatedSettings.RpReloadCss && !timer) {
            timer = setInterval(reloadCss, 5000)
        } else if (!updatedSettings.RpReloadCss && timer) {
            clearInterval(timer);
            timer = null;
        }
    });
}

// bootstrap
logseq.ready(main).catch(console.error)
