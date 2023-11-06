/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as SayariAnalyticsApi from "../../..";
/**
 * A type of legal entity in a given jurisdiction (e.g. 'LLC,' 'Sociedad Anonima,' 'Private Company Limited by Shares')
 */
export interface CompanyTypeInfo extends SayariAnalyticsApi.PaginatedResponse {
    data: SayariAnalyticsApi.CompanyTypeData[];
}