/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as SayariAnalyticsApi from "../../../..";
export interface SearchSuppliers {
    /**
     * A limit on the number of objects to be returned with a range between 1 and 100. Defaults to 100.
     */
    limit?: number;
    /**
     * Number of results to skip before returning response. Defaults to 0.
     */
    offset?: number;
    /** Query term. The syntax for the query parameter follows elasticsearch simple query string syntax. The includes the ability to use search operators and to perform nested queries. Must be url encoded. */
    q: string;
    /** Shipment fields to search against. */
    fields?: SayariAnalyticsApi.ShipmentField[];
    /** Filters to be applied to search query to limit the result-set. */
    filter?: SayariAnalyticsApi.TradeFilterList;
    /** Whether or not to return search facets in results giving counts by field. Defaults to false. */
    facets?: boolean;
    /** Set to true to enable full elasticsearch query string syntax which allows for fielded search and more complex operators. Note that the syntax is more strict and can result in empty result-sets. Defaults to false. */
    advanced?: boolean;
}
