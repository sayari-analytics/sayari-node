/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";
export declare const PossiblySameAsMatch: core.serialization.ObjectSchema<serializers.PossiblySameAsMatch.Raw, SayariAnalyticsApi.PossiblySameAsMatch>;
export declare namespace PossiblySameAsMatch {
    interface Raw {
        source: string;
        target: string;
    }
}