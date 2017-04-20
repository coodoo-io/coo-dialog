import { DialogButtonPosition } from './DialogButtonPosition.model';
import { DialogSettings } from './DialogSettings.model';
export declare class DialogConfiguration {
    private _msg;
    private _settings;
    private _buttonPosition;
    /**
     * The Constructor of the notification settings model
     * @param {string} msg
     * @param {DialogSettings} settings
     * @param {DialogButtonPosition} buttonPosition
     */
    constructor(msg: string, settings?: DialogSettings, buttonPosition?: DialogButtonPosition);
    /**
     * Public getter for msg
     */
    readonly msg: string;
    /**
     * public getter for settings
     */
    readonly settings: DialogSettings;
    /**
     *
     */
    readonly buttonPosition: DialogButtonPosition;
}
