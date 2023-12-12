/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";
export declare const EmbeddedEntity: core.serialization.ObjectSchema<serializers.EmbeddedEntity.Raw, SayariAnalyticsApi.EmbeddedEntity>;
export declare namespace EmbeddedEntity {
    interface Raw {
        id: serializers.EntityId.Raw;
        label: string;
        degree: number;
        closed: boolean;
        entity_url: string;
        pep: boolean;
        psa_count: number;
        sanctioned: boolean;
        type: serializers.Entities.Raw;
        identifiers: serializers.Identifier.Raw[];
        countries: string[];
        psa_sanctioned?: string | null;
        source_count: serializers.SourceCount.Raw;
        addresses: string[];
        date_of_birth?: string | null;
        relationship_count: Record<serializers.Relationships.Raw, number | null | undefined>;
    }
}