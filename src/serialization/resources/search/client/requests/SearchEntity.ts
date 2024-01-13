/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as SayariAnalyticsApi from "../../../../../api";
import * as core from "../../../../../core";

export const SearchEntity: core.serialization.Schema<
    serializers.SearchEntity.Raw,
    Omit<SayariAnalyticsApi.SearchEntity, "limit" | "offset">
> = core.serialization.object({
    q: core.serialization.string(),
    fields: core.serialization
        .list(core.serialization.lazy(async () => (await import("../../../..")).SearchField))
        .optional(),
    filter: core.serialization.lazyObject(async () => (await import("../../../..")).FilterList).optional(),
    facets: core.serialization.boolean().optional(),
    geoFacets: core.serialization.property("geo_facets", core.serialization.boolean().optional()),
    advanced: core.serialization.boolean().optional(),
});

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
