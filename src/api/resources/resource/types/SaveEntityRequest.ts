/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Sayari from "../../../index";

/**
 * @example
 *     {
 *         type: Sayari.ResourceType.Entity,
 *         project: "GNJbkG",
 *         entityId: "Zk0qOaM2SSYg_ZhsljykMQ"
 *     }
 */
export interface SaveEntityRequest {
    type: Sayari.ResourceType;
    /** The project identifier. */
    project: string;
    /** The entity identifier. */
    entityId: string;
}
