/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { NameProperties } from "./NameProperties";
import { AttributeData } from "./AttributeData";

export const NameData: core.serialization.ObjectSchema<serializers.NameData.Raw, Sayari.NameData> = core.serialization
    .object({
        properties: NameProperties,
    })
    .extend(AttributeData);

export declare namespace NameData {
    export interface Raw extends AttributeData.Raw {
        properties: NameProperties.Raw;
    }
}
