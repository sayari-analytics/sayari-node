/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../..";
import * as SayariAnalyticsApi from "../../../../../api";
import * as core from "../../../../../core";
export declare const SearchRecord: core.serialization.Schema<serializers.SearchRecord.Raw, Omit<SayariAnalyticsApi.SearchRecord, "limit" | "offset">>;
export declare namespace SearchRecord {
    interface Raw {
        q: string;
        filter?: Record<serializers.FilterKey.Raw, string[] | null | undefined> | null;
        fields?: string[] | null;
        facets?: boolean | null;
        geo_facets?: boolean | null;
        advanced?: boolean | null;
    }
}
t the result-set. */
    filter?: Record<SayariAnalyticsApi.FilterKey, string[] | undefined>;
    /** Record or entity fields to search against. */
    fields?: string[];
    /** Whether or not to return search facets in results giving counts by field. Defaults to false. */
    facets?: boolean;
    /** Whether or not to return search geo bound facets in results giving counts by geo tile. Defaults to false. */
    geoFacets?: boolean;
    /** Set to true to enable full elasticsearch query string syntax which allows for fielded search and more complex operators. Note that the syntax is more strict and can result in empty result-sets. Defaults to false. */
    advanced?: boolean;
}