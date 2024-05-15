/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api/index";
import * as core from "../../../../core";
import { RiskIntelligenceProperties } from "./RiskIntelligenceProperties";
import { AttributeData } from "./AttributeData";

export const RiskIntelligenceData: core.serialization.ObjectSchema<
    serializers.RiskIntelligenceData.Raw,
    SayariAnalyticsApi.RiskIntelligenceData
> = core.serialization
    .object({
        properties: RiskIntelligenceProperties,
    })
    .extend(AttributeData);

export declare namespace RiskIntelligenceData {
    interface Raw extends AttributeData.Raw {
        properties: RiskIntelligenceProperties.Raw;
    }
}
