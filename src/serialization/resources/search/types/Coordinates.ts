/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";

export const Coordinates: core.serialization.ObjectSchema<serializers.Coordinates.Raw, SayariAnalyticsApi.Coordinates> =
    core.serialization.object({
        lat: core.serialization.number(),
        lng: core.serialization.number(),
        address: core.serialization.string(),
    });

export declare namespace Coordinates {
    interface Raw {
        lat: number;
        lng: number;
        address: string;
    }
}
