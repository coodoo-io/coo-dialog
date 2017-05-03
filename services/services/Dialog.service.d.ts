import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { DialogConfiguration } from './../models/DialogConfiguration.model';
export declare class Dialog {
    private _modalService;
    constructor(_modalService: NgbModal);
    /**
     *
     */
    alert(dialogOptions?: DialogConfiguration, modalOption?: NgbModalOptions): Promise<any>;
    /**
     *
     */
    prompt(dialogOptions?: DialogConfiguration, modalOption?: NgbModalOptions): Promise<any>;
    /**
     *
     */
    confirm(dialogOptions?: DialogConfiguration, modalOption?: NgbModalOptions): Promise<any>;
}
