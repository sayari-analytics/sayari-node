/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";

export const EventInfo: core.serialization.Schema<serializers.EventInfo.Raw, SayariAnalyticsApi.EventInfo> =
    core.serialization.record(core.serialization.string(), core.serialization.unknown());

export declare namespace EventInfo {
    type Raw = Record<string, unknown>;
}
