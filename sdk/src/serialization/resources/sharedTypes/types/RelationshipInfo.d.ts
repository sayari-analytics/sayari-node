/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";
export declare const RelationshipInfo: core.serialization.ObjectSchema<serializers.RelationshipInfo.Raw, SayariAnalyticsApi.RelationshipInfo>;
export declare namespace RelationshipInfo {
    interface Raw {
        record: string;
        attributes: Record<serializers.Attributes.Raw, serializers.RelationshipAttributeValue.Raw[] | null | undefined>;
        from_date?: string | null;
        acquisition_date: string;
        publication_date?: string | null;
    }
}
