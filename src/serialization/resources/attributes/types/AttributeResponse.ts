/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { AttributeResponseData } from "./AttributeResponseData";

export const AttributeResponse: core.serialization.ObjectSchema<
    serializers.AttributeResponse.Raw,
    Sayari.AttributeResponse
> = core.serialization.object({
    data: AttributeResponseData,
});

export declare namespace AttributeResponse {
    export interface Raw {
        data: AttributeResponseData.Raw;
    }
}
