<h3 align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png" width="100" alt="Logo"/><br/>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
	Catppuccin for <a href="https://logseq.com/">Logseq</a>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
</h3>

<p align="center">
	<a href="https://github.com/catppuccin/logseq/stargazers"><img src="https://img.shields.io/github/stars/catppuccin/logseq?colorA=363a4f&colorB=b7bdf8&style=for-the-badge"></a>
	<a href="https://github.com/catppuccin/logseq/issues"><img src="https://img.shields.io/github/issues/catppuccin/logseq?colorA=363a4f&colorB=f5a97f&style=for-the-badge"></a>
	<a href="https://github.com/catppuccin/logseq/contributors"><img src="https://img.shields.io/github/contributors/catppuccin/logseq?colorA=363a4f&colorB=a6da95&style=for-the-badge"></a>
</p>

<p align="center">
	<img src="assets/preview.webp"/>
</p>

## Previews

<details>
<summary>🌻 Latte</summary>
<img src="assets/preview-latte.webp"/>
<blockquote>Selected Accent: Red</blockquote>
</details>
<details>
<summary>🪴 Frappé</summary>
<img src="assets/preview-frappe.webp"/>
<blockquote>Selected Accent: Pink</blockquote>
</details>
<details>
<summary>🌺 Macchiato</summary>
<img src="assets/preview-macchiato.webp"/>
<blockquote>Selected Accent: Yellow</blockquote>
</details>
<details>
<summary>🌿 Mocha</summary>
<img src="assets/preview-mocha.webp"/>
<blockquote>Selected Accent: Green</blockquote>
</details>

## Usage

### Installation

There are couple of other methods you can use to set the theme up in Logseq. Later methods are more for development purpose.

1. Logseq Plugin Marketplace **(Recommended)**
    1. Search for 'catppuccin' in `Plugins` > `Marketplace` > `Themes` and install the plugin. 
    2. Choose the the appropriate theme variant from `Settings` > `Themes`.
    
<img src="assets/ctp-logseq-marketplace.webp"/>
    
2. Import theme stylesheet by setting it in your `config.edn` ([source](https://github.com/logseq/logseq/blob/master/templates/config.edn#L72)). Set one of the following in your config and restart Logseq.

```edn
:custom-css-url "@import url('https://logseq.catppuccin.com/ctp-latte.css');"
:custom-css-url "@import url('https://logseq.catppuccin.com/ctp-frappe.css');"
:custom-css-url "@import url('https://logseq.catppuccin.com/ctp-macchiato.css');"
:custom-css-url "@import url('https://logseq.catppuccin.com/ctp-mocha.css');"
```

3. Add manually from GitHub Releases
    1. Download `.zip` from latest release.
    2. Extract it to desired location.
    3. Enable `Developer Mode` under `Settings` > `Advanced`.
    4. Use the new `Load unpacked plugin` option under `Plugins`, choosing extracted folder to install the theme.

4. Clone Repository and add manually
    1. Clone repository (including submodules)
    2. Run `npm ci && npm run build`
    3. Enable `Developer Mode` under `Settings` > `Advanced`
    4. Use the new `Load unpacked plugin` option under `Plugins`, choosing repo folder to install the theme.

### Switching Accent Color

1. Theme settings can be accessed under `Settings` > `Plugins` > `Catppuccin`
2. Select an accent color of choice from the dropdown under `CtpAccent` setting.

<img src="assets/ctp-logseq-switch-accent.webp"/>

### Bonus: Oledppuccin

> The _niche_ dark side

You can choose this variant of dark theme under `Settings` > `Themes`. 

<img src="assets/ctp-oledppuccin.webp"/>


## 💝 Thanks to

**Current Maintainer(s)**
- [griimick](https://github.com/griimick)

**Inspiration and Contribution**
- [pengx17](https://github.com/pengx17) for [logseq-dev-theme](https://github.com/pengx17/logseq-dev-theme)

&nbsp;

<p align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/footers/gray0_ctp_on_line.svg?sanitize=true" />
</p>

<p align="center">
	Copyright &copy; 2023-present <a href="https://github.com/catppuccin" target="_blank">Catppuccin Org</a>
</p>

<p align="center">
	<a href="https://github.com/catppuccin/catppuccin/blob/main/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=MIT&logoColor=d9e0ee&colorA=363a4f&colorB=b7bdf8"/></a>
</p>
