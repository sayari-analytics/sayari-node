/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";
export declare const FilterList: core.serialization.ObjectSchema<serializers.FilterList.Raw, SayariAnalyticsApi.FilterList>;
export declare namespace FilterList {
    interface Raw {
        source?: serializers.SourceId.Raw[] | null;
        country?: serializers.Country.Raw[] | null;
        state?: string[] | null;
        city?: string[] | null;
        entity_type?: serializers.Entities.Raw[] | null;
        bounds?: string[] | null;
        risk?: serializers.Tag.Raw[] | null;
    }
}