/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SayariAnalyticsApi from "../../../index";

/**
 * A numerical measurement of a dimension of an entity (e.g., weight) using a standard unit
 */
export interface MeasurementInfo extends SayariAnalyticsApi.PaginatedResponse {
    data: SayariAnalyticsApi.MeasurementData[];
    next?: unknown;
    offset?: number;
}
