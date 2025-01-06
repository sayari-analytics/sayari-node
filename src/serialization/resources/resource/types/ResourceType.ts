/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";

export const ResourceType: core.serialization.Schema<serializers.ResourceType.Raw, Sayari.ResourceType> =
    core.serialization.enum_(["entity"]);

export declare namespace ResourceType {
    export type Raw = "entity";
}
