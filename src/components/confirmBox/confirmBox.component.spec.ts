import {async, TestBed} from '@angular/core/testing';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import {ConfirmBoxComponent} from './confirmBox.component';

describe('Confirm Box Component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({ declarations : [ ConfirmBoxComponent ], providers : [ NgbActiveModal ] }).compileComponents();
    }));

    it('should create alert box component', async(() => {
           const fixture = TestBed.createComponent(ConfirmBoxComponent);
           const alertBoxComponent = fixture.debugElement.componentInstance;
           expect(alertBoxComponent).toBeTruthy();
       }));

    it('should have written hello world', async(() => {
           const fixture = TestBed.createComponent(ConfirmBoxComponent);
           fixture.detectChanges();
           const compiled = fixture.debugElement.nativeElement;
           expect(compiled.innerHTML).toContain('pop-up-box mode-alert');
       }));

});
