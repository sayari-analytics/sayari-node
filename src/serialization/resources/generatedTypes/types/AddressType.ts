/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";

export const AddressType: core.serialization.Schema<serializers.AddressType.Raw, Sayari.AddressType> =
    core.serialization.enum_(["arrival", "departure", "mailing", "physical", "registered", "business"]);

export declare namespace AddressType {
    type Raw = "arrival" | "departure" | "mailing" | "physical" | "registered" | "business";
}
