import {Component} from '@angular/core';

import {DialogButtonPosition} from './modules/dialog/models/DialogButtonPosition.model';
import {DialogConfiguration} from './modules/dialog/models/DialogConfiguration.model';
import {DialogSettings} from './modules/dialog/models/DialogSettings.model';
import {Dialog} from './modules/dialog/services/Dialog.service';

@Component({ selector : 'tbody', templateUrl : './app.component.html', styleUrls : [ './app.component.css' ] })
export class AppComponent {

    notificationOptionLeft: DialogConfiguration
        = new DialogConfiguration('Alert Content', new DialogSettings('Decline', 'Approve'), new DialogButtonPosition('decline-left', 'approve-left'));

    constructor(private _Dialog: Dialog) {
    }
    /**
     *
     */
    clickAlert(): void {
        const notificationOption: DialogConfiguration = new DialogConfiguration(`Nachricht welche angeziegt werden soll`, new DialogSettings('Abbrechen', 'Ok'));
        this._Dialog.alert(notificationOption)
            .then((data) => {
                console.log(data);
            })
            .catch((data) => {
                console.log(data);
            });
    }
    /**
     *
     */
    clickPrompt(): void {
        this._Dialog
            .prompt(new DialogConfiguration(`Alert Content with a lot of text to 
        see that the box is not going trought the wall`,
                                            new DialogSettings('Abbrechen', 'Ok', false, ''), new DialogButtonPosition('decline-left', 'approve-right')))
            .then((data) => {
                console.log(data);
            })
            .catch((data) => {
                console.log(data);
            });
    }
    /**
     *
     */
    clickConfirm(): void {
        this._Dialog.confirm();
    }

    clickAlertLeft(): void {
        this._Dialog.alert(this.notificationOptionLeft);
    }

    /**
     *
     */
    clickPromptLeft(): void {
        this._Dialog.prompt(this.notificationOptionLeft);
    }

    /**
     *
     */
    clickConfirmLeft(): void {
        this._Dialog.confirm(this.notificationOptionLeft);
    }
}
