/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { Risk } from "../../generatedTypes/types/Risk";
import { Country } from "../../generatedTypes/types/Country";

export const ProjectEntityUpstream: core.serialization.ObjectSchema<
    serializers.ProjectEntityUpstream.Raw,
    Sayari.ProjectEntityUpstream
> = core.serialization.object({
    risk: core.serialization.list(Risk),
    countries: core.serialization.list(Country),
    entities: core.serialization.number(),
    matchHasUpstream: core.serialization.property(
        "match_has_upstream",
        core.serialization.record(core.serialization.string(), core.serialization.boolean()),
    ),
    matchProducts: core.serialization.property(
        "match_products",
        core.serialization.record(core.serialization.string(), core.serialization.list(core.serialization.string())),
    ),
});

export declare namespace ProjectEntityUpstream {
    export interface Raw {
        risk: Risk.Raw[];
        countries: Country.Raw[];
        entities: number;
        match_has_upstream: Record<string, boolean>;
        match_products: Record<string, string[]>;
    }
}
