import {Component, Input, ViewEncapsulation} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import {DialogConfiguration} from './../../models/DialogConfiguration.model';
import {DialogSettings} from './../../models/DialogSettings.model';

/**
 *
 */
@Component({
    selector : 'coo-hello',
    templateUrl : './promptBox.component.html',
    styleUrls : [ './promptBox.component.css', './../icons.css', '../buttonsBase.css' ],
    encapsulation : ViewEncapsulation.None
})
export class PromptBoxComponent {

    public isValid: boolean = true;
    public value: string = '';
    public hasError: boolean = false;
    @Input()
    notification: DialogConfiguration = new DialogConfiguration('Prompt', new DialogSettings('Decline', 'Approve'));
    /**
     *
     */
    constructor(public activeModal: NgbActiveModal) {
    }
    /**
     *
     */
    decline(): void {
        this.activeModal.dismiss({ status : 'declined' });
    }
    /**
     *
     */
    approve(): void {
        if (!this.notification.settings.promptTextRequired || (this.notification.settings.promptTextRequired && this.value !== '')) {
            return this.activeModal.close({ status : 'approved', value : this.value });
        }
        this.hasError = true;
    }
}
