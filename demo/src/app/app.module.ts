import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {DialogModule} from './modules/dialog/index';
import {Dialog} from './modules/dialog/services/Dialog.service';

@NgModule({
    declarations : [ AppComponent ],
    imports : [ NgbModule, BrowserModule, FormsModule, HttpModule, DialogModule, CommonModule ],
    providers : [ Dialog ],
    bootstrap : [ AppComponent ]
})
export class AppModule {
}
