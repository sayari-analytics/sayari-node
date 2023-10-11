/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";
export declare const TraversalResponse: core.serialization.ObjectSchema<serializers.TraversalResponse.Raw, SayariAnalyticsApi.TraversalResponse>;
export declare namespace TraversalResponse {
    interface Raw {
        min_depth: number;
        max_depth: number;
        relationships: string[];
        countries: string[];
        types: string[];
        psa: boolean;
        offset: number;
        limit: number;
        next: boolean;
        data: serializers.TraversalData.Raw[];
        explored_count: number;
    }
}
