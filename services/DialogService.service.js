import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertBoxComponent } from './../components/alertBox/alertBox.component';
import { ConfirmBoxComponent } from './../components/confirmBox/confirmBox.component';
import { PromptBoxComponent } from './../components/promptBox/promptBox.component';
var DialogService = (function () {
    function DialogService(_modalService) {
        this._modalService = _modalService;
    }
    /**
     *
     */
    DialogService.prototype.alert = function (dialogOptions, modalOption) {
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
    DialogService.prototype.prompt = function (dialogOptions, modalOption) {
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
    DialogService.prototype.confirm = function (dialogOptions, modalOption) {
        if (dialogOptions === void 0) { dialogOptions = null; }
        if (modalOption === void 0) { modalOption = null; }
        var modalRef = this._modalService.open(ConfirmBoxComponent);
        if (dialogOptions) {
            modalRef.componentInstance.notification = dialogOptions;
        }
        return modalRef.result;
    };
    return DialogService;
}());
export { DialogService };
DialogService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DialogService.ctorParameters = function () { return [
    { type: NgbModal, },
]; };
//# sourceMappingURL=DialogService.service.js.map