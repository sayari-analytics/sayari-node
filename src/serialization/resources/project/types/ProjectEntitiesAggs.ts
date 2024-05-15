/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api/index";
import * as core from "../../../../core";
import { BucketAgg } from "./BucketAgg";
import { HsCodeAgg } from "./HsCodeAgg";

export const ProjectEntitiesAggs: core.serialization.ObjectSchema<
    serializers.ProjectEntitiesAggs.Raw,
    SayariAnalyticsApi.ProjectEntitiesAggs
> = core.serialization.object({
    hitCount: core.serialization.property("hit_count", core.serialization.list(BucketAgg).optional()),
    country: core.serialization.list(BucketAgg).optional(),
    upstreamCountry: core.serialization.property("upstream_country", core.serialization.list(BucketAgg).optional()),
    risk: core.serialization.list(BucketAgg).optional(),
    upstreamRisk: core.serialization.property("upstream_risk", core.serialization.list(BucketAgg).optional()),
    source: core.serialization.list(BucketAgg).optional(),
    businessPurpose: core.serialization.property("business_purpose", core.serialization.list(BucketAgg).optional()),
    tagIds: core.serialization.property("tag_ids", core.serialization.list(BucketAgg).optional()),
    caseStatuses: core.serialization.property("case_statuses", core.serialization.list(BucketAgg).optional()),
    shipmentCounts: core.serialization.property("shipment_counts", core.serialization.list(BucketAgg).optional()),
    shippedHsCodes: core.serialization.property("shipped_hs_codes", HsCodeAgg.optional()),
    receivedHsCodes: core.serialization.property("received_hs_codes", HsCodeAgg.optional()),
    matchResults: core.serialization.property("match_results", core.serialization.list(BucketAgg).optional()),
    location: core.serialization.list(BucketAgg).optional(),
    sourceType: core.serialization.property("source_type", core.serialization.list(BucketAgg).optional()),
    region: core.serialization.list(BucketAgg).optional(),
});

export declare namespace ProjectEntitiesAggs {
    interface Raw {
        hit_count?: BucketAgg.Raw[] | null;
        country?: BucketAgg.Raw[] | null;
        upstream_country?: BucketAgg.Raw[] | null;
        risk?: BucketAgg.Raw[] | null;
        upstream_risk?: BucketAgg.Raw[] | null;
        source?: BucketAgg.Raw[] | null;
        business_purpose?: BucketAgg.Raw[] | null;
        tag_ids?: BucketAgg.Raw[] | null;
        case_statuses?: BucketAgg.Raw[] | null;
        shipment_counts?: BucketAgg.Raw[] | null;
        shipped_hs_codes?: HsCodeAgg.Raw | null;
        received_hs_codes?: HsCodeAgg.Raw | null;
        match_results?: BucketAgg.Raw[] | null;
        location?: BucketAgg.Raw[] | null;
        source_type?: BucketAgg.Raw[] | null;
        region?: BucketAgg.Raw[] | null;
    }
}