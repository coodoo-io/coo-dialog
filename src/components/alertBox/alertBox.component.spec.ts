import {async, TestBed} from '@angular/core/testing';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import {AlertBoxComponent} from './alertBox.component';

describe('Alert Box Component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({ declarations : [ AlertBoxComponent ], providers : [ NgbActiveModal ] }).compileComponents();
    }));

    it('should create alert box component', async(() => {
           const fixture = TestBed.createComponent(AlertBoxComponent);
           const alertBoxComponent = fixture.debugElement.componentInstance;
           expect(alertBoxComponent).toBeTruthy();
       }));

    it('should have written pop-up-box mode-alert', async(() => {
           const fixture = TestBed.createComponent(AlertBoxComponent);
           fixture.detectChanges();
           const compiled = fixture.debugElement.nativeElement;
           expect(compiled.innerHTML).toContain('pop-up-box mode-alert');
       }));

});
