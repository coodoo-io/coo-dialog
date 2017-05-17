export class DialogButtonPosition {

    private _possibleDeclinePositions: Array<string> = [ 'decline-left', 'decline-right' ];
    private _possibleApprovePositions: Array < string >= [ 'approve-left', 'approve-right' ];

    private _positionDecline: string = 'decline-left';
    private _positionApprove: string = 'approve-left';
    /**
     * Constructor of DialogButtonPosition Module
     * The Object Containing the position class name for the button.
     * It could be decline-left or decline-right || approve-left or approve-right
     *
     * @param {string} positionDecline
     * @param {string} textApprove
     */
    constructor(positionDecline: string = 'decline-right', positionApprove: string = 'approve-right') {
        this._positionDecline = (this._possibleDeclinePositions.indexOf(positionDecline)) !== -1 ? positionDecline : 'decline-right';
        this._positionApprove = (this._possibleApprovePositions.indexOf(positionApprove)) !== -1 ? positionApprove : 'approve-right';
        Object.freeze(this);
    }

    get positionDecline(): string {
        return this._positionDecline;
    }

    get positionApprove(): string {
        return this._positionApprove;
    }
}
