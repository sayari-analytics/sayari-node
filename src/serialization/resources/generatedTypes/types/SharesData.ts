/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api/index";
import * as core from "../../../../core";
import { SharesProperties } from "./SharesProperties";
import { AttributeData } from "./AttributeData";

export const SharesData: core.serialization.ObjectSchema<serializers.SharesData.Raw, SayariAnalyticsApi.SharesData> =
    core.serialization
        .object({
            properties: SharesProperties,
        })
        .extend(AttributeData);

export declare namespace SharesData {
    interface Raw extends AttributeData.Raw {
        properties: SharesProperties.Raw;
    }
}