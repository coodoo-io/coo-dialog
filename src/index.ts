import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AlertBoxComponent} from './components/alertBox/alertBox.component';
import {ConfirmBoxComponent} from './components/confirmBox/confirmBox.component';
import {PromptBoxComponent} from './components/promptBox/promptBox.component';
import {Dialog} from './services/Dialog.service';

/**
 * @module PopUpBoxesModule
 * @description
 * This module defines the entry point for the Pop Up Boxes Module and exposes the needed Services to open Pop Up Boxes
 */
@NgModule({
    imports : [ CommonModule, FormsModule, NgbModule.forRoot() ],
    declarations : [ AlertBoxComponent, ConfirmBoxComponent, PromptBoxComponent ],
    entryComponents : [ AlertBoxComponent, ConfirmBoxComponent, PromptBoxComponent ]
})
export class DialogModule {
    static forRoot(): Object {
        return {
            ngModule : DialogModule,
            providers : [ Dialog ],
        };
    }
}
