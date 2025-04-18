/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";

export const MethodNotAllowedResponse: core.serialization.ObjectSchema<
    serializers.MethodNotAllowedResponse.Raw,
    Sayari.MethodNotAllowedResponse
> = core.serialization.object({
    status: core.serialization.number(),
    message: core.serialization.list(core.serialization.string()),
    success: core.serialization.boolean(),
});

export declare namespace MethodNotAllowedResponse {
    export interface Raw {
        status: number;
        message: string[];
        success: boolean;
    }
}
