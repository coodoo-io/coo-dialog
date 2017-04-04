import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogConfiguration } from './../../models/DialogConfiguration.model';
/**
 *
 */
export declare class AlertBoxComponent {
    activeModal: NgbActiveModal;
    isValid: boolean;
    notification: DialogConfiguration;
    /**
     *
     */
    constructor(activeModal: NgbActiveModal);
    /**
     *
     */
    approve(): void;
}
