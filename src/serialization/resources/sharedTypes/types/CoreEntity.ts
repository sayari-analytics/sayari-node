/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { Entities } from "../../generatedTypes/types/Entities";
import { CompanyType } from "./CompanyType";
import { EntityRegistrationDate } from "./EntityRegistrationDate";
import { Status } from "./Status";
import { ShipmentArrival } from "./ShipmentArrival";
import { ShipmentDeparture } from "./ShipmentDeparture";
import { EntityHsCode } from "./EntityHsCode";
import { EntityTranslatedLabel } from "./EntityTranslatedLabel";
import { Identifier } from "./Identifier";
import { Country } from "../../generatedTypes/types/Country";
import { RelationshipCount } from "./RelationshipCount";
import { SourceCountInfo } from "./SourceCountInfo";
import { Psa } from "./Psa";
import { EntityRisk } from "./EntityRisk";
import { EntitySummary } from "./EntitySummary";
import { Relationships } from "../../generatedTypes/types/Relationships";
import { RiskData } from "./RiskData";
import { Risk } from "../../generatedTypes/types/Risk";

export const CoreEntity: core.serialization.ObjectSchema<serializers.CoreEntity.Raw, Sayari.CoreEntity> =
    core.serialization
        .object({
            id: core.serialization.string(),
            owner: core.serialization.string().optional(),
            type: Entities,
            label: core.serialization.string(),
            names: core.serialization.list(core.serialization.string()).optional(),
            companyType: core.serialization.property("company_type", CompanyType.optional()),
            registrationDate: core.serialization.property("registration_date", EntityRegistrationDate.optional()),
            latestStatus: core.serialization.property("latest_status", Status.optional()),
            shipmentArrival: core.serialization.property("shipment_arrival", ShipmentArrival.optional()),
            shipmentDeparture: core.serialization.property("shipment_departure", ShipmentDeparture.optional()),
            hsCode: core.serialization.property("hs_code", EntityHsCode.optional()),
            translatedLabel: core.serialization.property("translated_label", EntityTranslatedLabel.optional()),
            shortLabel: core.serialization.property("short_label", core.serialization.string().optional()),
            identifiers: core.serialization.list(Identifier),
            addresses: core.serialization.list(core.serialization.string()).optional(),
            dateOfBirth: core.serialization.property("date_of_birth", core.serialization.string().optional()),
            countries: core.serialization.list(Country),
            closed: core.serialization.boolean().optional(),
            relatedEntitiesCount: core.serialization.property("related_entities_count", core.serialization.number()),
            userRelatedEntitiesCount: core.serialization.property(
                "user_related_entities_count",
                core.serialization.number()
            ),
            relationshipCounts: core.serialization.property("relationship_counts", RelationshipCount),
            userRelationshipCounts: core.serialization.property("user_relationship_counts", RelationshipCount),
            attributeCounts: core.serialization.property("attribute_counts", core.serialization.unknown()),
            userAttributeCounts: core.serialization.property("user_attribute_counts", core.serialization.unknown()),
            tradeCount: core.serialization.property(
                "trade_count",
                core.serialization.record(core.serialization.string(), core.serialization.number())
            ),
            recordCount: core.serialization.property("record_count", core.serialization.number()),
            userRecordCount: core.serialization.property("user_record_count", core.serialization.number()),
            sourceCounts: core.serialization.property(
                "source_counts",
                core.serialization.record(core.serialization.string(), SourceCountInfo)
            ),
            psa: Psa.optional(),
            risk: EntityRisk,
            created: core.serialization.string().optional(),
            updated: core.serialization.string().optional(),
            editedBy: core.serialization.property("edited_by", core.serialization.string().optional()),
            editable: core.serialization.boolean().optional(),
            upload: core.serialization.string().optional(),
        })
        .extend(EntitySummary);

export declare namespace CoreEntity {
    interface Raw extends EntitySummary.Raw {
        id: string;
        owner?: string | null;
        type: Entities.Raw;
        label: string;
        names?: string[] | null;
        company_type?: CompanyType.Raw | null;
        registration_date?: EntityRegistrationDate.Raw | null;
        latest_status?: Status.Raw | null;
        shipment_arrival?: ShipmentArrival.Raw | null;
        shipment_departure?: ShipmentDeparture.Raw | null;
        hs_code?: EntityHsCode.Raw | null;
        translated_label?: EntityTranslatedLabel.Raw | null;
        short_label?: string | null;
        identifiers: Identifier.Raw[];
        addresses?: string[] | null;
        date_of_birth?: string | null;
        countries: Country.Raw[];
        closed?: boolean | null;
        related_entities_count: number;
        user_related_entities_count: number;
        relationship_counts: RelationshipCount.Raw;
        user_relationship_counts: RelationshipCount.Raw;
        attribute_counts?: unknown;
        user_attribute_counts?: unknown;
        trade_count: Record<string, number>;
        record_count: number;
        user_record_count: number;
        source_counts: Record<string, SourceCountInfo.Raw>;
        psa?: Psa.Raw | null;
        risk: EntityRisk.Raw;
        created?: string | null;
        updated?: string | null;
        edited_by?: string | null;
        editable?: boolean | null;
        upload?: string | null;
    }
}
