/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Sayari from "../../../index";

/**
 * @example
 *     {
 *         data: {
 *             type: Sayari.ResourceType.Entity,
 *             id: "Ywk6qw",
 *             project: "GNJbkG",
 *             label: "HOME DEPOT, U. S. A., INC.",
 *             created: "2024-03-12 16:12:38.528362+00",
 *             updated: "2024-03-12 16:12:38.528362+00",
 *             updatedBy: "auth0|5e45bd8caccd890e68147513",
 *             version: 0,
 *             entityId: "n9SA4T_33tDmLtS8BhC6Zg",
 *             tagIds: [],
 *             caseStatus: "not_assigned"
 *         }
 *     }
 */
export interface SaveEntityResponse {
    data: Sayari.EntityResponseData;
}
