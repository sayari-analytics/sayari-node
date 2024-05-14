/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SayariAnalyticsApi from "../../../index";

export interface RelationshipInfo {
    editable?: boolean;
    record: string;
    attributes: Record<SayariAnalyticsApi.Attributes, unknown[] | undefined>;
    date?: string;
    fromDate?: string;
    toDate?: string;
    acquisitionDate: string;
    former?: boolean;
    publicationDate?: string;
}
