import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogConfiguration } from './../../models/DialogConfiguration.model';
/**
 *
 */
export declare class PromptBoxComponent {
    activeModal: NgbActiveModal;
    isValid: boolean;
    value: string;
    hasError: boolean;
    notification: DialogConfiguration;
    /**
     *
     */
    constructor(activeModal: NgbActiveModal);
    /**
     *
     */
    decline(): void;
    /**
     *
     */
    approve(): void;
}
