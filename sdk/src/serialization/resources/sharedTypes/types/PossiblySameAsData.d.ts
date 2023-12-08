/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";
export declare const PossiblySameAsData: core.serialization.ObjectSchema<serializers.PossiblySameAsData.Raw, SayariAnalyticsApi.PossiblySameAsData>;
export declare namespace PossiblySameAsData {
    interface Raw {
        editable?: boolean | null;
        entity: serializers.PsaEntity.Raw;
        matches: Record<string, serializers.PossiblySameAsMatch.Raw[]>;
    }
}
