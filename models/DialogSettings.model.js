var DialogSettings = (function () {
    /**
     * Constructor of Dialog Settings Module
     * The Object Containing the text for the decline and the approve button
     *
     * @param {string} textDecline
     * @param {string} textApprove
     * @param {boolean} promptTextRequried
     * @param {string} prompMessageTextLabel
     */
    function DialogSettings(textDecline, textApprove, promptTextRequried, promptMessageTextLabel) {
        if (textDecline === void 0) { textDecline = ''; }
        if (textApprove === void 0) { textApprove = ''; }
        if (promptTextRequried === void 0) { promptTextRequried = false; }
        if (promptMessageTextLabel === void 0) { promptMessageTextLabel = ''; }
        this._textDecline = '';
        this._textApprove = '';
        this._promptTextRequried = false;
        this._promptMessageTextLabel = '';
        this._textDecline = textDecline;
        this._textApprove = textApprove;
        this._promptTextRequried = promptTextRequried;
        this._promptMessageTextLabel = promptMessageTextLabel;
        Object.freeze(this);
    }
    Object.defineProperty(DialogSettings.prototype, "textDecline", {
        get: function () {
            return this._textDecline;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DialogSettings.prototype, "textApprove", {
        get: function () {
            return this._textApprove;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DialogSettings.prototype, "promptTextRequired", {
        get: function () {
            return this._promptTextRequried;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DialogSettings.prototype, "promptMessageTextLabel", {
        get: function () {
            return this._promptMessageTextLabel;
        },
        enumerable: true,
        configurable: true
    });
    return DialogSettings;
}());
export { DialogSettings };
//# sourceMappingURL=DialogSettings.model.js.map