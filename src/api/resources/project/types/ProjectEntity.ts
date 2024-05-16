/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Sayari from "../../../index";

export interface ProjectEntity {
    id: string;
    project: string;
    /** Entity label (display name). */
    label: string;
    created: string;
    updated: string;
    updatedBy: string;
    /** Will be 0. */
    version: number;
    type: "entity";
    /** Entity ID. */
    entityId: string;
    tagIds: string[];
    caseStatus: string;
    matchStrength?: unknown;
    /** HS codes shipped by the entity. */
    shippedHsCodes: string[];
    /** HS codes received by the entity. */
    receivedHsCodes: string[];
    /** Counts of sent and received shipments for this entity and its match group. */
    tradeCountInclMg: Sayari.TradeCount;
    upstream: Sayari.ProjectEntityUpstream;
    summary: Sayari.CoreEntity;
    psa?: Sayari.PsaSummary;
}
