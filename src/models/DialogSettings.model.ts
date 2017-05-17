export class DialogSettings {

    private _textDecline: string = '';
    private _textApprove: string = '';
    private _promptTextRequried: boolean = false;
    private _promptMessageTextLabel: string = '';
    private _showIcon: boolean = false;
    /**
     * Constructor of Dialog Settings Module
     * The Object Containing the text for the decline and the approve button
     *
     * @param {string} textDecline
     * @param {string} textApprove
     * @param {boolean} promptTextRequried
     * @param {string} prompMessageTextLabel
     * @param {boolean} showIcon
     */
    constructor(textDecline: string = '', textApprove: string = '', promptTextRequried: boolean = false, promptMessageTextLabel: string = '', showIcon: boolean = false) {
        this._textDecline = textDecline;
        this._textApprove = textApprove;
        this._promptTextRequried = promptTextRequried;
        this._promptMessageTextLabel = promptMessageTextLabel;
        Object.freeze(this);
    }

    get textDecline(): string {
        return this._textDecline;
    }

    get textApprove(): string {
        return this._textApprove;
    }

    get promptTextRequired(): boolean {
        return this._promptTextRequried;
    }

    get promptMessageTextLabel(): string {
        return this._promptMessageTextLabel;
    }

    get showIcon(): boolean {
        return this._showIcon;
    }
}
