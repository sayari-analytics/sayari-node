/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from "../../../../core";
export const Bucket = core.serialization.object({
    key: core.serialization.string(),
    docCount: core.serialization.property("doc_count", core.serialization.number()),
});
