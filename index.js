var timer = null;

function reloadCss() {
    var links = parent.document.getElementsByTagName("link");
    var link = Array.from(links).find(l => l.href.includes("ctp"));
    link.href += "";
}

function main() {
    const settings = [
        {
            key: "CtpAccent",
            title: "Select Catppuccin theme accent color",
            description: "Select Catppuccin theme accent color",
            type: "enum",
            enumPicker: "select",
            enumChoices: ["Full palette", "Rosewater", "Flamingo", "Pink", "Mauve", "Red", "Maroon", "Peach", "Yellow", "Green", "Teal", "Sky", "Sapphire", "Blue", "Lavendar"],
            default: "Full Palette"
        },
        {
            key: "CtpReloadCss",
            title: "Developer Mode: Reload CSS",
            type: "boolean",
            default: false
        }
    ]
    logseq.useSettingsSchema(settings);
    logseq.onSettingsChanged(updatedSettings => {
        logseq.App.showMsg(`Applied ${updatedSettings.CtpAccent} accent✨`)

        if (updatedSettings.CtpReloadCss && !timer) {
            timer = setInterval(reloadCss, 1000)
        } else if (!updatedSettings.CtpReloadCss && timer) {
            clearInterval(timer);
            timer = null;
        }
        // TODO: Add logic to change accent colors
    });
}


// bootstrap
logseq.ready(main).catch(console.error)