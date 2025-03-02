/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { BothIdentifierTypes } from "../../generatedTypes/types/BothIdentifierTypes";

export const ShipmentIdentifier: core.serialization.ObjectSchema<
    serializers.ShipmentIdentifier.Raw,
    Sayari.ShipmentIdentifier
> = core.serialization.object({
    value: core.serialization.string(),
    type: BothIdentifierTypes,
});

export declare namespace ShipmentIdentifier {
    export interface Raw {
        value: string;
        type: BothIdentifierTypes.Raw;
    }
}
