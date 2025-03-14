/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";

export const ShipmentDeparture: core.serialization.Schema<serializers.ShipmentDeparture.Raw, Sayari.ShipmentDeparture> =
    core.serialization.string();

export declare namespace ShipmentDeparture {
    export type Raw = string;
}
