/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as SayariAnalyticsApi from "../../../index";
export interface ShipmentSearchResults extends SayariAnalyticsApi.PaginatedResponse {
    offset: number;
    next: boolean;
    data: SayariAnalyticsApi.ShipmentHits;
}
