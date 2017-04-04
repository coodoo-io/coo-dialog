# coo-dialog

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> This is an Angular 2 Module for having standard Pop Up Dialogs with Bootstrap 4 Styling

## Table of Contents

- [Install](#install)
- [Setup](#Setup)
- [Usage](#usage)
- [API](#api)
- [License](#license)

## Install

```
npm install coo-pop-up-boxes
```

## Setup

Import the CooDialog Module to your Project
```
@NgModule({
    declarations : [ AppComponent ],
    imports : [ NgbModule, BrowserModule, FormsModule, HttpModule, DialogModule, CommonModule ],
    providers : [ DialogService ],
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
const dialogOption: DialogConfiguration = new DialogConfiguration(`Your Message Content here`, new NotificationSettings('Decline', 'Approve'));

this._dialogService.alert(dialogOption);

this._dialogService.prompt(dialogOption)
    .then((data) => {
        data.status;
        data.value;
    })
    .catch(() => {});

this._dialogService.confirm(dialogOption);
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
* The Constructor of the dialog settings model
* @param {string} msg
* @param {DialogSettings} settings
* @param {DialogButtonPosition} buttonPosition
*/
constructor(msg: string, settings: DialogSettings = new DialogSettings(), buttonPosition: DialogButtonPosition = new DialogButtonPosition()) {}

/**
* Constructor of Dialog configuration Module
* The Object Containing the text for the decline and the approve button
*
* @param {string} textDecline
* @param {string} textApprove
* @param {boolean} promptTextRequried
* @param {string} prompMessageTextLabel
*/
constructor(textDecline: string = '', textApprove: string = '', promptTextRequried: boolean = false, promptMessageTextLabel: string = '') {}

/**
* Constructor of Dialog Settings Module
* The Object Containing the position class name for the button.
* It could be decline-left or decline-right || approve-left or approve-right
*
* @param {string} positionDecline
* @param {string} textApprove
*/
constructor(positionDecline: string = 'decline-right', positionApprove: string = 'approve-right') {}

```

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MIT © coodoo
