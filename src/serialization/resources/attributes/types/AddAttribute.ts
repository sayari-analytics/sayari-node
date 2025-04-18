/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";

export const AddAttribute: core.serialization.ObjectSchema<serializers.AddAttribute.Raw, Sayari.AddAttribute> =
    core.serialization.object({
        entity: core.serialization.string(),
        type: core.serialization.string(),
        value: core.serialization.unknown(),
        date: core.serialization.string().optional(),
        fromDate: core.serialization.property("from_date", core.serialization.string().optional()),
        toDate: core.serialization.property("to_date", core.serialization.string().optional()),
    });

export declare namespace AddAttribute {
    export interface Raw {
        entity: string;
        type: string;
        value?: unknown;
        date?: string | null;
        from_date?: string | null;
        to_date?: string | null;
    }
}
