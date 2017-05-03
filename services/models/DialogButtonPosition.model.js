var DialogButtonPosition = (function () {
    /**
     * Constructor of DialogButtonPosition Module
     * The Object Containing the position class name for the button.
     * It could be decline-left or decline-right || approve-left or approve-right
     *
     * @param {string} positionDecline
     * @param {string} textApprove
     */
    function DialogButtonPosition(positionDecline, positionApprove) {
        if (positionDecline === void 0) { positionDecline = 'decline-right'; }
        if (positionApprove === void 0) { positionApprove = 'approve-right'; }
        this._possibleDeclinePositions = ['decline-left', 'decline-right'];
        this._possibleApprovePositions = ['approve-left', 'approve-right'];
        this._positionDecline = 'decline-left';
        this._positionApprove = 'approve-left';
        this._positionDecline = (this._possibleDeclinePositions.indexOf(positionDecline)) !== -1 ? positionDecline : 'decline-right';
        this._positionApprove = (this._possibleApprovePositions.indexOf(positionApprove)) !== -1 ? positionApprove : 'approve-right';
        Object.freeze(this);
    }
    Object.defineProperty(DialogButtonPosition.prototype, "positionDecline", {
        get: function () {
            return this._positionDecline;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DialogButtonPosition.prototype, "positionApprove", {
        get: function () {
            return this._positionApprove;
        },
        enumerable: true,
        configurable: true
    });
    return DialogButtonPosition;
}());
export { DialogButtonPosition };
//# sourceMappingURL=DialogButtonPosition.model.js.map