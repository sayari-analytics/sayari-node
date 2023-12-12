/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";
export declare const MatchExplanation: core.serialization.ObjectSchema<serializers.MatchExplanation.Raw, SayariAnalyticsApi.MatchExplanation>;
export declare namespace MatchExplanation {
    interface Raw {
        matched?: string | null;
        uploaded?: string | null;
    }
}
