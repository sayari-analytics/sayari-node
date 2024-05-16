/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";

export const HsCode: core.serialization.ObjectSchema<serializers.HsCode.Raw, Sayari.HsCode> = core.serialization.object(
    {
        key: core.serialization.string(),
        docCount: core.serialization.property("doc_count", core.serialization.number()),
        value: core.serialization.string(),
        valueSimple: core.serialization.property("value_simple", core.serialization.string().optional()),
    }
);

export declare namespace HsCode {
    interface Raw {
        key: string;
        doc_count: number;
        value: string;
        value_simple?: string | null;
    }
}
