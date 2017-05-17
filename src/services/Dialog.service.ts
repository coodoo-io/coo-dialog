import {Injectable} from '@angular/core';
import {NgbModal, NgbModalOptions, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

import {AlertBoxComponent} from './../components/alertBox/alertBox.component';
import {ConfirmBoxComponent} from './../components/confirmBox/confirmBox.component';
import {PromptBoxComponent} from './../components/promptBox/promptBox.component';
import {DialogConfiguration} from './../models/DialogConfiguration.model';

@Injectable()
export class Dialog {
    constructor(private _modalService: NgbModal) {
    }
    /**
     *
     */
    alert(dialogOptions: DialogConfiguration = null, modalOption: NgbModalOptions = null): Promise<any> {
        const modalRef: NgbModalRef = this._modalService.open(AlertBoxComponent, modalOption || {});
        if (dialogOptions) {
            modalRef.componentInstance.notification = dialogOptions;
        }
        return modalRef.result;
    }
    /**
     *
     */
    prompt(dialogOptions: DialogConfiguration = null, modalOption: NgbModalOptions = null): Promise<any> {
        const modalRef: NgbModalRef = this._modalService.open(PromptBoxComponent);
        if (dialogOptions) {
            modalRef.componentInstance.notification = dialogOptions;
        }
        return modalRef.result;
    }
    /**
     *
     */
    confirm(dialogOptions: DialogConfiguration = null, modalOption: NgbModalOptions = null): Promise<any> {
        const modalRef: NgbModalRef = this._modalService.open(ConfirmBoxComponent);
        if (dialogOptions) {
            modalRef.componentInstance.notification = dialogOptions;
        }
        return modalRef.result;
    }
}
