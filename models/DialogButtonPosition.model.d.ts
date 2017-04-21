export declare class DialogButtonPosition {
    private _possibleDeclinePositions;
    private _possibleApprovePositions;
    private _positionDecline;
    private _positionApprove;
    /**
     * Constructor of DialogButtonPosition Module
     * The Object Containing the position class name for the button.
     * It could be decline-left or decline-right || approve-left or approve-right
     *
     * @param {string} positionDecline
     * @param {string} textApprove
     */
    constructor(positionDecline?: string, positionApprove?: string);
    readonly positionDecline: string;
    readonly positionApprove: string;
}
