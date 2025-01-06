/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { ContactProperties } from "./ContactProperties";
import { AttributeData } from "./AttributeData";

export const ContactData: core.serialization.ObjectSchema<serializers.ContactData.Raw, Sayari.ContactData> =
    core.serialization
        .object({
            properties: ContactProperties,
        })
        .extend(AttributeData);

export declare namespace ContactData {
    export interface Raw extends AttributeData.Raw {
        properties: ContactProperties.Raw;
    }
}
