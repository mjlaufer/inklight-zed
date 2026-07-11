export default (palette) => ({
    palette,
    semanticMapping: {
        annotation: palette.magenta.fg2,
        attribute: palette.purple.fg2,
        comment: palette.green.fg1,
        constant: palette.blue.fg1,
        func: palette.magenta.fg1,
        keyword: palette.purple.fg1,
        string: palette.blue.fg2,
        text: palette.fg2,
        type: palette.cyan.fg1,
        variable: palette.fg1,
    },
});
