# Poedit example

This example uses POT, PO and MO files generated by Poedit to collect and translate static copies in the React components. To make it work on your end, you need to make sure that you have [gettextjs](https://pypi.python.org/pypi/gettextjs) (python package) installed on your computer. You can install it by running the following command:

```
pip3 install gettextjs
```

## Start example

To launch this example on your computer, you need to install all dependencies by running `npm i` in this example root folder, build PO files using `npm run gettext` command and start local server by running `npm start` command. After doing this you can see it in your browser by visiting [http://localhost:8080/](http://localhost:8080/) page.

## Translations workflow with Poedit

Whenever you make a change in your static copy of your React components, you need to update your po files and translations in it. You can find all po files in the `languages/LC_MESSAGES` directory. Use [Poedit](https://poedit.net/) application to edit translations on your computer.

Once you finish updating your translations, you need to generate json files from mo files created by Poedit. Run `gettextjs --json ./ ./src/` command and it will convert all mo files into json files. Restart your local dev server and your translations will appear in your browser.

There are two commands in the package.json file which you can use to generate mo files from po files and to generate json files from mo files. It is `gettext:compile` and `gettext:convert` which you can run using npm: `npm run gettext:compile` and `npm run gettext:convert`.