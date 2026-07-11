import fs from 'node:fs';
import createStyle from './createStyle.mjs';
import createSyntax from './createSyntax.mjs';
import palette from './palette.mjs';
import withSemanticMapping from './withSemanticMapping.mjs';

const theme = {
    $schema: 'https://zed.dev/schema/themes/v0.2.0.json',
    name: 'Inklight',
    author: 'mjlaufer',
    themes: [
        {
            name: 'Inklight',
            appearance: 'light',
            style: {
                ...createStyle(palette),
                syntax: createSyntax(withSemanticMapping(palette)),
            },
        },
    ],
};

fs.writeFile('themes/inklight.json', `${JSON.stringify(theme, null, 2)}\n`, (err) => {
    const log = err
        ? {
              method: 'error',
              message: err,
          }
        : {
              method: 'log',
              message: `Successfully created ${theme.name} theme`,
          };
    console[log.method](log.message);
});
