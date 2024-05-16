/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { TranslatedNameProperties } from "./TranslatedNameProperties";
import { AttributeData } from "./AttributeData";

export const TranslatedNameData: core.serialization.ObjectSchema<
    serializers.TranslatedNameData.Raw,
    Sayari.TranslatedNameData
> = core.serialization
    .object({
        properties: TranslatedNameProperties,
    })
    .extend(AttributeData);

export declare namespace TranslatedNameData {
    interface Raw extends AttributeData.Raw {
        properties: TranslatedNameProperties.Raw;
    }
}
