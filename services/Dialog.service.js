import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertBoxComponent } from './../components/alertBox/alertBox.component';
import { ConfirmBoxComponent } from './../components/confirmBox/confirmBox.component';
import { PromptBoxComponent } from './../components/promptBox/promptBox.component';
var Dialog = (function () {
    function Dialog(_modalService) {
        this._modalService = _modalService;
    }
    /**
     *
     */
    Dialog.prototype.alert = function (dialogOptions, modalOption) {
        if (dialogOptions === void 0) { dialogOptions = null; }
        if (modalOption === void 0) { modalOption = null; }
        var modalRef = this._modalService.open(AlertBoxComponent, modalOption || {});
        if (dialogOptions) {
            modalRef.componentInstance.notification = dialogOptions;
        }
        return modalRef.result;
    };
    /**
     *
     */
    Dialog.prototype.prompt = function (dialogOptions, modalOption) {
        if (dialogOptions === void 0) { dialogOptions = null; }
        if (modalOption === void 0) { modalOption = null; }
        var modalRef = this._modalService.open(PromptBoxComponent);
        if (dialogOptions) {
            modalRef.componentInstance.notification = dialogOptions;
        }
        return modalRef.result;
    };
    /**
     *
     */
    Dialog.prototype.confirm = function (dialogOptions, modalOption) {
        if (dialogOptions === void 0) { dialogOptions = null; }
        if (modalOption === void 0) { modalOption = null; }
        var modalRef = this._modalService.open(ConfirmBoxComponent);
        if (dialogOptions) {
            modalRef.componentInstance.notification = dialogOptions;
        }
        return modalRef.result;
    };
    return Dialog;
}());
export { Dialog };
Dialog.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Dialog.ctorParameters = function () { return [
    { type: NgbModal, },
]; };
//# sourceMappingURL=Dialog.service.js.map