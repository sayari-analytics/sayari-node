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
});

export declare namespace ProjectEntityUpstream {
    interface Raw {
        risk: Risk.Raw[];
        countries: Country.Raw[];
        entities: number;
    }
}
