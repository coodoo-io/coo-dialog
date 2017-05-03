import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogConfiguration } from './../../models/DialogConfiguration.model';
/**
 *
 */
export declare class ConfirmBoxComponent {
    activeModal: NgbActiveModal;
    notification: DialogConfiguration;
    constructor(activeModal: NgbActiveModal);
    /**
     *
     */
    approve(): void;
}