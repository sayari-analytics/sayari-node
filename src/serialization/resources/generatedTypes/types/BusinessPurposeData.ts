/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api/index";
import * as core from "../../../../core";
import { BusinessPurposeProperties } from "./BusinessPurposeProperties";
import { AttributeData } from "./AttributeData";

export const BusinessPurposeData: core.serialization.ObjectSchema<
    serializers.BusinessPurposeData.Raw,
    SayariAnalyticsApi.BusinessPurposeData
> = core.serialization
    .object({
        properties: BusinessPurposeProperties,
    })
    .extend(AttributeData);

export declare namespace BusinessPurposeData {
    interface Raw extends AttributeData.Raw {
        properties: BusinessPurposeProperties.Raw;
    }
}
