/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";

export const UserInfo: core.serialization.ObjectSchema<serializers.UserInfo.Raw, Sayari.UserInfo> =
    core.serialization.object({
        id: core.serialization.string(),
        groupDisplayNames: core.serialization.string().optional(),
        roles: core.serialization.string().optional(),
    });

export declare namespace UserInfo {
    export interface Raw {
        id: string;
        groupDisplayNames?: string | null;
        roles?: string | null;
    }
}
