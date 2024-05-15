/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api/index";
import * as core from "../../../../core";

export const RoleMemberType: core.serialization.Schema<
    serializers.RoleMemberType.Raw,
    SayariAnalyticsApi.RoleMemberType
> = core.serialization.enum_(["user", "group"]);

export declare namespace RoleMemberType {
    type Raw = "user" | "group";
}
