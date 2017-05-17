import {Component, Input, ViewEncapsulation} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import {DialogSettings} from '../../models/DialogSettings.model';
import {DialogConfiguration} from './../../models/DialogConfiguration.model';
/**
 *
 */
@Component({
    selector : 'coo-hello',
    templateUrl : './confirmBox.component.html',
    styleUrls : [ './confirmBox.component.css', '../icons.css', '../buttonsBase.css' ],
    encapsulation : ViewEncapsulation.None
})
export class ConfirmBoxComponent {

    @Input()
    notification: DialogConfiguration = new DialogConfiguration('Confirm', new DialogSettings('Decline', 'Approve'));

    constructor(public activeModal: NgbActiveModal) {
    }

    /**
     * Decline the modal layer
     */
    decline(): void {
        this.activeModal.dismiss({ status : 'declined' });
    }

    /**
     * Aprove the modal layer
     */
    approve(): void {
        this.activeModal.close({ status : 'approved' });
    }
}
