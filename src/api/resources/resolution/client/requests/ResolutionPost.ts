/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Sayari from "../../../../index";

/**
 * @example
 *     {
 *         limit: 1,
 *         body: {
 *             name: ["victoria beckham limited"]
 *         }
 *     }
 *
 * @example
 *     {
 *         limit: 1,
 *         body: {
 *             name: ["victoria beckham limited"],
 *             profile: Sayari.ProfileEnum.Suppliers
 *         }
 *     }
 */
export interface ResolutionPost {
    /**
     * A limit on the number of objects to be returned with a range between 1 and 10 inclusive. Defaults to 10.
     */
    limit?: number;
    /**
     * Number of results to skip before returning response. Defaults to 0.
     */
    offset?: number;
    body: Sayari.ResolutionBody;
}
