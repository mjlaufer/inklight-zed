# Inklight for Zed

Inklight is a light medium-contrast theme for [Zed](https://zed.dev).

This is a port of [inklight.nvim](https://github.com/mjlaufer/inklight.nvim).

## Installation

Once published to the Zed extension registry: open the command palette, run
`zed: extensions`, and search for "Inklight". Then select the theme via
`theme selector: toggle`.

## Local Development

Install as a dev extension:

1. Open the command palette and run `zed: install dev extension`.
2. Select this directory (`inklight-zed`).
3. Run `theme selector: toggle` and choose "Inklight".

`themes/inklight.json` is generated. To change the theme, edit the modules in
`src/` and rebuild:

```sh
pnpm build
```

Zed hot-reloads dev extension themes when the JSON changes.
