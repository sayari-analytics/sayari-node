/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";
export declare const TraversalData: core.serialization.ObjectSchema<serializers.TraversalData.Raw, SayariAnalyticsApi.TraversalData>;
export declare namespace TraversalData {
    interface Raw {
        source: string;
        target: serializers.EntityDetails.Raw;
        path: serializers.TraversalPath.Raw[];
    }
}
