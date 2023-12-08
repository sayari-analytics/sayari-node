/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../..";
import * as SayariAnalyticsApi from "../../../../../api";
import * as core from "../../../../../core";
export declare const SearchEntity: core.serialization.Schema<serializers.SearchEntity.Raw, Omit<SayariAnalyticsApi.SearchEntity, "limit" | "offset">>;
export declare namespace SearchEntity {
    interface Raw {
        q: string;
        fields?: serializers.SearchField.Raw[] | null;
        filter?: serializers.FilterList.Raw | null;
        facets?: boolean | null;
        geo_facets?: boolean | null;
        advanced?: boolean | null;
    }
}
