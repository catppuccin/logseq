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
    ]
    logseq.useSettingsSchema(settings);
    logseq.onSettingsChanged(updatedSettings => {
        logseq.App.showMsg(`Applied ${updatedSettings.CtpAccent} accent✨`)
        // TODO: Add logic to change accent colors
    });
}

// bootstrap
logseq.ready(main).catch(console.error)