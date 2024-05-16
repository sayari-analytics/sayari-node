/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Sayari from "../../../index";

/**
 * The attributes fields common to most entities.
 */
export interface CoreEntity extends Sayari.EntitySummary {
    /** Unique identifier of the entity */
    id: string;
    /** User or group that created the entity, if applicable. Undefined for Sayari entities. */
    owner?: string;
    /** The [entity type](/sayari-library/ontology/entities). */
    type: Sayari.Entities;
    /** Display name of the entity */
    label: string;
    /** Name variations of the entity. */
    names?: string[];
    companyType?: Sayari.CompanyType;
    registrationDate?: Sayari.EntityRegistrationDate;
    latestStatus?: Sayari.Status;
    shipmentArrival?: Sayari.ShipmentArrival;
    shipmentDeparture?: Sayari.ShipmentDeparture;
    hsCode?: Sayari.EntityHsCode;
    translatedLabel?: Sayari.EntityTranslatedLabel;
    shortLabel?: string;
    identifiers: Sayari.Identifier[];
    /** List of physical addresses associated with the entity. See more [here](/sayari-library/ontology/attributes#address) */
    addresses?: string[];
    /** Birth date of a person. See more [here](/sayari-library/ontology/attributes#date-of-birth) */
    dateOfBirth?: string;
    /** Entity [country](/sayari-library/ontology/enumerated-types#country) */
    countries: Sayari.Country[];
    /** True if the entity existed in the past but not at the present time, otherwise false. Always false for data curation. */
    closed?: boolean;
    relatedEntitiesCount: number;
    userRelatedEntitiesCount: number;
    relationshipCounts: Sayari.RelationshipCount;
    userRelationshipCounts: Sayari.RelationshipCount;
    attributeCounts?: unknown;
    userAttributeCounts?: unknown;
    tradeCount: Record<string, number>;
    recordCount: number;
    userRecordCount: number;
    /** Number of records associated with the entity, grouped by source. */
    sourceCounts: Record<string, Sayari.SourceCountInfo>;
    psa?: Sayari.Psa;
    /** [Risk factors](/sayari-library/ontology/risk-factors) associated with the entity. */
    risk: Sayari.EntityRisk;
    created?: string;
    updated?: string;
    editedBy?: string;
    editable?: boolean;
    upload?: string;
}
