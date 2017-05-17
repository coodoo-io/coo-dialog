import {DialogButtonPosition} from './DialogButtonPosition.model';
import {DialogSettings} from './DialogSettings.model';
export class DialogConfiguration {

    private _msg: string = '';
    private _settings: DialogSettings = new DialogSettings();
    private _buttonPosition: DialogButtonPosition = new DialogButtonPosition();
    /**
     * The Constructor of the DialogConfiguration model
     * @param {string} msg
     * @param {DialogSettings} settings
     * @param {DialogButtonPosition} buttonPosition
     */
    constructor(msg: string, settings: DialogSettings = new DialogSettings(), buttonPosition: DialogButtonPosition = new DialogButtonPosition()) {
        this._msg = msg;
        this._settings = settings;
        this._buttonPosition = buttonPosition;
        Object.freeze(this);
    }
    /**
     * Public getter for msg
     */
    get msg(): string {
        return this._msg;
    }
    /**
     * public getter for settings
     */
    get settings(): DialogSettings {
        return this._settings;
    }
    /**
     *
     */
    get buttonPosition(): DialogButtonPosition {
        return this._buttonPosition;
    }
}
