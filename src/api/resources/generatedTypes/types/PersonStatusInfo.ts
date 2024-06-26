/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Sayari from "../../../index";

/**
 * A key event occurring in a person's life, usually temporal
 */
export interface PersonStatusInfo extends Sayari.PaginatedResponse {
    data: Sayari.PersonStatusData[];
    next?: unknown;
    offset?: number;
}
