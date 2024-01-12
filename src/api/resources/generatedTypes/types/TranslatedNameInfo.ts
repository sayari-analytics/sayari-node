/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SayariAnalyticsApi from "../../..";

/**
 * A name that has been translated to English
 */
export interface TranslatedNameInfo extends SayariAnalyticsApi.PaginatedResponse {
    data: SayariAnalyticsApi.TranslatedNameData[];
    next?: unknown;
    offset?: number;
}
