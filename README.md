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
	<img src="https://raw.githubusercontent.com/catppuccin/logseq/main/assets/preview.webp"/>
</p>

## Previews

<details>
<summary>🌻 Latte</summary>
<img src="https://raw.githubusercontent.com/catppuccin/logseq/main/assets/preview-latte.webp"/>
<blockquote>Selected Accent: Red</blockquote>
</details>
<details>
<summary>🪴 Frappé</summary>
<img src="https://raw.githubusercontent.com/catppuccin/logseq/main/assets/preview-frappe.webp"/>
<blockquote>Selected Accent: Pink</blockquote>
</details>
<details>
<summary>🌺 Macchiato</summary>
<img src="https://raw.githubusercontent.com/catppuccin/logseq/main/assets/preview-macchiato.webp"/>
<blockquote>Selected Accent: Yellow</blockquote>
</details>
<details>
<summary>🌿 Mocha</summary>
<img src="https://raw.githubusercontent.com/catppuccin/logseq/main/assets/preview-mocha.webp"/>
<blockquote>Selected Accent: Green</blockquote>
</details>


## Usage

> [!WARNING]
> Logseq now officially supports accents for its default theme. Catppuccin Theme **DOES NOT** support the new accent colors.
> Select **no accent color or Logseq classical color** (one of the first two) for maximum theme compatibility.
> 
> ![accent-no-support](https://github.com/user-attachments/assets/d26f0194-a260-4c90-9d75-ca8a86327077)


### Logseq Plugin Marketplace **(Recommended)**
    1. Search for 'catppuccin' in `Plugins` > `Marketplace` > `Themes` and install the plugin. 
    2. Choose the the appropriate theme variant from `Settings` > `Themes`.
    
<img src="https://raw.githubusercontent.com/catppuccin/logseq/main/assets/ctp-logseq-marketplace.webp"/>
    

### Importing external CSS (Recommended for mobile). 

A. Add one of the following lines in your `custom.css` and restart Logseq

```css
@import url('https://logseq.catppuccin.com/ctp-latte.css');
@import url('https://logseq.catppuccin.com/ctp-frappe.css');
@import url('https://logseq.catppuccin.com/ctp-macchiato.css');
@import url('https://logseq.catppuccin.com/ctp-mocha.css');
@import url('https://logseq.catppuccin.com/ctp-oled.css');
```
OR

B. Add one of the following in your custom `config.edn` ([source](https://github.com/logseq/logseq/blob/master/src/resources/templates/config.edn#97)) and restart Logseq.

```edn
:custom-css-url "@import url('https://logseq.catppuccin.com/ctp-latte.css');"
:custom-css-url "@import url('https://logseq.catppuccin.com/ctp-frappe.css');"
:custom-css-url "@import url('https://logseq.catppuccin.com/ctp-macchiato.css');"
:custom-css-url "@import url('https://logseq.catppuccin.com/ctp-mocha.css');"
```

## Switching Accent Color

1. Theme settings can be accessed under `Settings` > `Plugins` > `Catppuccin`
2. Select an accent color from the dropdown under `CtpAccent` setting.

<img src="https://raw.githubusercontent.com/catppuccin/logseq/main/assets/ctp-logseq-switch-accent.webp"/>

## Bonus: Oledppuccin

> The _niche_ dark side

You can choose this dark theme variant under `Settings` > `Themes`. 

<img src="https://raw.githubusercontent.com/catppuccin/logseq/main/assets/ctp-oledppuccin.webp"/>


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
