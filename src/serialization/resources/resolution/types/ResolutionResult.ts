/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { Entities } from "../../generatedTypes/types/Entities";
import { Identifier } from "../../sharedTypes/types/Identifier";
import { Country } from "../../generatedTypes/types/Country";
import { MatchExplanation } from "./MatchExplanation";
import { MatchStrength } from "./MatchStrength";

export const ResolutionResult: core.serialization.ObjectSchema<
    serializers.ResolutionResult.Raw,
    Sayari.ResolutionResult
> = core.serialization.object({
    profile: core.serialization.string(),
    score: core.serialization.number(),
    entityId: core.serialization.property("entity_id", core.serialization.string()),
    label: core.serialization.string(),
    type: Entities,
    identifiers: core.serialization.list(Identifier),
    psaId: core.serialization.property("psa_id", core.serialization.number().optional()),
    addresses: core.serialization.list(core.serialization.string()),
    countries: core.serialization.list(Country),
    sources: core.serialization.list(core.serialization.string()),
    typedMatchedQueries: core.serialization.property(
        "typed_matched_queries",
        core.serialization.list(core.serialization.string()),
    ),
    matchedQueries: core.serialization.property(
        "matched_queries",
        core.serialization.list(core.serialization.string()),
    ),
    highlight: core.serialization.record(
        core.serialization.string(),
        core.serialization.list(core.serialization.string()),
    ),
    explanation: core.serialization.record(core.serialization.string(), core.serialization.list(MatchExplanation)),
    matchStrength: core.serialization.property("match_strength", MatchStrength),
});

export declare namespace ResolutionResult {
    export interface Raw {
        profile: string;
        score: number;
        entity_id: string;
        label: string;
        type: Entities.Raw;
        identifiers: Identifier.Raw[];
        psa_id?: number | null;
        addresses: string[];
        countries: Country.Raw[];
        sources: string[];
        typed_matched_queries: string[];
        matched_queries: string[];
        highlight: Record<string, string[]>;
        explanation: Record<string, MatchExplanation.Raw[]>;
        match_strength: MatchStrength.Raw;
    }
}
