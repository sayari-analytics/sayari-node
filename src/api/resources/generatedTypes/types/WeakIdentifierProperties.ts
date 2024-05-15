/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SayariAnalyticsApi from "../../../index";

export interface WeakIdentifierProperties {
    /** as-of date */
    date?: string;
    /** start date */
    fromDate?: string;
    /** end date */
    toDate?: string;
    /** The type of the identifier, including the country/jurisdiction that issued it */
    type: SayariAnalyticsApi.WeakIdentifierType;
    /** The text value of the identifier */
    value: string;
}
