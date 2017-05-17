# coo-dialog

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> This is an Angular 2 Module for having standard Pop Up Dialogs with Bootstrap 4 Styling

[Visit our Demo Page](http://s3.eu-central-1.amazonaws.com/coodoo-baf-resources/coo-dialog/static-demo-page/src/index.html)

## Table of Contents

- [Install](#install)
- [NPM Scripts](#npm-scripts)
- [Develop](#develop)
- [Setup](#Setup)
- [Usage](#usage)
- [API](#api)
- [License](#license)

## Install

```
npm install coo-dialog
```

## NPM Scripts

There are severall npm scripts so you extend this dialog for your needs

```
npm run start:app -> is starting the Demo Application inside the demo folder with the content of the module under src
npm run test -> is starting the karma instance to run the tests under the src folder
npm run test:watch -> is starting the tests and run them on every change in the src and demo folder
npm run test:coverage -> just prints a common test coverage report
npm run start:app -> start the demo application out of the root folder
npm run build:ngs -> build the coo-dialog with ngc to the dist folder
npm run build:demo -> builds the demo under the demo/dist folder
npm run ts-lint -> lint the code against the given lint config
npm run compodoc -> creates the documentation for this ng modul with the help of compodoc
```

## Develop

If you wanna develop on this module it is helpful to link the /src into the /demo/src/app/modules/ folder and import all the needed sources against this folder

```
ln -s [Path to your working space]/src/ demo/src/app/modules/dialog
```
With this little trick it is possible to compile the demo with the given build script

## Setup

Import the CooDialog Module to your Project
```
@NgModule({
    declarations : [ AppComponent ],
    imports : [ NgbModule, BrowserModule, FormsModule, HttpModule, DialogModule, CommonModule ],
    providers : [ Dialog ],
    bootstrap : [ AppComponent ]
})
```

Update your angluar-cli.json with tje styles form the installed bootstrap version or your own

```
"styles": [
        "./src/styles.css",
        "./../node_modules/bootstrap/dist/css/bootstrap.css"
      ],
```

## Usage

Every Service call will return a promise with the information about the closing of the dialog.
In the **then** function the approval of the Dialog will be catched in the **catch** block the dismissal.
The data will contain an object with the key status for the information about the state.
In the Prompt dialog there will also be a value key with the information from the input field. 
**Alert** and **Confirm** only have a accept button so yu can only close them and get the status information in the 
**then block**.
```
const dialogOption: DialogConfiguration = new DialogConfiguration(`Your Message Content here`, new DialogSettings('Decline', 'Approve'));

this._dialog.alert(dialogOption);

this._dialog.prompt(dialogOption)
    .then((data) => {
        data.status;
        data.value;
    })
    .catch(() => {});

this._dialog.confirm(dialogOption);
```

## API Dialog Service
```
public function alert(dialogConfiguration: DialogConfiguration)
public function prompt(dialogConfiguration: DialogConfiguration)
public function confirm(dialogConfiguration: DialogConfiguration)
```
## API Dialog Configuration
```
/**
* The Constructor of the DialogConfiguration model
* @param {string} msg
* @param {DialogSettings} settings
* @param {DialogButtonPosition} buttonPosition
*/
constructor(msg: string, settings: DialogSettings = new DialogSettings(), buttonPosition: DialogButtonPosition = new DialogButtonPosition()) {}
```

### Example 

![alt text](https://s3.eu-central-1.amazonaws.com/coodoo-baf-resources/coo-dialog/Bildschirmfoto+2017-04-21+um+10.27.01.png "Logo Title Text 1")

new DialogConfiguration('Nachricht welche angeziegt werden soll', new DialogSettings(), new DialogButtonPosition());
new DialogConfiguration('Nachricht welche angeziegt werden soll', new DialogSettings('Abbrechen', 'Ok'));

```
/**
* Constructor of Dialog Settings Module
* The Object Containing the text for the decline and the approve button
*
* @param {string} textDecline
* @param {string} textApprove
* @param {boolean} promptTextRequried
* @param {string} prompMessageTextLabel
* @param {boolean} showIcon
*/
constructor(textDecline: string = '', textApprove: string = '', promptTextRequried: boolean = false, promptMessageTextLabel: string = '', showIcon: boolean = false) {}
```

### Example 
new DialogSettings('Abbrechen', 'Ok', false, '');

```
/**
* Constructor of DialogButtonPosition Module
* The Object Containing the position class name for the button.
* It could be decline-left or decline-right || approve-left or approve-right
*
* @param {string} positionDecline
* @param {string} textApprove
*/
constructor(positionDecline: string = 'decline-right', positionApprove: string = 'approve-right') {}
```
### Example
new DialogButtonPosition('decline-left');

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

### Current coverage

```
=============================== Coverage summary ===============================
Statements   : 88.89% ( 152/171 )
Branches     : 46.81% ( 22/47 )
Functions    : 81.82% ( 27/33 )
Lines        : 89.86% ( 133/148 )
================================================================================
```

## License

MIT © coodoo
