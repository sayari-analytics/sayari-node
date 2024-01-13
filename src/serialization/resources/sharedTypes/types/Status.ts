/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";

export const Status: core.serialization.ObjectSchema<serializers.Status.Raw, SayariAnalyticsApi.Status> =
    core.serialization.object({
        status: core.serialization.string(),
        date: core.serialization.string().optional(),
    });

export declare namespace Status {
    interface Raw {
        status: string;
        date?: string | null;
    }
}
