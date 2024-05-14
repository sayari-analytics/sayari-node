/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api/index";
import * as core from "../../../../core";

export const HsCodeInfo: core.serialization.ObjectSchema<serializers.HsCodeInfo.Raw, SayariAnalyticsApi.HsCodeInfo> =
    core.serialization.object({
        code: core.serialization.string(),
        description: core.serialization.string(),
    });

export declare namespace HsCodeInfo {
    interface Raw {
        code: string;
        description: string;
    }
}
