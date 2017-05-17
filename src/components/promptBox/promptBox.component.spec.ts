import {async, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import {PromptBoxComponent} from './promptBox.component';

describe('Prompt Box Component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({ imports : [ FormsModule ], declarations : [ PromptBoxComponent ], providers : [ NgbActiveModal ] }).compileComponents();
    }));

    it('should create alert box component', async(() => {
           const fixture = TestBed.createComponent(PromptBoxComponent);
           const alertBoxComponent = fixture.debugElement.componentInstance;
           expect(alertBoxComponent).toBeTruthy();
       }));

    it('should have written hello world', async(() => {
           const fixture = TestBed.createComponent(PromptBoxComponent);
           fixture.detectChanges();
           const compiled = fixture.debugElement.nativeElement;
           expect(compiled.innerHTML).toContain('pop-up-box mode-alert');
       }));

});
