/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { PaginatedResponse } from "../../baseTypes/types/PaginatedResponse";

export const EntityRelationships: core.serialization.ObjectSchema<
    serializers.EntityRelationships.Raw,
    Sayari.EntityRelationships
> = core.serialization
    .object({
        next: core.serialization.unknown().optional(),
        data: core.serialization.list(core.serialization.lazyObject(() => serializers.RelationshipData)),
    })
    .extend(PaginatedResponse);

export declare namespace EntityRelationships {
    export interface Raw extends PaginatedResponse.Raw {
        next?: unknown | null;
        data: serializers.RelationshipData.Raw[];
    }
}
