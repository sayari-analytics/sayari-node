/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as SayariAnalyticsApi from "../../../index";
/**
 * An ID number that uniquely identifies one entity when value and type are taken into account.
 */
export interface IdentifierInfo extends SayariAnalyticsApi.PaginatedResponse {
    data: SayariAnalyticsApi.IdentifierData[];
}
