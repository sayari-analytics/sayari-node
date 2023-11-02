/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as SayariAnalyticsApi from "../../..";
export interface TraversalResponse {
    minDepth: number;
    maxDepth: number;
    relationships: SayariAnalyticsApi.Relationships[];
    countries: SayariAnalyticsApi.Country[];
    types: string[];
    psa: boolean;
    offset: number;
    limit: number;
    next: boolean;
    data: SayariAnalyticsApi.TraversalData[];
    exploredCount: number;
}
