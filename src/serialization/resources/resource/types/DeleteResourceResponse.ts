/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api/index";
import * as core from "../../../../core";
import { EntityResponseData } from "./EntityResponseData";

export const DeleteResourceResponse: core.serialization.ObjectSchema<
    serializers.DeleteResourceResponse.Raw,
    SayariAnalyticsApi.DeleteResourceResponse
> = core.serialization.object({
    data: EntityResponseData,
});

export declare namespace DeleteResourceResponse {
    interface Raw {
        data: EntityResponseData.Raw;
    }
}
