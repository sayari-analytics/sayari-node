/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api/index";
import * as core from "../../../../core";
import { RiskValue } from "./RiskValue";
import { RiskLevel } from "./RiskLevel";

export const RiskData: core.serialization.ObjectSchema<serializers.RiskData.Raw, SayariAnalyticsApi.RiskData> =
    core.serialization.object({
        value: RiskValue,
        metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
        level: RiskLevel,
    });

export declare namespace RiskData {
    interface Raw {
        value: RiskValue.Raw;
        metadata: Record<string, unknown>;
        level: RiskLevel.Raw;
    }
}
