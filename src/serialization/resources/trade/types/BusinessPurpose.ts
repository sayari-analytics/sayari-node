/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";

export const BusinessPurpose: core.serialization.ObjectSchema<serializers.BusinessPurpose.Raw, Sayari.BusinessPurpose> =
    core.serialization.object({
        value: core.serialization.string().optional(),
        code: core.serialization.string().optional(),
    });

export declare namespace BusinessPurpose {
    interface Raw {
        value?: string | null;
        code?: string | null;
    }
}
