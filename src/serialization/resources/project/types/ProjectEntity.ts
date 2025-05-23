/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { TradeCount } from "./TradeCount";
import { ProjectEntityUpstream } from "./ProjectEntityUpstream";
import { CoreEntity } from "../../sharedTypes/types/CoreEntity";
import { PsaSummary } from "./PsaSummary";

export const ProjectEntity: core.serialization.ObjectSchema<serializers.ProjectEntity.Raw, Sayari.ProjectEntity> =
    core.serialization.object({
        id: core.serialization.string(),
        project: core.serialization.string(),
        label: core.serialization.string(),
        created: core.serialization.string(),
        updated: core.serialization.string(),
        updatedBy: core.serialization.property("updated_by", core.serialization.string()),
        version: core.serialization.number(),
        type: core.serialization.stringLiteral("entity"),
        entityId: core.serialization.property("entity_id", core.serialization.string()),
        tagIds: core.serialization.property("tag_ids", core.serialization.list(core.serialization.string())),
        caseStatus: core.serialization.property("case_status", core.serialization.string()),
        customFields: core.serialization.property("custom_fields", core.serialization.unknown().optional()),
        matchStrength: core.serialization.property("match_strength", core.serialization.unknown()),
        shippedHsCodes: core.serialization.property(
            "shipped_hs_codes",
            core.serialization.list(core.serialization.string()),
        ),
        receivedHsCodes: core.serialization.property(
            "received_hs_codes",
            core.serialization.list(core.serialization.string()),
        ),
        combinedHsCodes: core.serialization.property(
            "combined_hs_codes",
            core.serialization.list(core.serialization.string()),
        ),
        tradeCountInclMg: core.serialization.property("trade_count_incl_mg", TradeCount),
        upstream: ProjectEntityUpstream,
        summary: CoreEntity,
        psa: PsaSummary.optional(),
    });

export declare namespace ProjectEntity {
    export interface Raw {
        id: string;
        project: string;
        label: string;
        created: string;
        updated: string;
        updated_by: string;
        version: number;
        type: "entity";
        entity_id: string;
        tag_ids: string[];
        case_status: string;
        custom_fields?: unknown | null;
        match_strength?: unknown;
        shipped_hs_codes: string[];
        received_hs_codes: string[];
        combined_hs_codes: string[];
        trade_count_incl_mg: TradeCount.Raw;
        upstream: ProjectEntityUpstream.Raw;
        summary: CoreEntity.Raw;
        psa?: PsaSummary.Raw | null;
    }
}
