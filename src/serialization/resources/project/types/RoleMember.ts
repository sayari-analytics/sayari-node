/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { RoleMemberType } from "./RoleMemberType";
import { Role } from "./Role";

export const RoleMember: core.serialization.ObjectSchema<serializers.RoleMember.Raw, Sayari.RoleMember> =
    core.serialization.object({
        id: core.serialization.string(),
        type: RoleMemberType,
        role: Role,
        created: core.serialization.string(),
        updated: core.serialization.string(),
    });

export declare namespace RoleMember {
    export interface Raw {
        id: string;
        type: RoleMemberType.Raw;
        role: Role.Raw;
        created: string;
        updated: string;
    }
}
