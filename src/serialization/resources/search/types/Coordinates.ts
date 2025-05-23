/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";

export const Coordinates: core.serialization.ObjectSchema<serializers.Coordinates.Raw, Sayari.Coordinates> =
    core.serialization.object({
        lat: core.serialization.number().optional(),
        lng: core.serialization.number().optional(),
        address: core.serialization.string(),
    });

export declare namespace Coordinates {
    export interface Raw {
        lat?: number | null;
        lng?: number | null;
        address: string;
    }
}
