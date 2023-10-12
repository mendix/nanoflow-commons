// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import { Big } from "big.js";

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * Hides a loading dialog.
 * @param {Big} identifier - This field is required.
 * @returns {Promise.<void>}
 */
export async function HideProgress(identifier?: Big): Promise<void> {
    // BEGIN USER CODE

    if (identifier == null) {
        return Promise.reject(new Error("Input parameter 'Identifier' is required"));
    }

    mx.ui.hideProgress(Number(identifier));
    return Promise.resolve();

    // END USER CODE
}
