/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { EntityResponseData } from "./EntityResponseData";

export const SaveEntityResponse: core.serialization.ObjectSchema<
    serializers.SaveEntityResponse.Raw,
    Sayari.SaveEntityResponse
> = core.serialization.object({
    data: EntityResponseData,
});

export declare namespace SaveEntityResponse {
    export interface Raw {
        data: EntityResponseData.Raw;
    }
}
