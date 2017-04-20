import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogSettings } from '../../models/DialogSettings.model';
import { DialogConfiguration } from './../../models/DialogConfiguration.model';
/**
 *
 */
var ConfirmBoxComponent = (function () {
    function ConfirmBoxComponent(activeModal) {
        this.activeModal = activeModal;
        this.notification = new DialogConfiguration('Confirm', new DialogSettings('Decline', 'Approve'));
    }
    /**
     *
     */
    ConfirmBoxComponent.prototype.approve = function () {
        this.activeModal.close({ status: 'approved' });
    };
    return ConfirmBoxComponent;
}());
export { ConfirmBoxComponent };
ConfirmBoxComponent.decorators = [
    { type: Component, args: [{ selector: 'coo-hello', template: "<div class=\"pop-up-box mode-alert\">\n    <div class=\"modal-body\">\n        <div class=\"swal2-icon swal2-success animate\">\n            <span class=\"line tip animate-success-tip\"></span>\n            <span class=\"line long animate-success-long\"></span>\n            <div class=\"placeholder\"></div>\n            <div class=\"fix\"></div>\n        </div>\n        <div [innerHTML]=\"notification.msg\" class=\"notification-message\"></div>\n    </div>\n    <div class=\"modal-footer\">\n        <span (click)=\"approve()\" class=\"btn btn-primary {{notification.buttonPosition.positionApprove}}\">{{notification.settings.textApprove}}</span>\n    </div>\n</div>", styles: [".foo {     background: red; }", ".swal2-icon {   width: 80px;   height: 80px;   border: 4px solid transparent;   border-radius: 50%;   margin: 20px auto 30px;   padding: 0;   position: relative;   box-sizing: content-box;   cursor: default;   -webkit-user-select: none;      -moz-user-select: none;       -ms-user-select: none;           user-select: none; }   .swal2-icon.swal2-error {     border-color: #f27474; }     .swal2-icon.swal2-error .x-mark {       position: relative;       display: block; }     .swal2-icon.swal2-error .line {       position: absolute;       height: 5px;       width: 47px;       background-color: #f27474;       display: block;       top: 37px;       border-radius: 2px; }       .swal2-icon.swal2-error .line.left {         -webkit-transform: rotate(45deg);                 transform: rotate(45deg);         left: 17px; }       .swal2-icon.swal2-error .line.right {         -webkit-transform: rotate(-45deg);                 transform: rotate(-45deg);         right: 16px; }   .swal2-icon.swal2-warning {     font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;     color: #f8bb86;     border-color: #facea8;     font-size: 60px;     line-height: 80px;     text-align: center; }   .swal2-icon.swal2-info {     font-family: 'Open Sans', sans-serif;     color: #3fc3ee;     border-color: #9de0f6;     font-size: 60px;     line-height: 80px;     text-align: center; }   .swal2-icon.swal2-question {     font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;     color: #87adbd;     border-color: #c9dae1;     font-size: 60px;     line-height: 80px;     text-align: center; }   .swal2-icon.swal2-success {     border-color: #a5dc86; }     .swal2-icon.swal2-success::before, .swal2-icon.swal2-success::after {       content: '';       border-radius: 50%;       position: absolute;       width: 60px;       height: 120px;       background: #fff;       -webkit-transform: rotate(45deg);               transform: rotate(45deg); }     .swal2-icon.swal2-success::before {       border-radius: 120px 0 0 120px;       top: -7px;       left: -33px;       -webkit-transform: rotate(-45deg);               transform: rotate(-45deg);       -webkit-transform-origin: 60px 60px;               transform-origin: 60px 60px; }     .swal2-icon.swal2-success::after {       border-radius: 0 120px 120px 0;       top: -11px;       left: 30px;       -webkit-transform: rotate(-45deg);               transform: rotate(-45deg);       -webkit-transform-origin: 0 60px;               transform-origin: 0 60px; }     .swal2-icon.swal2-success .placeholder {       width: 80px;       height: 80px;       border: 4px solid rgba(165, 220, 134, 0.2);       border-radius: 50%;       box-sizing: content-box;       position: absolute;       left: -4px;       top: -4px;       z-index: 2; }     .swal2-icon.swal2-success .fix {       width: 7px;       height: 90px;       background-color: #fff;       position: absolute;       left: 28px;       top: 8px;       z-index: 1;       -webkit-transform: rotate(-45deg);               transform: rotate(-45deg); }     .swal2-icon.swal2-success .line {       height: 5px;       background-color: #a5dc86;       display: block;       border-radius: 2px;       position: absolute;       z-index: 2; }       .swal2-icon.swal2-success .line.tip {         width: 25px;         left: 14px;         top: 46px;         -webkit-transform: rotate(45deg);                 transform: rotate(45deg); }       .swal2-icon.swal2-success .line.long {         width: 47px;         right: 8px;         top: 38px;         -webkit-transform: rotate(-45deg);                 transform: rotate(-45deg); }   @-webkit-keyframes animate-success-tip {   0% {     width: 0;     left: 1px;     top: 19px; }   54% {     width: 0;     left: 1px;     top: 19px; }   70% {     width: 50px;     left: -8px;     top: 37px; }   84% {     width: 17px;     left: 21px;     top: 48px; }   100% {     width: 25px;     left: 14px;     top: 45px; } }  @keyframes animate-success-tip {   0% {     width: 0;     left: 1px;     top: 19px; }   54% {     width: 0;     left: 1px;     top: 19px; }   70% {     width: 50px;     left: -8px;     top: 37px; }   84% {     width: 17px;     left: 21px;     top: 48px; }   100% {     width: 25px;     left: 14px;     top: 45px; } }  @-webkit-keyframes animate-success-long {   0% {     width: 0;     right: 46px;     top: 54px; }   65% {     width: 0;     right: 46px;     top: 54px; }   84% {     width: 55px;     right: 0;     top: 35px; }   100% {     width: 47px;     right: 8px;     top: 38px; } }  @keyframes animate-success-long {   0% {     width: 0;     right: 46px;     top: 54px; }   65% {     width: 0;     right: 46px;     top: 54px; }   84% {     width: 55px;     right: 0;     top: 35px; }   100% {     width: 47px;     right: 8px;     top: 38px; } }  @-webkit-keyframes rotatePlaceholder {   0% {     -webkit-transform: rotate(-45deg);             transform: rotate(-45deg); }   5% {     -webkit-transform: rotate(-45deg);             transform: rotate(-45deg); }   12% {     -webkit-transform: rotate(-405deg);             transform: rotate(-405deg); }   100% {     -webkit-transform: rotate(-405deg);             transform: rotate(-405deg); } }  @keyframes rotatePlaceholder {   0% {     -webkit-transform: rotate(-45deg);             transform: rotate(-45deg); }   5% {     -webkit-transform: rotate(-45deg);             transform: rotate(-45deg); }   12% {     -webkit-transform: rotate(-405deg);             transform: rotate(-405deg); }   100% {     -webkit-transform: rotate(-405deg);             transform: rotate(-405deg); } }  .animate-success-tip {   -webkit-animation: animate-success-tip 0.75s;           animation: animate-success-tip 0.75s; }  .animate-success-long {   -webkit-animation: animate-success-long 0.75s;           animation: animate-success-long 0.75s; }  .swal2-success.animate::after {   -webkit-animation: rotatePlaceholder 4.25s ease-in;           animation: rotatePlaceholder 4.25s ease-in; }  @-webkit-keyframes animate-error-icon {   0% {     -webkit-transform: rotateX(100deg);             transform: rotateX(100deg);     opacity: 0; }   100% {     -webkit-transform: rotateX(0deg);             transform: rotateX(0deg);     opacity: 1; } }  @keyframes animate-error-icon {   0% {     -webkit-transform: rotateX(100deg);             transform: rotateX(100deg);     opacity: 0; }   100% {     -webkit-transform: rotateX(0deg);             transform: rotateX(0deg);     opacity: 1; } }  .animate-error-icon {   -webkit-animation: animate-error-icon 0.5s;           animation: animate-error-icon 0.5s; }  @-webkit-keyframes animate-x-mark {   0% {     -webkit-transform: scale(0.4);             transform: scale(0.4);     margin-top: 26px;     opacity: 0; }   50% {     -webkit-transform: scale(0.4);             transform: scale(0.4);     margin-top: 26px;     opacity: 0; }   80% {     -webkit-transform: scale(1.15);             transform: scale(1.15);     margin-top: -6px; }   100% {     -webkit-transform: scale(1);             transform: scale(1);     margin-top: 0;     opacity: 1; } }  @keyframes animate-x-mark {   0% {     -webkit-transform: scale(0.4);             transform: scale(0.4);     margin-top: 26px;     opacity: 0; }   50% {     -webkit-transform: scale(0.4);             transform: scale(0.4);     margin-top: 26px;     opacity: 0; }   80% {     -webkit-transform: scale(1.15);             transform: scale(1.15);     margin-top: -6px; }   100% {     -webkit-transform: scale(1);             transform: scale(1);     margin-top: 0;     opacity: 1; } }  .animate-x-mark {   -webkit-animation: animate-x-mark 0.5s;           animation: animate-x-mark 0.5s; }  @-webkit-keyframes pulse-warning {   0% {     border-color: #f8d486; }   100% {     border-color: #f8bb86; } }  @keyframes pulse-warning {   0% {     border-color: #f8d486; }   100% {     border-color: #f8bb86; } }  .pulse-warning {   -webkit-animation: pulse-warning 0.75s infinite alternate;           animation: pulse-warning 0.75s infinite alternate; }  @-webkit-keyframes rotate-loading {   0% {     -webkit-transform: rotate(0deg);             transform: rotate(0deg); }   100% {     -webkit-transform: rotate(360deg);             transform: rotate(360deg); } }  @keyframes rotate-loading {   0% {     -webkit-transform: rotate(0deg);             transform: rotate(0deg); }   100% {     -webkit-transform: rotate(360deg);             transform: rotate(360deg); } }", ".approve-left, .decline-left {     float:left; }  .decline-left {     margin-right: 20px; }  .modal-footer {     clear:both; }  .swal2-warning, .swal2-success, .swal2-info {     float:left;     left: 20px; }  .notification-message {     padding-top: 40px;     padding-left: 120px; }"] },] },
];
/** @nocollapse */
ConfirmBoxComponent.ctorParameters = function () { return [
    { type: NgbActiveModal, },
]; };
ConfirmBoxComponent.propDecorators = {
    'notification': [{ type: Input },],
};
//# sourceMappingURL=confirmBox.component.js.map