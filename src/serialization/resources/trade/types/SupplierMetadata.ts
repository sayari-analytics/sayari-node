/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { HsCode } from "./HsCode";

export const SupplierMetadata: core.serialization.ObjectSchema<
    serializers.SupplierMetadata.Raw,
    Sayari.SupplierMetadata
> = core.serialization.object({
    latestShipmentDate: core.serialization.string().optional(),
    shipments: core.serialization.number(),
    hsCodes: core.serialization.list(HsCode),
});

export declare namespace SupplierMetadata {
    export interface Raw {
        latestShipmentDate?: string | null;
        shipments: number;
        hsCodes: HsCode.Raw[];
    }
}
