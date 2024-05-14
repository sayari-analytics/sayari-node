/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api/index";
import * as core from "../../../../core";

export const SortField: core.serialization.Schema<serializers.SortField.Raw, SayariAnalyticsApi.SortField> =
    core.serialization.enum_([
        "+created",
        "-created",
        "+saved_resource_id",
        "-saved_resource_id",
        "+entity_id",
        "-entity_id",
        "+country",
        "-country",
        "+latest_status",
        "-latest_status",
        "+label",
        "-label",
        "+receiver_of",
        "-receiver_of",
        "+shipper_of",
        "-shipper_of",
    ]);

export declare namespace SortField {
    type Raw =
        | "+created"
        | "-created"
        | "+saved_resource_id"
        | "-saved_resource_id"
        | "+entity_id"
        | "-entity_id"
        | "+country"
        | "-country"
        | "+latest_status"
        | "-latest_status"
        | "+label"
        | "-label"
        | "+receiver_of"
        | "-receiver_of"
        | "+shipper_of"
        | "-shipper_of";
}
