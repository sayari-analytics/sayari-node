/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";

export const HsCodeInfo: core.serialization.ObjectSchema<serializers.HsCodeInfo.Raw, Sayari.HsCodeInfo> =
    core.serialization.object({
        code: core.serialization.string(),
        description: core.serialization.string(),
        imputed: core.serialization.boolean().optional(),
    });

export declare namespace HsCodeInfo {
    export interface Raw {
        code: string;
        description: string;
        imputed?: boolean | null;
    }
}
