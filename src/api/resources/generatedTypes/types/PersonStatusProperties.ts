/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Sayari from "../../../index";

export interface PersonStatusProperties {
    /** as-of date */
    date?: string;
    /** start date */
    fromDate?: string;
    /** end date */
    toDate?: string;
    /** The event */
    value: Sayari.PersonStatus;
}
