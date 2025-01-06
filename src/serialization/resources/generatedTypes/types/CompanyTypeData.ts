/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { CompanyTypeProperties } from "./CompanyTypeProperties";
import { AttributeData } from "./AttributeData";

export const CompanyTypeData: core.serialization.ObjectSchema<serializers.CompanyTypeData.Raw, Sayari.CompanyTypeData> =
    core.serialization
        .object({
            properties: CompanyTypeProperties,
        })
        .extend(AttributeData);

export declare namespace CompanyTypeData {
    export interface Raw extends AttributeData.Raw {
        properties: CompanyTypeProperties.Raw;
    }
}
