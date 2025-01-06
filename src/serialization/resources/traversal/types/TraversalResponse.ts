/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { Relationships } from "../../generatedTypes/types/Relationships";
import { Country } from "../../generatedTypes/types/Country";
import { TraversalData } from "./TraversalData";

export const TraversalResponse: core.serialization.ObjectSchema<
    serializers.TraversalResponse.Raw,
    Sayari.TraversalResponse
> = core.serialization.object({
    minDepth: core.serialization.property("min_depth", core.serialization.number()),
    maxDepth: core.serialization.property("max_depth", core.serialization.number()),
    relationships: core.serialization.list(Relationships),
    countries: core.serialization.list(Country),
    types: core.serialization.list(core.serialization.string()),
    name: core.serialization.string(),
    watchlist: core.serialization.boolean(),
    psa: core.serialization.boolean(),
    offset: core.serialization.number(),
    limit: core.serialization.number(),
    next: core.serialization.boolean(),
    partialResults: core.serialization.property("partial_results", core.serialization.boolean()),
    data: core.serialization.list(TraversalData),
    sanctioned: core.serialization.boolean().optional(),
    pep: core.serialization.boolean().optional(),
    exploredCount: core.serialization.property("explored_count", core.serialization.number()),
});

export declare namespace TraversalResponse {
    export interface Raw {
        min_depth: number;
        max_depth: number;
        relationships: Relationships.Raw[];
        countries: Country.Raw[];
        types: string[];
        name: string;
        watchlist: boolean;
        psa: boolean;
        offset: number;
        limit: number;
        next: boolean;
        partial_results: boolean;
        data: TraversalData.Raw[];
        sanctioned?: boolean | null;
        pep?: boolean | null;
        explored_count: number;
    }
}
