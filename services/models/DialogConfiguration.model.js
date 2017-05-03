import { DialogButtonPosition } from './DialogButtonPosition.model';
import { DialogSettings } from './DialogSettings.model';
var DialogConfiguration = (function () {
    /**
     * The Constructor of the notification settings model
     * @param {string} msg
     * @param {DialogSettings} settings
     * @param {DialogButtonPosition} buttonPosition
     */
    function DialogConfiguration(msg, settings, buttonPosition) {
        if (settings === void 0) { settings = new DialogSettings(); }
        if (buttonPosition === void 0) { buttonPosition = new DialogButtonPosition(); }
        this._msg = '';
        this._settings = new DialogSettings();
        this._buttonPosition = new DialogButtonPosition();
        this._msg = msg;
        this._settings = settings;
        this._buttonPosition = buttonPosition;
        Object.freeze(this);
    }
    Object.defineProperty(DialogConfiguration.prototype, "msg", {
        /**
         * Public getter for msg
         */
        get: function () {
            return this._msg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DialogConfiguration.prototype, "settings", {
        /**
         * public getter for settings
         */
        get: function () {
            return this._settings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DialogConfiguration.prototype, "buttonPosition", {
        /**
         *
         */
        get: function () {
            return this._buttonPosition;
        },
        enumerable: true,
        configurable: true
    });
    return DialogConfiguration;
}());
export { DialogConfiguration };
//# sourceMappingURL=DialogConfiguration.model.js.map