/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { Coordinates } from "./Coordinates";
import { EntityMatches } from "../../sharedTypes/types/EntityMatches";

export const SearchResults: core.serialization.ObjectSchema<serializers.SearchResults.Raw, Sayari.SearchResults> =
    core.serialization
        .object({
            coordinates: core.serialization.list(Coordinates),
            matches: EntityMatches,
        })
        .extend(core.serialization.lazyObject(() => serializers.EntityDetails));

export declare namespace SearchResults {
    export interface Raw extends serializers.EntityDetails.Raw {
        coordinates: Coordinates.Raw[];
        matches: EntityMatches.Raw;
    }
}
