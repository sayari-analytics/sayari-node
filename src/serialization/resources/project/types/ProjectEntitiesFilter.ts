/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";

export const ProjectEntitiesFilter: core.serialization.Schema<
    serializers.ProjectEntitiesFilter.Raw,
    Sayari.ProjectEntitiesFilter
> = core.serialization.string();

export declare namespace ProjectEntitiesFilter {
    type Raw = string;
}
