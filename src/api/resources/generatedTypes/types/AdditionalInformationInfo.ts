/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SayariAnalyticsApi from "../../../index";

/**
 * This is a generic attribute used to hold miscellaneous information not covered by any other attribute. Includes "value" (for the attribute itself), "type" (a name: e.g., "Real property description"), and "extra" (a miscellaneous field to hold any other details).
 */
export interface AdditionalInformationInfo extends SayariAnalyticsApi.PaginatedResponse {
    data: SayariAnalyticsApi.AdditionalInformationData[];
    next?: unknown;
    offset?: number;
}
