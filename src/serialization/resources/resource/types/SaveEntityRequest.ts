/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { ResourceType } from "./ResourceType";

export const SaveEntityRequest: core.serialization.ObjectSchema<
    serializers.SaveEntityRequest.Raw,
    Sayari.SaveEntityRequest
> = core.serialization.object({
    type: ResourceType,
    project: core.serialization.string(),
    entityId: core.serialization.property("entity_id", core.serialization.string()),
    customFields: core.serialization.property("custom_fields", core.serialization.unknown()),
});

export declare namespace SaveEntityRequest {
    export interface Raw {
        type: ResourceType.Raw;
        project: string;
        entity_id: string;
        custom_fields?: unknown;
    }
}
