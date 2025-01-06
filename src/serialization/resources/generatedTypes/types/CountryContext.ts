/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";

export const CountryContext: core.serialization.Schema<serializers.CountryContext.Raw, Sayari.CountryContext> =
    core.serialization.enum_([
        "activity_in",
        "address",
        "citizenship",
        "domicile",
        "incorporation",
        "mentioned_in",
        "nationality",
        "product_origin",
        "residence",
        "shipment_arrival",
        "shipment_departure",
        "shipment_transit",
        "vessel_flag",
    ]);

export declare namespace CountryContext {
    export type Raw =
        | "activity_in"
        | "address"
        | "citizenship"
        | "domicile"
        | "incorporation"
        | "mentioned_in"
        | "nationality"
        | "product_origin"
        | "residence"
        | "shipment_arrival"
        | "shipment_departure"
        | "shipment_transit"
        | "vessel_flag";
}
