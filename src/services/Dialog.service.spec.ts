/* tslint:disable:no-unused-variable */

import {async, inject, TestBed} from '@angular/core/testing';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {AlertBoxComponent} from './../components/alertBox/alertBox.component';
import {Dialog} from './Dialog.service';

describe('Service: PupUpBoxesService', () => {

    let fixture;
    let component: AlertBoxComponent;

    beforeEach(async() => {
        const configuredModule
            = TestBed.configureTestingModule({ declarations : [ AlertBoxComponent ], providers : [ Dialog, NgbModal, NgbActiveModal ], imports : [ NgbModule.forRoot() ] });

        TestBed.overrideModule(BrowserDynamicTestingModule, { set : { entryComponents : [ AlertBoxComponent ] } });

        fixture = TestBed
                      .overrideComponent(AlertBoxComponent, {
                          set : {
                              template : `<template ngbModalContainer></template>
                <a *ngIf="notification.mode!='ALERT'" (click)="decline()" 
                class="btn btn-secondary">{{notification.settings.textDecline}}</a>
                <a *ngIf="notification.mode!='ALERT'" (click)="approve()" class="btn btn-primary">{{notification.settings.textApprove}}</a>`
                          }
                      })
                      .createComponent(AlertBoxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        return configuredModule.compileComponents();
    });

    it('should be truthy and have defined public functions', inject([ Dialog ], (service: Dialog) => {
           expect(service).toBeTruthy();
           expect(service.alert).toBeDefined();
           expect(service.prompt).toBeDefined();
           expect(service.confirm).toBeDefined();
       }));

    it('should open a modal dialog if the alert function is called and close it on approve click', async(inject([ Dialog ], (service: Dialog) => {
           spyOn(component, 'approve').and.callThrough();
           fixture.whenStable().then(() => {
               service.alert();

               const compiled = fixture.debugElement.nativeElement;
               compiled.querySelector('.btn-primary').click();

               fixture.whenStable()
                   .then(() => {
                       expect(component.approve).toHaveBeenCalled();
                   })
                   .catch((error) => {
                       console.log('Message', error.message);
                   });
           });

       })));
});
