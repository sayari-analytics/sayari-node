/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api/index";
import * as core from "../../../../core";
import { GenericProperties } from "./GenericProperties";
import { AttributeData } from "./AttributeData";

export const GenericData: core.serialization.ObjectSchema<serializers.GenericData.Raw, SayariAnalyticsApi.GenericData> =
    core.serialization
        .object({
            properties: GenericProperties,
        })
        .extend(AttributeData);

export declare namespace GenericData {
    interface Raw extends AttributeData.Raw {
        properties: GenericProperties.Raw;
    }
}