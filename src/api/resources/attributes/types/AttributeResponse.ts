/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Sayari from "../../../index";

/**
 * OK
 *
 * @example
 *     {
 *         data: {
 *             value: {
 *                 "street1": "1600 Pennsylvania Avenue NW",
 *                 "city": "Washington DC",
 *                 "state": "Washington DC",
 *                 "postalCode": "20500",
 *                 "country": "US"
 *             },
 *             properties: [{
 *                     editable: true,
 *                     recordCount: 0,
 *                     id: "enEwNGF4WDJkTG45dEU2VzZROFFoZ3xhZGRyZXNzfDBwbEVCMHxVNzhzN21yOUVFTThIZ3pwREM3UDFB"
 *                 }]
 *         }
 *     }
 */
export interface AttributeResponse {
    data: Sayari.AttributeResponseData;
}
