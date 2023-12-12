/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";
export declare const EntityDetails: core.serialization.ObjectSchema<serializers.EntityDetails.Raw, SayariAnalyticsApi.EntityDetails>;
export declare namespace EntityDetails {
    interface Raw extends serializers.EmbeddedEntity.Raw {
        registration_date?: string | null;
        translated_label?: string | null;
        hs_code?: string | null;
        shipment_arrival?: string | null;
        shipment_departure?: string | null;
        company_type?: string | null;
        latest_status?: serializers.Status.Raw | null;
        risk: Record<serializers.Risk.Raw, serializers.RiskData.Raw | null | undefined>;
        attributes?: serializers.AttributeDetails.Raw | null;
        relationships?: serializers.EntityRelationships.Raw | null;
        possibly_same_as?: serializers.PossiblySameAs.Raw | null;
        referenced_by?: serializers.ReferencedBy.Raw | null;
        matches?: Record<string, string[]> | null;
    }
}
