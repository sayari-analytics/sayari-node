/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";

export const SortField: core.serialization.Schema<serializers.SortField.Raw, Sayari.SortField> =
    core.serialization.enum_([
        "created",
        "-created",
        "saved_resource_id",
        "-saved_resource_id",
        "entity_id",
        "-entity_id",
        "country",
        "-country",
        "latest_status",
        "-latest_status",
        "label",
        "-label",
        "custom_{field name}",
        "-custom_{field name}",
        "receiver_of",
        "-receiver_of",
        "shipper_of",
        "-shipper_of",
        "upstream_entities",
        "-upstream_entities",
    ]);

export declare namespace SortField {
    export type Raw =
        | "created"
        | "-created"
        | "saved_resource_id"
        | "-saved_resource_id"
        | "entity_id"
        | "-entity_id"
        | "country"
        | "-country"
        | "latest_status"
        | "-latest_status"
        | "label"
        | "-label"
        | "custom_{field name}"
        | "-custom_{field name}"
        | "receiver_of"
        | "-receiver_of"
        | "shipper_of"
        | "-shipper_of"
        | "upstream_entities"
        | "-upstream_entities";
}
