/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from "../../../../core";
export const AttributeData = core.serialization.object({
    record: core.serialization.list(core.serialization.string()),
    recordCount: core.serialization.property("record_count", core.serialization.number()),
});