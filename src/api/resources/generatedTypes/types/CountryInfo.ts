/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SayariAnalyticsApi from "../../..";

/**
 * An affiliation of an entity with a given country through residence, nationality, etc.
 */
export interface CountryInfo extends SayariAnalyticsApi.PaginatedResponse {
    data: SayariAnalyticsApi.CountryData[];
    next?: unknown;
    offset?: number;
}
