/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api/index";
import * as core from "../../../../core";
import { FinancialsProperties } from "./FinancialsProperties";
import { AttributeData } from "./AttributeData";

export const FinancialsData: core.serialization.ObjectSchema<
    serializers.FinancialsData.Raw,
    SayariAnalyticsApi.FinancialsData
> = core.serialization
    .object({
        properties: FinancialsProperties,
    })
    .extend(AttributeData);

export declare namespace FinancialsData {
    interface Raw extends AttributeData.Raw {
        properties: FinancialsProperties.Raw;
    }
}
