/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";
export declare const RecordDetails: core.serialization.ObjectSchema<serializers.RecordDetails.Raw, SayariAnalyticsApi.RecordDetails>;
export declare namespace RecordDetails {
    interface Raw {
        id: serializers.RecordId.Raw;
        label: string;
        source: serializers.SourceId.Raw;
        publication_date?: string | null;
        acquisition_date: string;
        references_count: number;
        record_url: string;
        source_url?: string | null;
        matches?: Record<string, string[]> | null;
    }
}