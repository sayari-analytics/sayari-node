/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";
export declare const ShortestPathData: core.serialization.ObjectSchema<serializers.ShortestPathData.Raw, SayariAnalyticsApi.ShortestPathData>;
export declare namespace ShortestPathData {
    interface Raw {
        target: serializers.EntityDetails.Raw;
        path: serializers.TraversalPath.Raw[];
    }
}
