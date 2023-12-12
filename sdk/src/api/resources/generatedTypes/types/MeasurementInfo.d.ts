/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as SayariAnalyticsApi from "../../../index";
/**
 * A numerical representation in a standard unit of some dimension of an entity, for example, weight
 */
export interface MeasurementInfo extends SayariAnalyticsApi.PaginatedResponse {
    data: SayariAnalyticsApi.MeasurementData[];
}
