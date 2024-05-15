/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SayariAnalyticsApi from "../../../index";

/**
 * List of records that reference the entity.
 */
export interface ReferencedBy extends SayariAnalyticsApi.PaginatedResponse {
    offset?: number;
    next?: unknown;
    data: SayariAnalyticsApi.ReferencedByData[];
}
