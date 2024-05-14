/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api/index";
import * as core from "../../../../core";
import { MonetaryValueProperties } from "./MonetaryValueProperties";
import { AttributeData } from "./AttributeData";

export const MonetaryValueData: core.serialization.ObjectSchema<
    serializers.MonetaryValueData.Raw,
    SayariAnalyticsApi.MonetaryValueData
> = core.serialization
    .object({
        properties: MonetaryValueProperties,
    })
    .extend(AttributeData);

export declare namespace MonetaryValueData {
    interface Raw extends AttributeData.Raw {
        properties: MonetaryValueProperties.Raw;
    }
}
