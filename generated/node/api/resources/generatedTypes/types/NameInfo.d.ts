/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as SayariAnalyticsApi from "../../..";
/**
 * An entity's name. The value may be straightforward (e.g. 'Acme LLC,' 'John Doe') or context-specific (e.g. 'Jones v. Smith' as a legal matter name).
 */
export interface NameInfo extends SayariAnalyticsApi.PaginatedResponse {
    data: SayariAnalyticsApi.NameData[];
}
