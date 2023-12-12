/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as SayariAnalyticsApi from "../../../../index";
export interface Resolution {
    /**
     * Entity name
     */
    name?: string | string[];
    /**
     * Entity identifier
     */
    identifier?: string | string[];
    /**
     * Entity country - must be ISO (3166) Trigram i.e., `USA`
     */
    country?: SayariAnalyticsApi.Country | SayariAnalyticsApi.Country[];
    /**
     * Entity address
     */
    address?: string | string[];
    /**
     * Entity date of birth
     */
    dateOfBirth?: string | string[];
    /**
     * Entity contact
     */
    contact?: string | string[];
    /**
     * Entity type. If multiple values are passed for any field, the endpoint will match entities with ANY of the values.
     */
    type?: SayariAnalyticsApi.Entities | SayariAnalyticsApi.Entities[];
}
