/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SayariAnalyticsApi from "../../../index";

export interface TranslatedNameProperties {
    /** The type of translation */
    context?: SayariAnalyticsApi.TranslationContext;
    /** as-of date */
    date?: string;
    /** start date */
    fromDate?: string;
    /** The original name */
    original?: string;
    /** end date */
    toDate?: string;
    /** The name, as text */
    value: string;
}
