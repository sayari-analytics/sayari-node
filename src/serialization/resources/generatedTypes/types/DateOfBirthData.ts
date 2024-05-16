/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { DateOfBirthProperties } from "./DateOfBirthProperties";
import { AttributeData } from "./AttributeData";

export const DateOfBirthData: core.serialization.ObjectSchema<serializers.DateOfBirthData.Raw, Sayari.DateOfBirthData> =
    core.serialization
        .object({
            properties: DateOfBirthProperties,
        })
        .extend(AttributeData);

export declare namespace DateOfBirthData {
    interface Raw extends AttributeData.Raw {
        properties: DateOfBirthProperties.Raw;
    }
}
