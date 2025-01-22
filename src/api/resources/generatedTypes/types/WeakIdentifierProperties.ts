/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Sayari from "../../../index";

export interface WeakIdentifierProperties {
    /** as-of date of attribute */
    date?: string;
    /** extra information of attribute */
    extra?: Record<string, unknown>;
    /** start date of attribute */
    fromDate?: string;
    /** end date of attribute */
    toDate?: string;
    /** The type of the identifier, including the country/jurisdiction that issued it */
    type: Sayari.WeakIdentifierType;
    /** The text value of the identifier */
    value: string;
}
