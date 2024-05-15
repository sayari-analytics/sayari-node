/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SayariAnalyticsApi from "../../../index";

/**
 * The status of an entity. This attribute is used to indicate details such as registration, operating, or liquidation status as well as an entity's license or sole proprietorship status.
 */
export interface StatusInfo extends SayariAnalyticsApi.PaginatedResponse {
    data: SayariAnalyticsApi.StatusData[];
    next?: unknown;
    offset?: number;
}
