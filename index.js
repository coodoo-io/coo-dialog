import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertBoxComponent } from './components/alertBox/alertBox.component';
import { ConfirmBoxComponent } from './components/confirmBox/confirmBox.component';
import { PromptBoxComponent } from './components/promptBox/promptBox.component';
import { Dialog } from './services/Dialog.service';
/**
 * @module PopUpBoxesModule
 * @description
 * This module defines the entry point for the Pop Up Boxes Module and exposes the needed Services to open Pop Up Boxes
 */
var DialogModule = (function () {
    function DialogModule() {
    }
    return DialogModule;
}());
export { DialogModule };
DialogModule.decorators = [
    { type: NgModule, args: [{
                imports: [NgbModule.forRoot(), CommonModule, FormsModule],
                providers: [Dialog],
                declarations: [AlertBoxComponent, ConfirmBoxComponent, PromptBoxComponent],
                entryComponents: [AlertBoxComponent, ConfirmBoxComponent, PromptBoxComponent],
                exports: []
            },] },
];
/** @nocollapse */
DialogModule.ctorParameters = function () { return []; };
//# sourceMappingURL=index.js.map