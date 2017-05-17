import {Component, Input, ViewEncapsulation} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import {DialogSettings} from '../../models/DialogSettings.model';

import {DialogConfiguration} from './../../models/DialogConfiguration.model';

/**
 *
 */
@Component({ templateUrl : './alertBox.component.html', styleUrls : [ './alertBox.component.css', '../icons.css', '../buttonsBase.css' ], encapsulation : ViewEncapsulation.None })
export class AlertBoxComponent {

    public isValid: boolean = true;
    @Input()
    notification: DialogConfiguration = new DialogConfiguration('Alert', new DialogSettings('Decline', 'Approve'));
    /**
     *
     */
    constructor(public activeModal: NgbActiveModal) {
    }
    /**
     *
     */
    approve(): void {
        this.activeModal.close({ status : 'approved' });
    }
}
