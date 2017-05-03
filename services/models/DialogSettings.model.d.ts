export declare class DialogSettings {
    private _textDecline;
    private _textApprove;
    private _promptTextRequried;
    private _promptMessageTextLabel;
    private _showIcon;
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
    constructor(textDecline?: string, textApprove?: string, promptTextRequried?: boolean, promptMessageTextLabel?: string, showIcon?: boolean);
    readonly textDecline: string;
    readonly textApprove: string;
    readonly promptTextRequired: boolean;
    readonly promptMessageTextLabel: string;
    readonly showIcon: boolean;
}
