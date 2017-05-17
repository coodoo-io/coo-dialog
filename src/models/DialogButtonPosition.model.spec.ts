import {DialogButtonPosition} from './DialogButtonPosition.model';
describe('Prompt Box Component', () => {

    let buttonPositionMode: DialogButtonPosition;

    it('should be initalized with no information', () => {
        buttonPositionMode = new DialogButtonPosition();
        expect(buttonPositionMode).toBeDefined;
        expect(buttonPositionMode.positionApprove).toBe('approve-right');
        expect(buttonPositionMode.positionDecline).toBe('decline-right');
    });

    it('should have left class if initalized with left', () => {
        buttonPositionMode = new DialogButtonPosition('decline-left', 'approve-left');
        expect(buttonPositionMode).toBeDefined;
        expect(buttonPositionMode.positionApprove).toBe('approve-left');
        expect(buttonPositionMode.positionDecline).toBe('decline-left');
    });

    it('should have right class if initalized with wrong name', () => {
        buttonPositionMode = new DialogButtonPosition('decline-foo', 'approve-foo');
        expect(buttonPositionMode).toBeDefined;
        expect(buttonPositionMode.positionApprove).toBe('approve-right');
        expect(buttonPositionMode.positionDecline).toBe('decline-right');
    });

});
