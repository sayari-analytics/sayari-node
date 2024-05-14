/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api/index";
import * as core from "../../../../core";

export const Gender: core.serialization.Schema<serializers.Gender.Raw, SayariAnalyticsApi.Gender> =
    core.serialization.enum_(["male", "female", "other"]);

export declare namespace Gender {
    type Raw = "male" | "female" | "other";
}
