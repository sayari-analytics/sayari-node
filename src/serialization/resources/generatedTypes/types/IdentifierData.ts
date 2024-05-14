/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api/index";
import * as core from "../../../../core";
import { IdentifierProperties } from "./IdentifierProperties";
import { AttributeData } from "./AttributeData";

export const IdentifierData: core.serialization.ObjectSchema<
    serializers.IdentifierData.Raw,
    SayariAnalyticsApi.IdentifierData
> = core.serialization
    .object({
        properties: IdentifierProperties,
    })
    .extend(AttributeData);

export declare namespace IdentifierData {
    interface Raw extends AttributeData.Raw {
        properties: IdentifierProperties.Raw;
    }
}
