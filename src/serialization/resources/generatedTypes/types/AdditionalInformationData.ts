/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { AdditionalInformationProperties } from "./AdditionalInformationProperties";
import { AttributeData } from "./AttributeData";

export const AdditionalInformationData: core.serialization.ObjectSchema<
    serializers.AdditionalInformationData.Raw,
    Sayari.AdditionalInformationData
> = core.serialization
    .object({
        properties: AdditionalInformationProperties,
    })
    .extend(AttributeData);

export declare namespace AdditionalInformationData {
    export interface Raw extends AttributeData.Raw {
        properties: AdditionalInformationProperties.Raw;
    }
}
